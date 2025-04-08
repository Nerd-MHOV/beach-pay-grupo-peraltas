"use server";

import db from "@/core/infra/db";
import { Address, Arena } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";

export const getArenas = unstable_cache(
  async () => {
    return await db.arena.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        address: true,
      }
    });
  },
  ["arenas"],
  {
    tags: ["update-arena", "create-arena"],
  }
);

export async function createArena(
  data: Omit<Arena & {
    address: Omit<Address, "id" | "created_at" | "updated_at">;
  }, "id" | "created_at" | "updated_at" | "address_id">
) {
  const { address, ...arenaData } = data;
  const arena = await db.arena.create({
    data: {
      ...arenaData,
      address: {
        create: {
          ...address,
        },
      },
    }
  });
  revalidateTag("create-arena");
  return arena;
}

export async function updateArena(
  data: Omit<Arena & {
    address: Omit<Address, "created_at" | "updated_at">;
  }, "created_at" | "updated_at">
) {
  const { address, address_id, ...arenaData } = data;
  const arena = await db.arena.update({
    where: { id: data.id },
    data: {
      ...arenaData,
      updated_at: new Date(),

      address: {
        upsert: {
          where: { id: address_id },
          update: {
            ...address,
          },
          create: {
            ...address,
          },
        }
      }
    },
  });
  revalidateTag("update-arena");
  return arena;
}
