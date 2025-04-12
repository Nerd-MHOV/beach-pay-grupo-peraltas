"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import brLocale from "@fullcalendar/core/locales/pt-br";
import { EventSourceInput } from "@fullcalendar/core/index.js";
import SidebarMenuCalendar from "./sidebar-menu-calendar";

const Page = () => {
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
  return (
    <div className="px-2 md:px-10 py-3 mb-20 relative grid grid-cols gap-5">
      <div className="bg-background p-0 md:p-7 rounded-xl shadow-lg flex md:flex-row flex-col justify-start items-start gap-8 w-full overflow-hidden">
        <SidebarMenuCalendar />
        <div className="md:w-9/12 w-full order-1 md:order-2">
          <FullCalendar
            height={"auto"}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]} //
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }} // Set header toolbar options.
            events={events} // Pass events to the calendar.
            locales={[brLocale]} // Set locales for the calendar.
            locale={"pt-br"} // Set locale to Portuguese.
            initialView="dayGridMonth"
            editable={true} // Allow events to be edited.
            selectable={true} // Allow dates to be selectable.
            selectMirror={true} // Mirror selections visually.
            dayMaxEvents={true} // Limit the number of events displayed per day.
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
