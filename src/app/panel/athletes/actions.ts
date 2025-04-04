"use server";

import db from "@/core/infra/db";
import { verifySession } from "@/lib/session";
import { Athlete, UserRole } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";
import { cookies } from "next/headers";



const cachedAthletes = unstable_cache(
  async (userId: string) => {
    const user = await db.user.findFirst({ where: { id: userId } });
    if (!user) {
      return [];
    }
    return await db.athlete.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        investments: {
          where: {
            investmentType: {
              canSee: {
                has: user.role,
              },
            },
          },
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

export async function getAthletes() {
  const session = await verifySession();
  return await cachedAthletes(session.userId);
}

export async function getAthleteById(id: string) {
  const session = await verifySession();
  const user = await db.user.findFirst({ where: { id: session.userId } });
  if (!user) {
    return null;
  }
  return await db.athlete.findFirst({
    where: { id },
    include: {
      investments: {
        where: {
          investmentType: {
            canSee: {
              has: user.role,
            },
          },
        },
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
