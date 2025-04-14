import React from "react";
import { EventSourceInput } from "@fullcalendar/core/index.js";
import TeacherClientComponent from "./teacher-client-component";
import { getAthletes } from "../panel/athletes/actions";
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
const Page = () => {
  return (
    <div className="px-2 md:px-10 py-3 mb-20 relative grid grid-cols gap-5">
      <TeacherClientComponent
        events={events.map((ev, i) => ({ ...ev, id: i.toString() }))}
      />
    </div>
  );
};

export default Page;
