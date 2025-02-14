"use server";

import db from "@/core/infra/db";
import { Arena } from "@prisma/client";

export async function getArenas(): Promise<Arena[]> {
  return await db.arena.findMany();
}

export async function createArena(
  data: Omit<Arena, "id" | "createdAt" | "updatedAt">
) {
  return await db.arena.create({ data });
}
