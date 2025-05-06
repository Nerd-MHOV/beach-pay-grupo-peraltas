import { PrismaClient, Tier, LessonStatus } from "@prisma/client";
import { readFileSync } from "fs";

type Lesson = {
  id: string;
  teacher_id: string;
  time_start: string;
  time_end: string;
  courts_id: string;
  tier: Tier;
  status: LessonStatus;
  teacher_availability_id: string;
  created_at: string;
  updated_at: string;
};

type lessonSeedType = Lesson[];
export const LessonSeedFn = async (prismaClient: PrismaClient) => {
  const data = readFileSync('prisma/seeds/jsons/lesson.json', 'utf8');
  const parsedData = JSON.parse(data) as lessonSeedType;

  for (const lesson of parsedData) {
    await prismaClient.lesson.upsert({
      where: { id: lesson.id },
      create: {
        id: lesson.id,
        teacher_id: lesson.teacher_id,
        courts_id: lesson.courts_id,
        tier: lesson.tier,
        status: lesson.status,
        cancellation_reason: null,
        teacher_availability_id: lesson.teacher_availability_id,
        created_at: new Date(lesson.created_at),
        updated_at: new Date(lesson.updated_at),
        time_start: new Date(lesson.time_start),
        time_end: new Date(lesson.time_end),
      },
      update: {}
    });
  }

  console.log("Seeding lessons completed.");
};