"use server";
import db from "@/core/infra/db/db";
import { InvestimentType } from "@prisma/client";

export async function createInvestimentType(
  data: Omit<InvestimentType, "id" | "createdAt" | "updatedAt">
) {
  console.log(data, data.canSee);

  await db.investimentType.create({ data });
}

export async function getInvestiments() {
  return await db.investimentType.findMany();
}
