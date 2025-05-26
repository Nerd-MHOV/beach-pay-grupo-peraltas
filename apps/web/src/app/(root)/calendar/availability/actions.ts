"use server";

import { db, TeacherAvailability } from "@beach-pay/database";
import { revalidateTag, unstable_cache } from "next/cache";


export const getAvailability = unstable_cache(
  async (props?: {
    aula?: { start: Date; end: Date }
  }) => {

    // Check if the start and end dates are set to 00:00:00.000
    // If so, set them to 5:00:00.000 and 23:00:00.000 respectively
    // This is to avoid issues with the database query
    if (props?.aula?.start && props.aula.start.getHours() === 0 && props.aula.start.getMinutes() === 0 && props.aula.start.getSeconds() === 0) {
      props.aula.start.setHours(5, 0, 0, 0);
    }
    if (props?.aula?.end && props.aula.end.getHours() === 0 && props.aula.end.getMinutes() === 0 && props.aula.end.getSeconds() === 0) {
      props.aula.end.setHours(23, 0, 0, 0);
    }

    const availability = await db.teacherAvailability.findMany({
      where: props?.aula
        ? {
          time_start: { lte: props.aula.start },
          time_end: { gte: props.aula.end },
        }
        : {},
      include: {
        lessons: true,
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
      include: {
        lessons: true,
      }
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
