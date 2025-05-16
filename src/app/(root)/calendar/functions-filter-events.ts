import { EventInput } from "@fullcalendar/core/index.js";
import { FilterEventsProps } from "./calendar-client-component";
import { Member, User } from "@prisma/client";

export const FilterdEvents = (
  currentUserId: string,
  events: EventInput[],
  filters: FilterEventsProps,
  teachers: (Member & {
    user: Omit<User, "passwd">;
    is_teacher: true;
  })[]
) => {
  const currentTeacherId = teachers.find(
    (teacher) => teacher.user.id === currentUserId
  )?.id;

  const myAvailability = filters["Minha Disponibilidade"]
    ? events.filter(
      (event) =>
        event.extendedProps?.formSelected === "availability" &&
        event.extendedProps?.teacher_id === currentTeacherId
    )
    : [];

  const classes = [
    ...filters["Aulas agendas"]
      ? events.filter((event) =>
        event.extendedProps?.formSelected === "class" &&
        event.extendedProps?.status === "scheduled")
      : [],
    ...filters["Aulas canceladas"]
      ? events.filter(
        (event) =>
          event.extendedProps?.formSelected === "class" &&
          event.extendedProps?.status === "canceled"
      )
      : [],
    ...filters["Aulas concluídas"]
      ? events.filter(
        (event) =>
          event.extendedProps?.formSelected === "class" &&
          event.extendedProps?.status === "completed"
      )
      : [],
  ].filter(
    (event) => filters["Somente Eu (Aulas)"] ? event.extendedProps?.teacher_id === currentTeacherId : true
  );

  const tournaments = filters["Torneios"]
    ? events.filter(
      (event) => event.extendedProps?.formSelected === "tournament"
    )
    : [];

  const teachersAvailability: EventInput[] = [];
  const teachersAvailabilityFilters = Object.entries(filters).filter(
    ([key, value]) => key.startsWith("Disp.") && value
  );

  teachersAvailabilityFilters.forEach(([key]) => {
    const teacherName = key.replace("Disp. ", "");
    const teacher = teachers.find((teacher) => teacher.name === teacherName);
    if (teacher) {
      const teacherEvents = events.filter(
        (event) =>
          event.extendedProps?.formSelected === "availability" &&
          event.extendedProps?.teacher_id === teacher.id
      );
      teachersAvailability.push(...teacherEvents);
    }
  });

  return [
    ...myAvailability,
    ...classes,
    ...tournaments,
    ...teachersAvailability,
  ];
};