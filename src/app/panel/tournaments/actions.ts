"use server";

import db from "@/core/infra/db";
import { verifySession } from "@/lib/session";
import { Tournament } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";

export async function createTournament(
  data: Omit<Tournament, "id" | "createdAt" | "updatedAt">,
) {
  const tournament = await db.tournament.create({
    data,
    include: { arena: true },
  });
  revalidateTag("create-tournament");
  return tournament;
}

export async function updateTournament(
  data: Omit<Tournament, "createdAt" | "updatedAt">,
) {
  const tournament = await db.tournament.update({
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
  revalidateTag("update-tournament");
  return tournament;
}

export const getTournaments = unstable_cache(
  async () => {
    return await db.tournament.findMany({
      include: {
        arena: true,
      },
    });
  },
  ["tournaments"],
  {
    tags: ["create-tournament", "update-tournament"],
  },
);

export const getTournamentById = async (id: string) => {
  const session = await verifySession();
  return await cachedTournamentById(session.userId, id);
}

const cachedTournamentById = unstable_cache(
  async (userId: string, id: string) => {
    const user = await db.user.findFirst({ where: { id: userId } });
    if (!user) {
      return null;
    }
    return await db.tournament.findUnique({
      where: {
        id,
      },
      include: {
        arena: true,
        investmentGroup: {
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
            },
            athlete: true,
          },
        },
      },
    });
  },
  ["tournaments"],
  {
    tags: ["create-tournament", "update-tournament"],
  },
);