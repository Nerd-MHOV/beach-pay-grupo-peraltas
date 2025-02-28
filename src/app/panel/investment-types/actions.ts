"use server";
import db from "@/core/infra/db";
import { InvestmentType } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";

export async function createInvestmentType(
  data: Omit<InvestmentType, "id" | "createdAt" | "updatedAt">
) {
  const investmentType = await db.investmentType.create({ data });
  revalidateTag("create-investmentType");
  return investmentType;
}

export async function updateInvestmentType(
  data: Omit<InvestmentType, "createdAt" | "updatedAt">
) {
  const investmentType = await db.investmentType.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });
  revalidateTag("update-investmentType");
  return investmentType;
}

export const getInvestmentsType = unstable_cache(
  async () => {
    return await db.investmentType.findMany({
      orderBy: {
        name: "asc",
      },
    });
  },
  [`investmentType`],
  {
    tags: [
      `update-investmentType`,
      `create-investmentType`,
      `delete-investmentType`,
    ],
  }
);
