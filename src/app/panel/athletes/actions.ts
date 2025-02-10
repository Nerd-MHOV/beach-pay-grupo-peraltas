"use server";

import db from "@/core/infra/db";
import { Athlete } from "@prisma/client";

export async function createAthlete(
  data: Omit<Athlete, "id" | "createdAt" | "updatedAt">
) {
  await db.athlete.create({ data });
}

export async function getAthletes() {
  return await db.athlete.findMany({
    orderBy: {
      name: "asc",
    },
  });
}
