import { PrismaClient, UserRole } from "./generated/prisma/client.js";
import "dotenv/config";
const prisma = new PrismaClient();

const filtering = async () => {
  //   const andFiltering = await prisma.post.findMany({
  //     where: {
  //       AND: [
  //         {
  //           title: {
  //             contains: "title",
  //           },
  //           {
  //             published: true,}
  //         },
  //       ],
  //     },
  //   });

  //   const orFiltering = await prisma.post.findMany({
  //     where: {
  //       OR: [
  //         {
  //           title: {
  //             contains: "title",
  //           },
  //         },
  //         {
  //           published: true,
  //         },
  //       ],
  //     },
  //   });

  //   const notFiletering = await prisma.post.findMany({
  //     where: {
  //       NOT: [
  //         {
  //           title: {
  //             contains: "title 1",
  //           },
  //         },
  //       ],
  //     },
  //   });

  const startWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "user1",
      },
    },
  });

  console.log(startWith);
};

filtering();
