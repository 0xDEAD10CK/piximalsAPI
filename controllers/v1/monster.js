import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const generateMonster = async (req, res) => {
    const { name, type, species, rarity, hp, ap } = req.body;
    console.log(name, type, species, rarity, hp, ap)
  try { 

    const monster = await prisma.monster.create({
        name,
        type,
        species,
        rarity,
        url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=rt349gt2493gt09g2403h240`,
        hp,
        ap
    })

    console.log(monster)
    
    return res.status(201).json({
      msg: "Monster successfully generated",
      data: monster,
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

export { generateMonster };