"use server";

import db from "@/core/infra/db";
import { Tournament } from "@prisma/client";

export async function createTournament(
  data: Omit<Tournament, "id" | "createdAt" | "updatedAt">
) {
  return await db.tournament.create({ data, include: { arena: true } });
}

export async function updateTournament(
  data: Omit<Tournament, "createdAt" | "updatedAt">
) {
  return await db.tournament.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      updatedAt: new Date(),
    },
    include: {
      arena: true,
    },
  });
}

export async function getTournaments() {
  return await db.tournament.findMany({
    include: {
      arena: true,
    },
  });
}
