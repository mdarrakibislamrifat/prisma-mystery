import { PrismaClient } from "./generated/prisma/client.js";
import "dotenv/config";
const prisma = new PrismaClient();

const main = async () => {
  // find all code
  const getAllFromDB = await prisma.post.findMany();

  const getOneFromDB = await prisma.post.findFirst({
    where: {
      id: 8,
    },
  });

  const getFirstFromDB = await prisma.post.findFirstOrThrow({
    where: {
      id: 8,
    },
  });

  const findUniqueFromDB = await prisma.post.findUniqueOrThrow({
    where: {
      id: 8,
    },
  });

  console.log(findUniqueFromDB);
};

main();
