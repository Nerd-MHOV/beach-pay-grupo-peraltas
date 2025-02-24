"use server";
import db from "@/core/infra/db";
import { InvestimentType } from "@prisma/client";

export async function createInvestimentType(
  data: Omit<InvestimentType, "id" | "createdAt" | "updatedAt">
) {
  return await db.investimentType.create({ data });
}

export async function updateInvestimentType(
  data: Omit<InvestimentType, "createdAt" | "updatedAt">
) {
  return await db.investimentType.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });
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
      athlete: true,
    },
    orderBy: {
      date: "desc",
    },
  });
}
