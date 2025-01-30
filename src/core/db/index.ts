import { PrismaClient } from "@prisma/client";
import dbUser from "./user.db";

const prismaClientSingleton = () => {
  return new PrismaClient();
};
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

const db = {
  user: dbUser(prisma),
};

export default db;
