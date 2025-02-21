"use server";

import db from "@/core/infra/db";
import { Athlete } from "@prisma/client";

export async function getAthleteById(id: string) {
  return await db.athlete.findFirst({
    where: { id },
    include: {
      investiments: {
        include: {
          athlete: true,
          investimentGroup: {
            include: {
              pair: true,
              tournament: {
                include: {
                  arena: true,
                },
              },
              investiments: {
                include: {
                  investimentType: true,
                },
              },
            },
          },
          investimentType: true,
        },
      },
      investiment_group_athlete: {
        include: {
          athlete: true,
          pair: true,
          tournament: {
            include: {
              arena: true,
            },
          },
          investiments: {
            include: {
              investimentType: true,
            },
          },
        },
      },
    },
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

export async function deleteAthlete(id: string) {
  return await db.athlete.delete({
    where: { id },
  });
}
