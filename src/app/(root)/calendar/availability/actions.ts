"use server";

import db from "@/core/infra/db";
import { TeacherAvailability } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";


export const getAvailability = unstable_cache(
  async (props?: {
    aula?: { start: Date; end: Date }
  }) => {
    const availability = await db.teacherAvailability.findMany({
      where: props?.aula
        ? {
          time_start: { lte: props.aula.start },
          time_end: { gte: props.aula.end },
        }
        : {},
      include: {
        lesson: true,
        teacher: {
          include: {
            user: {
              omit: { passwd: true },
            },
          },
        },
      },
    });
    return availability;
  },
  ["availability"],
  {
    tags: [
      "create-availability",
      "update-availability",
      "delete-availability",
    ],
  }
)

export const getAvailabilityById = unstable_cache(
  async (id: string) => {
    const availability = await db.teacherAvailability.findUnique({
      where: {
        id,
      },
    });
    return availability;
  },
  ["availability"],
  {
    tags: [
      "create-availability",
      "update-availability",
      "delete-availability",
    ],
  },
)

export async function createAvailability(
  data: Omit<TeacherAvailability, "id" | "created_at" | "updated_at" | "lesson_id">,
) {
  const availability = await db.teacherAvailability.create({
    data
  })
  revalidateTag("create-availability");
  return availability;
}

export async function updateAvailability(
  data: Partial<TeacherAvailability> & {
    id: string;
  },
) {
  const availability = await db.teacherAvailability.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      updated_at: new Date(),
    }
  })

  revalidateTag("create-courts");
  revalidateTag("update-availability");
  return availability;
}

export async function deleteAvailability(id: string) {
  const availability = await db.teacherAvailability.delete({
    where: {
      id,
    },
  })
  revalidateTag("delete-availability");
  return availability;
}
