import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";

type TeacherAvailability = {
  id: string;
  teacher_id: string;
  time_start: string;
  time_end: string;
  created_at: string;
  updated_at: string;
};

type teacherAvailabilitySeedType = TeacherAvailability[];
export const TeacherAvailabilitySeedFn = async (prismaClient: PrismaClient) => {
  const data = readFileSync('prisma/seeds/jsons/teacher_availability.json', 'utf8');
  const parsedData = JSON.parse(data) as teacherAvailabilitySeedType;

  for (const teacherAvailability of parsedData) {
    await prismaClient.teacherAvailability.upsert({
      where: { id: teacherAvailability.id },
      create: {
        ...teacherAvailability,
        time_start: new Date(teacherAvailability.time_start),
        time_end: new Date(teacherAvailability.time_end),
        created_at: new Date(teacherAvailability.created_at),
        updated_at: new Date(teacherAvailability.updated_at),
      },
      update: {}
    });
  }

  console.log("Seeding teacher availabilities completed.");
};