import { PrismaClient } from "@prisma/client";
import { UserSeed } from "./seeds/users";
const prismaClient = new PrismaClient();

async function main() {
  console.log("Start seeding ...");
  console.log("Seeding users ...");

  await Promise.all(
    UserSeed.map(async (data) => {
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
    })
  ).then(() => {
    console.log(
      "///---------------------------------------------//\n Users ok \n\n"
    );
  });
}

main()
  .catch(async (e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
