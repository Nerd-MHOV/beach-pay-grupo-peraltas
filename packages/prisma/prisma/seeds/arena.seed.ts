import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";

type Arena = {
  id: string;
  name: string;
  address_id: string;
  created_at: string;
  updated_at: string;
};

type arenaSeedType = Arena[];
export const ArenaSeedFn = async (prismaClient: PrismaClient) => {
  const data = readFileSync('prisma/seeds/jsons/arena.json', 'utf8');
  const parsedData = JSON.parse(data) as arenaSeedType;

  for (const arena of parsedData) {
    await prismaClient.arena.upsert({
      where: { id: arena.id },
      create: {
        ...arena,
        created_at: new Date(arena.created_at),
        updated_at: new Date(arena.updated_at),
      },
      update: {}
    });
  }

  console.log("Seeding arena completed.");
};