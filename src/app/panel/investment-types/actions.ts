"use server";
import db from "@/core/infra/db";
import { verifySession } from "@/lib/session";
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

export const getInvestmentsType = async () => {
  const session = await verifySession();
  return cachedInvestmentType(session.userId);
}

export const cachedInvestmentType = unstable_cache(
  async (userId: string) => {
    const user = await db.user.findFirst({ where: { id: userId } });
    if (!user) {
      return [];
    }

    return await db.investmentType.findMany({
      orderBy: {
        name: "asc",
      },
      where: {
        canSee: {
          has: user.role,
        },
      }
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