import React from "react";
import { EventInput, EventSourceInput } from "@fullcalendar/core/index.js";
import CalendarClientComponent, {
  FormFieldProps,
} from "./calendar-client-component";
import { getAvailability } from "./availability/actions";
import { getAthletes } from "../panel/athletes/actions";
import { Athlete, User } from "@prisma/client";
import { verifySession } from "@/lib/session";

const events: EventSourceInput = [
  {
    backgroundColor: "#f9c2c2", // a property!
    borderColor: "#f9c2c2", // a property!
    title: "DISP - João", // a property!
    start: "2025-04-01", // a property!
    end: "2025-04-01", // a property! ** see important note below about 'end' **
  },
  {
    backgroundColor: "#D2d2d2", // a property!
    borderColor: "#d2d2d2", // a property!
    title: "DISP - Marcos", // a property!
    start: "2025-04-01", // a property!
    end: "2025-04-01", // a property! ** see important note below about 'end' **
  },
  {
    backgroundColor: "#D2d2d2", // a property!
    borderColor: "#d2d2d2", // a property!
    title: "DISP - Marcos", // a property!
    start: "2025-04-01", // a property!
    end: "2025-04-01", // a property! ** see important note below about 'end' **
  },
  {
    backgroundColor: "#D2d2d2", // a property!
    borderColor: "#d2d2d2", // a property!
    title: "DISP - Marcos", // a property!
    start: "2025-04-01", // a property!
    end: "2025-04-01", // a property! ** see important note below about 'end' **
  },
  {
    backgroundColor: "#D2d2d2", // a property!
    borderColor: "#d2d2d2", // a property!
    title: "DISP - Marcos", // a property!
    start: "2025-04-01", // a property!
    end: "2025-04-01", // a property! ** see important note below about 'end' **
  },
  {
    backgroundColor: "#D2d2d2", // a property!
    borderColor: "#d2d2d2", // a property!
    title: "DISP - Marcos", // a property!
    start: "2025-04-03", // a property!
    end: "2025-04-03", // a property! ** see important note below about 'end' **
  },
  {
    backgroundColor: "#f9c2c2", // a property!
    borderColor: "#f9c2c2", // a property!
    title: "DISP - Marcos", // a property!
    start: "2025-04-08", // a property!
    end: "2025-04-08", // a property! ** see important note below about 'end' **
  },
];
const Page = async () => {
  const me = await verifySession(false);
  const teachers = (await getAthletes({ teacher: true })) as (Athlete & {
    user: Omit<User, "passwd">;
    is_teacher: true;
  })[];
  const TeacherAvailability = await getAvailability();
  const events: (EventInput & {
    extendedProps: FormFieldProps;
  })[] = TeacherAvailability.map((availability) => ({
    backgroundColor:
      availability.teacher?.user?.id === me?.userId ? "#D2d2d2" : "#95cf9a",
    borderColor:
      availability.teacher?.user?.id === me?.userId ? "#D2d2d2" : "#95cf9a",
    title: `DISP - ${availability.teacher.name}`,
    start: availability.time_start,
    end: availability.time_end,
    id: availability.id,
    extendedProps: {
      id: availability.id,
      formSelected: "availability",
      selectedDate: {
        from: new Date(availability.time_start),
        to: new Date(availability.time_end),
      },
      teacher_id: availability.teacher_id,
    },
  }));

  return (
    <div className="px-2 md:px-10 py-3 mb-20 relative grid grid-cols gap-5">
      <CalendarClientComponent
        currentUserId={me?.userId || ""}
        teachers={teachers}
        events={events}
      />
    </div>
  );
};

export default Page;
