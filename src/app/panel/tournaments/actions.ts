"use server";

import db from "@/core/infra/db";
import { Tournament } from "@prisma/client";

export async function createTournament(
  data: Omit<Tournament, "id" | "createdAt" | "updatedAt">
) {
  console.log(data);
  await db.tournament.create({ data });
}

export async function getTournaments() {
  return await db.tournament.findMany({
    include: {
      arena: true,
    },
  });
}
