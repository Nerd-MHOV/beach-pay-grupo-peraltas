import { PrismaClient } from "@prisma/client";
import { UserSeedFn } from "./seeds/users.seed";
import { AthleteSeedFn } from "./seeds/athletes.seed";
import { InvestimentTypeSeedFn } from "./seeds/investiment-type.seed";
import { investimentsSeedFN } from "./seeds/investiments.seed";
const prismaClient = new PrismaClient();

async function main() {
  console.log("Start seeding ...");
  console.log("Seeding users ...");

  await Promise.all([
    UserSeedFn(prismaClient),
    AthleteSeedFn(prismaClient),
    InvestimentTypeSeedFn(prismaClient),
    investimentsSeedFN(prismaClient),
  ]);
}

main()
  .catch(async (e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
