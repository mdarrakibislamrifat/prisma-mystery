import { PrismaClient, UserRole } from "./generated/prisma/client.js";
import "dotenv/config";
const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user2",
  //     email: "user2@gmail.com",
  //     role: UserRole.user,
  //   },
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is user1 bio",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.createMany({
  //   data: [
  //     { name: "Web Dev" },
  //     { name: "Js" },
  //     { name: "programming" },
  //     {
  //       name: "Software Development",
  //     },
  //   ],
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "This is post title 5",
      content: "This is post content 5",
      authorId: 2,
      postCategory: {
        create: [
          {
            category: { connect: { id: 1 } },
          },
          {
            category: { connect: { id: 2 } },
          },
          {
            category: { connect: { id: 3 } },
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log("Created User:", createPost);
};

main();
