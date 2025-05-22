import React from "react";
import { EventInput } from "@fullcalendar/core/index.js";
import CalendarClientComponent, {
  FormFieldProps,
} from "./calendar-client-component";
import { getAvailability } from "./availability/actions";
import { getMembers } from "@/app/(root)/panel/members/actions";
import { Member, User } from "@prisma/client";
import { verifySession } from "@/lib/session";
import { getLessons } from "./lesson/actions";
import { getTournaments } from "../panel/tournaments/actions";
import ExportWeekTeacherLessons from "./export-week-teacher-lessons";
import { ptBR } from "date-fns/locale";
import { formatInTimeZone } from "date-fns-tz";

const ColorStatusLesson = {
  canceled: "#763fa2",
  scheduled: "#7289d4",
  completed: "#52848c",
};

const Page = async () => {
  const me = await verifySession(false);
  const teachers = (await getMembers({ teacher: true })) as (Member & {
    user: Omit<User, "passwd">;
    is_teacher: true;
  })[];
  const TeacherAvailability = await getAvailability();
  const lessons = await getLessons();
  const tournaments = await getTournaments();

  const events: (EventInput & {
    extendedProps: FormFieldProps;
  })[] = [
    ...TeacherAvailability.map((availability) => ({
      backgroundColor:
        availability.teacher?.user?.id === me?.userId ? "#D2d2d2" : "#95cf9a",
      borderColor:
        availability.teacher?.user?.id === me?.userId ? "#D2d2d2" : "#95cf9a",
      title: `${formatInTimeZone(
        availability.time_start,
        "America/Sao_Paulo",
        "HH:mm"
      )}-${availability.teacher.name}`,
      start: availability.time_start,
      end: availability.time_end,
      id: availability.id,
      extendedProps: {
        currentUserRole: me?.userRole ?? "teacher",
        id: availability.id,
        formSelected: "availability" as const,
        selectedDate: {
          from: new Date(availability.time_start),
          to: new Date(availability.time_end),
        },
        teacher_id: availability.teacher_id,
      },
    })),
    ...lessons.map((lesson) => ({
      backgroundColor: ColorStatusLesson[lesson.status] || "#7289d4",
      borderColor: ColorStatusLesson[lesson.status] || "#7289d4",
      title: `${formatInTimeZone(
        lesson.time_start,
        "America/Sao_Paulo",
        "HH:mm",
        {
          locale: ptBR,
        }
      )}-${lesson.tier}${lesson.attendances.length}-${lesson.teacher.name}`,
      start: lesson.time_start,
      end: lesson.time_end,
      id: lesson.id,
      extendedProps: {
        currentUserRole: me?.userRole ?? "teacher",
        id: lesson.id,
        formSelected: "class" as const,
        selectedDate: {
          from: new Date(lesson.time_start),
          to: new Date(lesson.time_end),
        },
        teacher_id: lesson.teacher_id,
        attendances: lesson.attendances.map((attendance) => ({
          id: attendance.student_id,
          replacement: attendance.replacement_id,
        })),
        court_id: lesson.courts_id,
        tier: lesson.tier,
        status: lesson.status,
      },
    })),

    ...tournaments.map((tournament) => ({
      backgroundColor: "#f9c2c2",
      borderColor: "#f9c2c2",
      textColor: "#782d2f",
      title: `${tournament.name}`,
      start: tournament.date_from,
      end: tournament.date_to,
      id: tournament.id,
      extendedProps: {
        currentUserRole: me?.userRole ?? "teacher",
        id: tournament.id,
        formSelected: "tournament" as const,
        selectedDate: {
          from: new Date(tournament.date_from),
          to: new Date(tournament.date_to),
        },
        description: tournament.description ?? undefined,
        arena_id: tournament.arena_id,
        tournament_name: tournament.name,
      },
    })),
  ];

  return (
    <div className="px-2 md:px-10 py-3 mb-20 relative grid grid-cols gap-5">
      <CalendarClientComponent
        currentUserId={me?.userId || ""}
        currentUserRole={me?.userRole ?? "teacher"}
        teachers={teachers}
        events={events}
      />
      <ExportWeekTeacherLessons />
    </div>
  );
};

export default Page;
