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

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "My first title",
        content: "Hello world",
        authorName: "Rifat",
      },
      {
        title: "A day in the life",
        content: "Today I went for a walk in the park.",
        authorName: "Alice",
      },
      {
        title: "Learning TypeScript",
        content: "TypeScript makes JavaScript safer and more predictable.",
        authorName: "Bob",
      },
      {
        title: "My travel plans",
        content: "I’m planning a trip to Japan next spring.",
        authorName: "Charlie",
      },
      {
        title: "Healthy recipes",
        content: "I tried a new smoothie recipe today and it was delicious.",
        authorName: "Diana",
      },
      {
        title: "Coding tips",
        content: "Always write small functions to keep your code clean.",
        authorName: "Ethan",
      },
      {
        title: "Favorite books",
        content: "I just finished reading 'The Great Gatsby'.",
        authorName: "Fiona",
      },
      {
        title: "Morning routine",
        content: "Meditation and a cup of coffee start my day right.",
        authorName: "George",
      },
      {
        title: "Tech news",
        content: "New AI tools are changing the way we code.",
        authorName: "Hannah",
      },
      {
        title: "Weekend vibes",
        content: "Relaxing at home with some good music and tea.",
        authorName: "Ibrahim",
      },
    ],
  });

  console.log(createMany);
};

main();
