"use server";
import db from "@/core/infra/db";
import { InvestimentType } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";

export async function createInvestimentType(
  data: Omit<InvestimentType, "id" | "createdAt" | "updatedAt">
) {
  const investimentType = await db.investimentType.create({ data });
  revalidateTag("create-investimentType");
  return investimentType;
}

export async function updateInvestimentType(
  data: Omit<InvestimentType, "createdAt" | "updatedAt">
) {
  const investimentType = await db.investimentType.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });
  revalidateTag("update-investimentType");
  return investimentType;
}

export const getInvestimentsType = unstable_cache(
  async () => {
    return await db.investimentType.findMany({
      orderBy: {
        name: "asc",
      },
    });
  },
  [`investimentType`],
  {
    tags: [
      `update-investimentType`,
      `create-investimentType`,
      `delete-investimentType`,
    ],
  }
);
