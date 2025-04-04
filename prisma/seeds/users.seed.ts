import { PrismaClient, User } from "@prisma/client";
import { hashSync } from "bcryptjs";

export const UserSeedFn = (prismaClient: PrismaClient) => {
  return UserSeed.map(async (data) => {
    await prismaClient.user
      .upsert({
        where: { user: data.user },
        create: {
          name: data.name,
          email: data.email,
          user: data.user,
          passwd: data.passwd,
          role: data.role,
        },
        update: {},
      })
      .then((data) => {
        console.log("User --> " + data.name + " created");
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

export const UserSeed: Omit<User, "id" | "created_at" | "updated_at">[] = [
  {
    name: "Matheus Henrique",
    user: "admin",
    passwd: hashSync("admin", 10),
    email: "matheus.henrique4245@gmail.com",
    role: "admin",
    teacher_id: null,
  },
];
