"use server";

import db from "@/core/infra/db/db";
import { Arena } from "@prisma/client";

export async function getArenas(): Promise<Arena[]> {
  return await db.arena.findMany();
}

export async function createArena(
  data: Omit<Arena, "id" | "createdAt" | "updatedAt">
) {
  await db.arena.create({ data });
}
