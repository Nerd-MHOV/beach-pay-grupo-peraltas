import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";

type Investment = {
  id: string;
  investment_type_id: string;
  athlete_id: string;
  value: number;
  description: string;
  date: string;
  paid: string | null;
  proof: string | null;
  investment_group_id: string | null;
  created_at: string;
  updated_at: string;
};

type investmentSeedType = Investment[];
export const InvestmentSeedFn = async (prismaClient: PrismaClient) => {
  const data = readFileSync('prisma/seeds/jsons/investment.json', 'utf8');
  const parsedData = JSON.parse(data) as investmentSeedType;

  for (const investment of parsedData) {
    const { investment_group_id, ...rest } = investment;
    await prismaClient.investment.upsert({
      where: { id: investment.id },
      create: {
        ...rest,
        investment_tournament_id: investment_group_id || null,
        date: new Date(investment.date),
        paid: investment.paid ? new Date(investment.paid) : null,
        created_at: new Date(investment.created_at),
        updated_at: new Date(investment.updated_at),
      },
      update: {}
    });
  }

  console.log("Seeding investments completed.");
};