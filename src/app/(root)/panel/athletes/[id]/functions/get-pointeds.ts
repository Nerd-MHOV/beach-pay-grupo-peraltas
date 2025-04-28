import { format } from "date-fns";
import { getAthleteById } from "../../actions";
import { ptBR } from "date-fns/locale";

export const getPointedData = (
  athlete: NonNullable<Awaited<ReturnType<typeof getAthleteById>>>
) => {
  const now = new Date();
  // Create an array for the last 6 months (including current month)
  const months: string[] = [];
  for (let i = 0; i < 6; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
    months.push(key);
  }

  // Define the earliest date to consider for the 6-month period
  const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1);

  // Compute data for the last 6 months
  const pointedData =
    athlete?.teacher_availability?.reduce((acc, lesson) => {
      const availabilityStart = new Date(lesson.time_start);
      const availabilityEnd = new Date(lesson.time_end);
      // Consider only data from the last 6 months
      if (availabilityStart < sixMonthsAgo) return acc;

      // Create a key in the format "YYYY-MM"
      const monthKey =
        availabilityStart.getFullYear() +
        "-" +
        String(availabilityStart.getMonth() + 1).padStart(2, "0");

      // Calculate pointed hours based on teacher_availability time range
      const pointedHours =
        (availabilityEnd.getTime() - availabilityStart.getTime()) /
        (1000 * 60 * 60);
      // Calculate converted hours from each lesson in teacher_availability.lesson array
      let convertedHours = 0;
      if (lesson.lessons && Array.isArray(lesson.lessons)) {
        lesson.lessons.forEach((l) => {
          const lessonStart = new Date(l.time_start);
          const lessonEnd = new Date(l.time_end);
          convertedHours +=
            (lessonEnd.getTime() - lessonStart.getTime()) / (1000 * 60 * 60);
        });
      }
      if (!acc[monthKey]) {
        acc[monthKey] = { month: monthKey, pointed: 0, converted: 0 };
      }
      acc[monthKey].pointed += pointedHours;
      acc[monthKey].converted += convertedHours;
      return acc;
    }, {} as Record<string, { month: string; pointed: number; converted: number }>) ||
    {};

  // Ensure each of the last 6 months is present with zero values if missing.
  months.forEach((monthKey) => {
    if (!pointedData[monthKey]) {
      pointedData[monthKey] = { month: monthKey, pointed: 0, converted: 0 };
    }
  });

  // Map keys to formatted month names and maintain the order defined in months
  const sixMonth = months
    .map((monthKey) => {
      const data = pointedData[monthKey];
      const [year, month] = data.month.split("-");
      const date = new Date(Number(year), Number(month) - 1, 1);
      const formattedMonth = format(date, "MMMM", { locale: ptBR });
      const monthCapitalized =
        formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1);
      return { ...data, month: monthCapitalized };
    })
    .reverse(); // Reverse the order to show the most recent month first

  // Compute total pointed and converted hours for the entire period (no date filter)
  const totalHours = athlete?.teacher_availability?.reduce(
    (acc, lesson) => {
      const availabilityStart = new Date(lesson.time_start);
      const availabilityEnd = new Date(lesson.time_end);
      const pointedHours =
        (availabilityEnd.getTime() - availabilityStart.getTime()) /
        (1000 * 60 * 60);
      let convertedHours = 0;
      if (lesson.lessons && Array.isArray(lesson.lessons)) {
        lesson.lessons.forEach((l) => {
          const lessonStart = new Date(l.time_start);
          const lessonEnd = new Date(l.time_end);
          convertedHours +=
            (lessonEnd.getTime() - lessonStart.getTime()) / (1000 * 60 * 60);
        });
      }
      return {
        pointed: acc.pointed + pointedHours,
        converted: acc.converted + convertedHours,
      };
    },
    { pointed: 0, converted: 0 }
  ) || { pointed: 0, converted: 0 };

  return {
    sixMonth, // Data for the last 6 months as before
    hours: totalHours, // Total pointed and converted hours for the entire period
  };
};