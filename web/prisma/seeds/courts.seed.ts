import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";

type Courts = {
  id: string;
  name: string;
  number: number;
  is_single: boolean;
  created_at: string;
  updated_at: string;
};

type courtsSeedType = Courts[];
export const CourtsSeedFn = async (prismaClient: PrismaClient) => {
  const data = readFileSync('prisma/seeds/jsons/courts.json', 'utf8');
  const parsedData = JSON.parse(data) as courtsSeedType;

  for (const court of parsedData) {
    await prismaClient.courts.upsert({
      where: { id: court.id },
      create: {
        ...court,
        created_at: new Date(court.created_at),
        updated_at: new Date(court.updated_at),
      },
      update: {}
    });
  }

  console.log("Seeding courts completed.");
};