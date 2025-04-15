import { PrismaClient } from "@prisma/client";
import { UserSeedFn } from "./seeds/users.seed";
import { AthleteSeedFn } from "./seeds/athletes.seed";
import { InvestmentTypeSeedFn } from "./seeds/investment-type.seed";
import { investmentsSeedFN } from "./seeds/investments.seed";
import { CourtsSeedFn } from "./seeds/courts.seed";
const prismaClient = new PrismaClient();

async function main() {
  console.log("Start seeding ...");
  console.log("Seeding users ...");

  await Promise.all([
    UserSeedFn(prismaClient),
    AthleteSeedFn(prismaClient),
    InvestmentTypeSeedFn(prismaClient),
    investmentsSeedFN(prismaClient),
    CourtsSeedFn(prismaClient),
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
