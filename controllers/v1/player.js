import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getPlayerInfo = async (req, res) => {
    const user = req.user
  try { 
    const userdata = await prisma.user.findUnique({
        where: { id: Number(user.id) },
        select: {
          id: true,
          username: true,
          currency: true
          // other fields you want to include
        },
      });

    console.log(userdata)
    
    return res.status(201).json({
      msg: "User information successfully fetched!",
      data: userdata,
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

export { getPlayerInfo };