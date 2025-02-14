"use server";

import db from "@/core/infra/db";
import { Athlete } from "@prisma/client";

export async function getAthleteById(id: string) {
  return await db.athlete.findFirst({
    where: { id },
  });
}

export async function updateAthlete(
  id: string,
  data: Omit<Athlete, "id" | "createdAt" | "updatedAt">
) {
  return await db.athlete.update({
    where: { id },
    data,
  });
}
