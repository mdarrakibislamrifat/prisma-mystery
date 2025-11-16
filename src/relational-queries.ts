import { PrismaClient } from "./generated/prisma/client.js";

import "dotenv/config";

const prisma = new PrismaClient();

// fluent way to query relational data
const relationalQueries = async () => {
  const result = await prisma.user
    .findUnique({
      where: {
        id: 2,
      },
    })
    .post();
  console.log(result);
};

relationalQueries();
