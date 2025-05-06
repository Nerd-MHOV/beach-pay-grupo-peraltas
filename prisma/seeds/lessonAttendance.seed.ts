import { $Enums, PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";

type LessonAttendance = {
  id: string;
  lesson_id: string;
  student_id: string;
  did_attend: boolean;
  reason: $Enums.ReasonsToNotAttend | null;
  created_at: string;
  updated_at: string;
};

type lessonAttendanceSeedType = LessonAttendance[];
export const LessonAttendanceSeedFn = async (prismaClient: PrismaClient) => {
  const data = readFileSync('prisma/seeds/jsons/lesson_attendance.json', 'utf8');
  const parsedData = JSON.parse(data) as lessonAttendanceSeedType;

  for (const lessonAttendance of parsedData) {
    await prismaClient.lessonAttendance.upsert({
      where: { id: lessonAttendance.id },
      create: {
        ...lessonAttendance,
        created_at: new Date(lessonAttendance.created_at),
        updated_at: new Date(lessonAttendance.updated_at),
      },
      update: {}
    });
  }

  console.log("Seeding lesson attendances completed.");
};