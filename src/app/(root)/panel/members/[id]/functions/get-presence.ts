import { format } from "date-fns";
import { getMemberById } from "../../actions";
import { ptBR } from "date-fns/locale";
import { subMonths, startOfMonth, endOfMonth, parseISO } from "date-fns";

export const getPresence = (
  athlete: NonNullable<Awaited<ReturnType<typeof getMemberById>>>
) => {
  const now = new Date();

  // Cálculo para os últimos 6 meses
  const sixMonths = Array.from({ length: 6 }).map((_, index) => {
    const monthDate = subMonths(now, index);
    const start = startOfMonth(monthDate);
    const end = endOfMonth(monthDate);

    const lessonsInMonth = athlete.lesson_attendance.filter((lesson) => {
      const date = lesson.lesson.time_start;
      // Considera somente aulas marcadas como "present" ou "absent"
      return date >= start && date <= end && lesson.lesson.status !== "scheduled";
    });

    const present = lessonsInMonth.filter((lesson) => lesson.did_attend).length;
    const absent = lessonsInMonth.filter((lesson) => !lesson.did_attend).length;

    // Formata o mês conforme o padrão desejado
    return {
      month: format(monthDate, "MMMM", { locale: ptBR }),
      present,
      absent,
    };
  }).reverse(); // para ficar em ordem cronológica

  // Totais gerais das aulas
  const completedLessons = athlete.lesson_attendance.filter((lesson) => lesson.lesson.status === "completed").length;
  const pendingLessons = athlete.lesson_attendance.filter((lesson) => lesson.lesson.status === "scheduled").length;
  const absencesWithoutJustification = athlete.lesson_attendance.filter(
    (lesson) => lesson.reason === "no_justification" && lesson.lesson.status !== "scheduled" && !lesson.did_attend
  ).length;
  const absencesWithJustification = athlete.lesson_attendance.filter(
    (lesson) => lesson.reason !== "no_justification" && lesson.lesson.status !== "scheduled" && !lesson.did_attend
  ).length;

  return {
    sixMonths,
    lessons: {
      completedLessons,
      pendingLessons,
      absencesWithoutJustification,
      absencesWithJustification,
    },
  };
};