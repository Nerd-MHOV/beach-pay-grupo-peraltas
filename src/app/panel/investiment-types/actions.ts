"use server";
import db from "@/core/infra/db";
import { InvestimentType } from "@prisma/client";

export async function createInvestimentType(
  data: Omit<InvestimentType, "id" | "createdAt" | "updatedAt">
) {
  console.log(data, data.canSee);

  return await db.investimentType.create({ data });
}

export async function getInvestimentsType() {
  return await db.investimentType.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

export async function getInvestiments(athleteId?: string) {
  return await db.investiment.findMany({
    ...(athleteId && { where: { athleteId } }),
    include: {
      investimentType: true,
    },
    orderBy: {
      date: "desc",
    },
  });
}
