import { User } from "@prisma/client";
import { hashSync } from "bcryptjs";

export const UserSeed: Omit<User, "id" | "createdAt" | "updatedAt">[] = [
  {
    name: "Matheus Henrique",
    user: "admin",
    passwd: hashSync("admin", 10),
    email: "matheus.henrique4245@gmail.com",
    role: "ADMIN",
  },
];
