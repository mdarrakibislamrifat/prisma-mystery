import { PrismaClient } from "./generated/prisma/client.js";
import "dotenv/config";
const prisma = new PrismaClient();

const interactiveTransactions = async () => {
  const result = await prisma.$transaction(async (transactionClient) => {
    //   query 1
    const getAllPosts = await transactionClient.post.findMany({
      where: { published: true },
    });
    // query 2
    const countUser = await transactionClient.user.count();

    // query 3
    const updateUser = await transactionClient.user.update({
      where: { id: 1 },
      data: {
        age: 44,
      },
    });
    return { getAllPosts, countUser, updateUser };
  });
  console.log(result);
};

interactiveTransactions();
