"use server";
import db from "@/core/infra/db";
import { verifySession } from "@/lib/session";
import { InvestmentType } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";

export async function createInvestmentType(
  data: Omit<InvestmentType, "id" | "created_at" | "updated_at">
) {
  console.log(data);
  const investmentType = await db.investmentType.create({ data });
  revalidateTag("create-investmentType");
  return investmentType;
}

export async function updateInvestmentType(
  data: Omit<InvestmentType, "created_at" | "updated_at">
) {
  const investmentType = await db.investmentType.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      updated_at: new Date(),
    },
  });
  revalidateTag("update-investmentType");
  return investmentType;
}

export async function deleteInvestmentType(id: string) {
  const investmentType = await db.investmentType.delete({
    where: {
      id,
    },
  });
  revalidateTag("delete-investmentType");
  return investmentType;
}

export const getInvestmentsType = async () => {
  const session = await verifySession();
  return cachedInvestmentType(session?.userId || "");
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
        can_see: {
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