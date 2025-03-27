"use server";

import db from "@/core/infra/db";
import { Athlete } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";

export const getAthletes = unstable_cache(
  async () => {
    return await db.athlete.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        investments: {
          include: {
            investmentType: true,
          },
          orderBy: {
            date: "desc",
          },
        },
      },
    });
  },
  ["athletes"],
  {
    tags: [
      "create-athlete",
      "update-athlete",
      "delete-athlete",
      "create-investment",
      "update-investment",
    ],
  }
);

export async function getAthleteById(id: string) {
  return await db.athlete.findFirst({
    where: { id },
    include: {
      investments: {
        include: {
          athlete: true,
          investmentGroup: {
            include: {
              pair: true,
              tournament: {
                include: {
                  arena: true,
                },
              },
              investments: {
                include: {
                  investmentType: true,
                },
              },
            },
          },
          investmentType: true,
        },
      },
      investment_group_athlete: {
        include: {
          athlete: true,
          pair: true,
          tournament: {
            include: {
              arena: true,
            },
          },
          investments: {
            include: {
              investmentType: true,
            },
          },
        },
      },
    },
  });
}

export async function createAthlete(
  data: Omit<Athlete, "id" | "createdAt" | "updatedAt">
) {
  const athlete = await db.athlete.create({ data });
  revalidateTag("create-athlete");
  return athlete;
}

export async function updateAthlete(
  data: Omit<Athlete, "createdAt" | "updatedAt">
) {
  const athlete = await db.athlete.update({
    where: { id: data.id },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });
  revalidateTag("update-athlete");
  return athlete;
}

export async function deleteAthlete(id: string) {
  const athlete = await db.athlete.delete({
    where: { id },
  });
  revalidateTag("delete-athlete");
  return athlete;
}
