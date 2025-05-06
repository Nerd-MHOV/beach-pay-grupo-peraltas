import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";

type Tournament = {
  id: string;
  name: string;
  date_from: string;
  date_to: string;
  description: string | null;
  arena_id: string;
  created_at: string;
  updated_at: string;
};

type tournamentSeedType = Tournament[];
export const TournamentSeedFn = async (prismaClient: PrismaClient) => {
  const data = readFileSync('prisma/seeds/jsons/tournament.json', 'utf8');
  const parsedData = JSON.parse(data) as tournamentSeedType;

  for (const tournament of parsedData) {
    await prismaClient.tournament.upsert({
      where: { id: tournament.id },
      create: {
        ...tournament,
        date_from: new Date(tournament.date_from),
        date_to: new Date(tournament.date_to),
        created_at: new Date(tournament.created_at),
        updated_at: new Date(tournament.updated_at),
      },
      update: {}
    });
  }

  console.log("Seeding tournaments completed.");
};