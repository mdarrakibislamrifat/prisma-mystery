import { PrismaClient } from "./generated/prisma/client.js";
import "dotenv/config";
const prisma = new PrismaClient();

const groupBy = async () => {
  const groupByPost = await prisma.post.groupBy({
    by: ["authorId", "published"],
    _count: {
      title: true,
    },
    having: {
      authorId: {
        gt: 1,
      },
    },
  });
  console.log(groupByPost);
};

groupBy();
