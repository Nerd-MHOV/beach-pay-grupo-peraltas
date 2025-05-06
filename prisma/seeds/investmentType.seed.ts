import { PrismaClient, UserRole } from "@prisma/client";
import { readFileSync } from "fs";

type InvestmentType = {
  id: string;
  name: string;
  description: string;
  can_see: UserRole[];
  created_at: string;
  updated_at: string;
};

type investmentTypeSeedType = InvestmentType[];
export const InvestmentTypeSeedFn = async (prismaClient: PrismaClient) => {
  const data = readFileSync('prisma/seeds/jsons/investment_type.json', 'utf8');
  const parsedData = JSON.parse(data) as investmentTypeSeedType;

  for (const investmentType of parsedData) {
    await prismaClient.investmentType.upsert({
      where: { id: investmentType.id },
      create: {
        ...investmentType,
        created_at: new Date(investmentType.created_at),
        updated_at: new Date(investmentType.updated_at),
      },
      update: {}
    });
  }

  console.log("Seeding investment types completed.");
};