"use server";

import db from "@/core/infra/db";
import { unstable_cache } from "next/cache";

export const getCourts = unstable_cache(
  async () => {
    const courts = await db.courts.findMany({
      orderBy: {
        name: "asc",
      }
    });
    return courts;
  },
  ["courts"],
  {
    tags: ["create-courts", "update-courts", "delete-courts"],
  }
)
