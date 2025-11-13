import { PrismaClient } from "./generated/prisma/client.js";
import "dotenv/config";
const prisma = new PrismaClient();

const paginationSorting = async () => {
  //   offset & limit for pagination
  const offsetdata = await prisma.post.findMany({
    skip: 5,
    take: 2,
  });
  // console.log("Offset Paginated data", offsetdata);

  // const cursordata = await prisma.post.findMany({

  //   skip: 5,
  //     take: 2,
  //     cursor: {
  //         id: 33,
  //   }
  // });
  // console.log("Cursor Paginated data", cursordata);

  // sorting
  const sortingdata = await prisma.post.findMany({
    orderBy: {
      title: "asc",
    },
  });
  console.log(sortingdata);
};

paginationSorting();
