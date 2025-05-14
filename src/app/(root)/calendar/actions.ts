"use server";

import { createAvailability, getAvailabilityById } from "./availability/actions";
import { EventType } from "./calendar-client-component";
import { createLesson, getLessonById } from "./lesson/actions";

export const copyEvents = async (events: { event_id: string; event_type: EventType }[], type: "nextWeek" | "nextMonth") => {
  for (const event of events) {
    const { event_id, event_type } = event;
    if (event_type === "class") {
      const current = await getLessonById(event_id);
      if (current) {
        const startDate = type === "nextWeek"
          ? new Date(new Date(current.time_start).setDate(new Date(current.time_start).getDate() + 7))
          : new Date(new Date(current.time_start).setMonth(new Date(current.time_start).getMonth() + 1));
        const endDate = type === "nextWeek"
          ? new Date(new Date(current.time_end).setDate(new Date(current.time_end).getDate() + 7))
          : new Date(new Date(current.time_end).setMonth(new Date(current.time_end).getMonth() + 1));
        await createLesson({
          attendance_ids: current.attendances.map((attendance) => attendance.student_id),
          teacher_availability_id: current.teacher_availability_id,
          tier: current.tier,
          courts_id: current.courts_id,
          teacher_id: current.teacher_id,
          time_start: startDate,
          time_end: endDate,
        })

      }
    }
    if (event_type === "availability") {
      const current = await getAvailabilityById(event_id);
      if (current) {
        const startDate = type === "nextWeek"
          ? new Date(new Date(current.time_start).setDate(new Date(current.time_start).getDate() + 7))
          : new Date(new Date(current.time_start).setMonth(new Date(current.time_start).getMonth() + 1));
        const endDate = type === "nextWeek"
          ? new Date(new Date(current.time_end).setDate(new Date(current.time_end).getDate() + 7))
          : new Date(new Date(current.time_end).setMonth(new Date(current.time_end).getMonth() + 1));
        await createAvailability({
          teacher_id: current.teacher_id,
          time_start: startDate,
          time_end: endDate,
        });
      }
    }
  }
}

export const copyEventsSpecific = async (events: { event_id: string; event_type: EventType }[], day: Date) => {
  for (const event of events) {
    const { event_id, event_type } = event;
    if (event_type === "class") {
      const current = await getLessonById(event_id);
      if (current) {
        const startDate = new Date(
          day.getFullYear(),
          day.getMonth(),
          day.getDate(),
          new Date(current.time_start).getHours(),
          new Date(current.time_start).getMinutes(),
          new Date(current.time_start).getSeconds()
        );
        const endDate = new Date(
          day.getFullYear(),
          day.getMonth(),
          day.getDate(),
          new Date(current.time_end).getHours(),
          new Date(current.time_end).getMinutes(),
          new Date(current.time_end).getSeconds()
        );
        await createLesson({
          attendance_ids: current.attendances.map((attendance) => attendance.student_id),
          teacher_availability_id: current.teacher_availability_id,
          tier: current.tier,
          courts_id: current.courts_id,
          teacher_id: current.teacher_id,
          time_start: startDate,
          time_end: endDate,
        })

      }
    }
    if (event_type === "availability") {
      const current = await getAvailabilityById(event_id);
      if (current) {
        const startDate = new Date(
          day.getFullYear(),
          day.getMonth(),
          day.getDate(),
          new Date(current.time_start).getHours(),
          new Date(current.time_start).getMinutes(),
          new Date(current.time_start).getSeconds()
        );
        const endDate = new Date(
          day.getFullYear(),
          day.getMonth(),
          day.getDate(),
          new Date(current.time_end).getHours(),
          new Date(current.time_end).getMinutes(),
          new Date(current.time_end).getSeconds()
        );
        await createAvailability({
          teacher_id: current.teacher_id,
          time_start: startDate,
          time_end: endDate,
        });
      }
    }
  }
}