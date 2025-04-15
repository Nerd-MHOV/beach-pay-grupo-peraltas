"use server";

import db from "@/core/infra/db";
import { Lesson } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";


export const getLessons = unstable_cache(
  async () => {
    const lessons = await db.lesson.findMany({
      include: {
        attendances: {
          include: {
            student: true
          }
        },
        teacher: true,
        courts: true,
      }
    });
    return lessons;
  },
  ["lessons"],
  {
    tags: ["create-lesson", 'update-lesson', 'delete-lesson'],
  }
)

export const getLessonById = unstable_cache(
  async (id: string) => {
    const lesson = await db.lesson.findUnique({
      where: {
        id,
      },
      include: {
        attendances: {
          include: {
            student: true
          }
        },
        teacher: true,
        courts: true,
      }
    });
    return lesson;
  },
  ["lessons"],
  {
    tags: ["create-lesson", 'update-lesson', 'delete-lesson'],
  }
)

export async function createLesson(
  data: Omit<Lesson, "id" | "created_at" | "updated_at"> & {
    attendance_ids: string[];
  },
) {
  const { attendance_ids, ...lessonData } = data;
  const lesson = await db.lesson.create({
    data: {
      ...lessonData,
      attendances: {
        createMany: {
          data: attendance_ids.map(id => ({
            student_id: id,
          }))
        }
      }
    }
  })
  revalidateTag("create-lesson");
  return lesson;
}

export async function updateLesson(
  data: Partial<Lesson> & {
    id: string;
    attendance_ids?: string[];
  },
) {
  const { attendance_ids, ...lessonData } = data;
  if (attendance_ids) {
    await db.lessonAttendance.deleteMany({
      where: {
        lesson_id: data.id,
      }
    })
    await db.lessonAttendance.createMany({
      data: attendance_ids.map(id => ({
        lesson_id: data.id,
        student_id: id,
      }))
    })
  }
  const lesson = await db.lesson.update({
    where: {
      id: data.id,
    },
    data: {
      ...lessonData,
      updated_at: new Date(),
    }
  })
  revalidateTag("update-lesson");
  return lesson;
}

export async function deleteLesson(
  id: string,
) {
  const lesson = await db.lesson.delete({
    where: {
      id
    }
  })
  revalidateTag("delete-lesson");
  return lesson;
}

