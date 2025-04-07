"use server";

import db from "@/core/infra/db";
import { verifySession } from "@/lib/session";
import { Address, Athlete } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";

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
        address: true,
        investments: {
          where: {
            investment_type: {
              can_see: {
                has: user.role,
              },
            },
          },
          include: {
            investment_type: true,
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
      address: true,
      user: true,
      investments: {
        where: {
          investment_type: {
            can_see: {
              has: user.role,
            },
          },
        },
        include: {
          athlete: true,
          investment_group: {
            include: {
              pair: true,
              tournament: {
                include: {
                  arena: true,
                },
              },
              investments: {
                include: {
                  investment_type: true,
                },
              },
            },
          },
          investment_type: true,
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
              investment_type: true,
            },
          },
        },
      },
    },
  });
}

export async function createAthlete(
  data: Omit<Athlete & {
    address: Omit<Address, "id" | "created_at" | "updated_at">,
    teacher_user_id?: string | null,
  }, "id" | "created_at" | "updated_at" | "address_id">
) {
  const { teacher_user_id, ...rest } = data;
  const athlete = await db.athlete.create({
    data: {
      ...rest,

      ...(teacher_user_id && rest.is_teacher ? {
        user: {
          connect: {
            id: teacher_user_id,
          }
        }
      } : {}),

      address: {
        create: {
          ...rest.address,
        }
      }
    }
  });
  revalidateTag("create-athlete");
  return athlete;
}

export async function updateAthlete(
  data: Omit<Athlete & {
    address: Omit<Address, "created_at" | "updated_at">,
    teacher_user_id?: string | null,
  }, "created_at" | "updated_at" | "address_id">
) {

  const { teacher_user_id, ...rest } = data;

  const athlete = await db.athlete.update({
    where: { id: data.id },
    data: {
      ...rest,
      updated_at: new Date(),

      ...(data.teacher_user_id && data.is_teacher ? {
        user: {
          connect: {
            id: data.teacher_user_id,
          }
        }
      } : {}),

      address: {
        upsert: {
          where: { id: data.address.id },
          update: {
            ...data.address,
            updated_at: new Date(),
          },
          create: {
            ...data.address,
          }
        }
      }
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


export async function getAthletesTeachers() {
  const athletes = await db.athlete.findMany({
    where: {
      is_teacher: true,
    },
  })
  return athletes;
}