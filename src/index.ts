import { PrismaClient } from "./generated/prisma/client.js";
import "dotenv/config";
const prisma = new PrismaClient();

const main = async () => {
  // const result = await prisma.post.create({
  //   data: {
  //     title: "My first post",
  //     content: "Hello world 5",
  //     authorName: "Rakib Islam Rifat",
  //   },
  // });
  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
};

main();
