"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import brLocale from "@fullcalendar/core/locales/pt-br";
import SidebarMenuCalendar from "./sidebar-menu-calendar";
import DialogEventCalendar from "./dialog-event-calendar";
import { EventSourceInput } from "@fullcalendar/core/index.js";

const TeacherClientComponent = ({ events }: { events: EventSourceInput }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [formSelected, setFormSelected] = React.useState<
    "availability" | "class" | "tournament"
  >("availability");
  return (
    <>
      <div className="bg-background p-0 md:p-7 rounded-xl shadow-lg flex md:flex-row flex-col justify-start items-start gap-8 w-full overflow-hidden">
        <SidebarMenuCalendar setDialogOpen={setDialogOpen} setFormSelected={setFormSelected} />
        <div className="md:w-9/12 w-full">
          <FullCalendar
            height={"auto"}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            select={(selectedDate) => {
              setDialogOpen(true); // Open dialog when a date is selected.
              console.log(selectedDate);
            }}
            eventChange={(eventChange) => {
              console.log(eventChange); // Log event changes.
            } }
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
      <DialogEventCalendar
        open={dialogOpen}
        setOpen={setDialogOpen}
        formSelected={formSelected}
        setFormSelected={setFormSelected}
      />
    </>
  );
};

export default TeacherClientComponent;
