import { PrismaClient } from "./generated/prisma/client.js";

import "dotenv/config";

const prisma = new PrismaClient();

// fluent way to query relational data
const relationalQueries = async () => {
  //   const result = await prisma.user
  //     .findUnique({
  //       where: {
  //         id: 2,
  //       },
  //     })
  //         .post();

  // relational filtering
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });
  console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQueries();
