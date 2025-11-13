import { PrismaClient } from "./generated/prisma/client.js";
import "dotenv/config";
const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "My first post",
  //       content: "Hello world 3",
  //       authorName: "Rifat",
  //     },
  //   });
  //   // const getAllFromDB = await prisma.post.findMany();
  //   console.log(result);

  //   const updateDB = await prisma.post.update({
  //     where: {
  //       id: 3,
  //     },
  //     data: {
  //       title: "Updated Title",
  //       content: "This is the updated content.",
  //       authorName: "Updated Author",
  //     },
  //   });

  const updateMany = await prisma.post.updateMany({
    where: {
      title: "My first post",
    },
    data: {
      published: false,
    },
  });

  console.log(updateMany);
};

main();
