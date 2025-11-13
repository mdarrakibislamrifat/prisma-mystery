import { PrismaClient } from "./generated/prisma/client.js";
import "dotenv/config";
const prisma = new PrismaClient();

const main = async () => {
  //   const deleteData = await prisma.post.delete({
  //     where: {
  //       id: 4,
  //     },
  //   });
  //   console.log(deleteData);

  //   const deleteMany = await prisma.post.deleteMany({
  //     where: {
  //       published: false,
  //     },
  //   });

  const upsertDb = await prisma.post.upsert({
    where: { id: 10 },
    update: {
      title: "Updated upserted title",
    },
    create: {
      title: "Upserted title",
      content: "Upserted content",
    },
  });
  console.log(upsertDb);
};

main();
