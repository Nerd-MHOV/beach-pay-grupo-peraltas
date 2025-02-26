"use server";

import db from "@/core/infra/db";
import { Arena } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";

export const getArenas = unstable_cache(
  async () => {
    return await db.arena.findMany({
      orderBy: {
        name: "asc",
      },
    });
  },
  ["arenas"],
  {
    tags: ["update-arena", "create-arena"],
  }
);

export async function createArena(
  data: Omit<Arena, "id" | "createdAt" | "updatedAt">
) {
  const arena = await db.arena.create({ data });
  revalidateTag("create-arena");
  return arena;
}

export async function updateArena(
  data: Omit<Arena, "createdAt" | "updatedAt">
) {
  const arena = await db.arena.update({
    where: { id: data.id },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });
  revalidateTag("update-arena");
  return arena;
}
