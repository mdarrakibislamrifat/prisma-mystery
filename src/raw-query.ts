import { PrismaClient } from "./generated/prisma/client.js";
import "dotenv/config";
const prisma = new PrismaClient();

const rawQuery = async () => {
  //   const posts =
  //     await prisma.$queryRaw`SELECT * FROM "posts" WHERE published = true;`;
  //   console.log(posts);

  // delete users table data
  await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`;
};

rawQuery();
