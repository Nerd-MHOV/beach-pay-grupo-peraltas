"use server";

import { db } from "@beach-pay/database";
import { unstable_cache } from "next/cache";

export const getCourts = unstable_cache(
  async () => {
    const courts = await db.courts.findMany();
    courts.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
    return courts;
  },
  ["courts"],
  {
    tags: ["create-courts", "update-courts", "delete-courts"],
  }
)
