import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";

type InvestmentTournament = {
  id: string;
  athlete_id: string;
  pair_id: string | null;
  tournament_id: string | null;
  podium: string | null;
  description: string | null;
  pair_amount: number | null;
  km: number | null;
  km_racional: number | null;
  created_at: string;
  updated_at: string;
};

type investmentTournamentSeedType = InvestmentTournament[];
export const InvestmentTournamentSeedFn = async (prismaClient: PrismaClient) => {
  const data = readFileSync('prisma/seeds/jsons/investment_group.json', 'utf8');
  const parsedData = JSON.parse(data) as investmentTournamentSeedType;

  for (const investmentTournament of parsedData) {
    const { km_racional, ...rest } = investmentTournament;
    await prismaClient.investmentTournament.upsert({
      where: { id: investmentTournament.id },
      create: {
        ...rest,
        tournament_id: investmentTournament.tournament_id || "",
        podium: investmentTournament.podium || "",
        pair_amount: investmentTournament.pair_amount || 0,
        km: investmentTournament.km || 0,
        created_at: new Date(investmentTournament.created_at),
        updated_at: new Date(investmentTournament.updated_at),
      },
      update: {}
    });
  }

  console.log("Seeding investment tournaments completed.");
};