import { $Enums, PrismaClient, User } from "@prisma/client";
import { readFileSync } from "fs";



type userSeedType = {
  "id": string,
  "name": string,
  "user": string,
  "passwd": string,
  "email": string,
  "role": $Enums.UserRole,
  "teacher_id": string | null,
  "created_at": string,
  "updated_at": string
}[];
export const UserSeedFn = async (prismaClient: PrismaClient) => {
  const data = readFileSync('prisma/seeds/jsons/user.json', 'utf8');
  const parsedData = JSON.parse(data) as userSeedType;


  for (const user of parsedData) {
    await prismaClient.user.upsert({
      where: { id: user.id },
      create: {
        ...user,
        created_at: new Date(user.created_at),
        updated_at: new Date(user.updated_at),
      },
      update: {}
    });
  }

  console.log("Seeding users completed.");
};
