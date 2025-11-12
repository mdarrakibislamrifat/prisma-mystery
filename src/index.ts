import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.create({
    data: {
      title: "My first post",
      content: "Hello world 3",
      authorName: "Rakib Islam Rifat",
    },
  });
  //   const getAllFromDB = await prisma.post.findMany();
  //   console.log(getAllFromDB);
};

main();
