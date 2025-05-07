"use server";

import db from "@/core/infra/db";
import { revalidateTag, unstable_cache } from "next/cache";

export const getFixedValues = unstable_cache(
  async () => {
    return await db.fixedValues.findMany();
  },
  ["fixed-values"],
  {
    tags: ["update-fixed-values"],
    revalidate: 60,
  }
);

export async function updateFixedValues(data: {
  km: number;
  association: number;
  association_student: number;
  lesson: number;
  lesson_associated: number;
}) {
  const updateOperations = Object.entries(data).map(async ([key, value]) => {
    const updated = db.fixedValues.update({
      where: { id: key },
      data: { value },
    });

    revalidateTag("update-fixed-values");
    return updated;
  });

  return await Promise.all(updateOperations);
}
