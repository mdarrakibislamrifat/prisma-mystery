import { PrismaClient, UserRole } from "./generated/prisma/client.js";
import "dotenv/config";
const prisma = new PrismaClient();

const aggregates = async () => {
  // Find average age of users
  //   const avgAge = await prisma.user.aggregate({
  //     _avg: {
  //       age: true,
  //     },
  //   });

  // find sum of ages of users
  //   const sumAge = await prisma.user.aggregate({
  //     _sum: {
  //       age: true,
  //     },
  //   });

  // counts of ages of users
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });

  // max age of users
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  // min age of users
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  console.log(minAge);
};

aggregates();
