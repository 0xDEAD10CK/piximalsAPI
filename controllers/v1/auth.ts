import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { Account } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type SafeAccount = Omit<Account, 'password'>

interface RegisterRequestBody {
  username: string;
  password: string;
  role: string
}

interface ErrorResponse {
  msg: string;
}

interface SuccessResponse {
  msg: string;
  data: SafeAccount
}

const sanitizeAccount = (account: Account): SafeAccount => {
  const { password, ...safe } = account
  return safe
}

const register = async (
      req: Request<{}, {}, RegisterRequestBody>, 
      res: Response<SuccessResponse | ErrorResponse>
    ): Promise<void> => {
    
  try {
    const { username, password, role } = req.body;

    let existingUser = await prisma.account.findUnique({ 
      where: { username } 
    });

    if (existingUser) {
      res.status(409).json({ msg: "User already exists" });
      return
    }

    // Set a default role if not provided or if it's not a valid admin role
    const defaultRole = process.env.defaultUserRole || "BASIC_USER";
    const finalRole = role === process.env.adminRole ? role : defaultRole;

    const salt = await bcryptjs.genSalt(); 
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await prisma.account.create({
      data: {
        username,
        password: hashedPassword,
        role: finalRole,
        inventory: {
          create: {}, // Create an empty inventory record associated with the user
        },
        locationId: 1, // Set the user's location to the default location
      },
      include: {
        inventory: true, // Include the inventory in the returned user object
        menagerie: true, // Include the menagerie in the returned user object
      },
    });

    res.set("Access-Control-Allow-Origin", "*");
    res.status(201).json({
      msg: "User successfully registered",
      data: sanitizeAccount(newUser),
    });
  } catch (err: any) {
    res.status(500).json({
      msg: err.message || "Internal Server Error",
    });
  }
};

interface loginRequestBody {
  username: string,
  password: string
}

interface LoginSuccessResponse {
  msg: string;
  token: string;
}

const login = async (
      req: Request<{}, {}, loginRequestBody>, 
      res: Response<LoginSuccessResponse | ErrorResponse>
    ): Promise<void> => {
  try {
    const { username, password } = req.body;

    const user = await prisma.account.findUnique({ where: { username } });

    if (!user) {
      res.status(401).json({ msg: "Invalid username" });
      return
    }

    const isPasswordCorrect = await bcryptjs.compare(password, user.password);

    if (!isPasswordCorrect) {
      res.status(401).json({ msg: "Invalid password" });
      return
    }

    const { JWT_SECRET, JWT_LIFETIME } = process.env;
    if (!JWT_LIFETIME || !JWT_SECRET) {
      res.status(500).json({ msg: "JWT enviroment variables not set" })
      return
    }

    const token = jwt.sign(
      {
        id: user.id,
        name: user.username,
        role: user.role
      },
        JWT_SECRET,
        {expiresIn: "24hr"}
      );

    res.status(200).json({
      msg: "User successfully logged in",
      token: token,
    });
  } catch (err: any) {
    res.status(500).json({
      msg: err.message,
    });
  }
};

export { register, login};