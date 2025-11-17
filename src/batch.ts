import { PrismaClient, UserRole } from "./generated/prisma/client.js";
import "dotenv/config";
const prisma = new PrismaClient();

const batchTransactions = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "newuser",
      email: "newuser@gmail.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      age: 30,
    },
  });

  const [userdata, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log("Created User:", userdata);
  console.log("Updated User:", updateData);
};

batchTransactions();
