import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    let user = await prisma.account.findUnique({ where: { username } });

    if (user) {
      return res.status(409).json({ msg: "User already exists" });
    }

    // Set a default role if not provided or if it's not a valid admin role
    const defaultRole = process.env.defaultUserRole || "BASIC_USER";
    const finalRole = role === process.env.adminRole ? role : defaultRole;

    const salt = await bcryptjs.genSalt();
    const hashedPassword = await bcryptjs.hash(password, salt);

    user = await prisma.account.create({
      data: { username, password: hashedPassword, role: finalRole, locationId: 1 },
    });

    delete user.password;

    res.set("Access-Control-Allow-Origin", "*"); // set the CORS header

    return res.status(201).json({
      msg: "User successfully registered",
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

const login = async (req, res) => {
    try {
    const { username, password } = req.body;

    const user = await prisma.account.findUnique({ where: { username } });

    if (!user) {
      return res.status(401).json({ msg: "Invalid username" });
    }

    const isPasswordCorrect = await bcryptjs.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ msg: "Invalid password" });
    }

    const { JWT_SECRET, JWT_LIFETIME } = process.env;

    const token = jwt.sign(
      {
        id: user.id,
        name: user.username,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: JWT_LIFETIME }
    );

    return res.status(200).json({
      msg: "User successfully logged in",
      token: token,
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

export { register, login};