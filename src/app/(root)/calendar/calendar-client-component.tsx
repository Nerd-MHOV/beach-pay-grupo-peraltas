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
import { EventInput } from "@fullcalendar/core/index.js";
import { Athlete, LessonStatus, User } from "@prisma/client";
import { FilterdEvents } from "./functions-filter-events";
import { subDays } from "date-fns";

export type FormFieldProps = {
  formSelected: "availability" | "class" | "tournament";
  selectedDate?: {
    from: Date;
    to: Date;
  };
  id?: string;
  teacher_id?: string;
  court_id?: string;
  attendance_ids?: string[];
  subject?: string;
  tournament_name?: string;
  description?: string;
  arena_id?: string;
  status?: LessonStatus;
};
export type SetFormFieldProps = React.Dispatch<
  React.SetStateAction<FormFieldProps>
>;

export interface FilterEventsProps {
  "Minha Disponibilidade": boolean;
  Torneios: boolean;
  Aulas: boolean;
  [key: string]: boolean;
}

export type SetFilterEventsProps = React.Dispatch<
  React.SetStateAction<FilterEventsProps>
>;

interface CalendarClientComponentProps {
  currentUserId: string;
  events: (EventInput & { extendedProps: FormFieldProps })[];
  teachers: (Athlete & { user: Omit<User, "passwd">; is_teacher: true })[];
}
const CalendarClientComponent: React.FC<CalendarClientComponentProps> = ({
  currentUserId,
  events,
  teachers,
}) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [formFields, setFormFields] = React.useState<FormFieldProps>({
    formSelected: "class",
  });
  // Estado para os filtros dos eventos
  const initialFilterState: FilterEventsProps = {
    "Minha Disponibilidade": true,
    Torneios: true,
    Aulas: true,
    ...teachers.reduce((acc, teacher) => {
      return {
        ...acc,
        [`Disp. ${teacher.name}`]: false,
      };
    }, {}),
  };
  const [filterEvents, setFilterEvents] =
    React.useState<FilterEventsProps>(initialFilterState);

  return (
    <>
      <div className="bg-background p-0 md:p-7 rounded-xl shadow-lg flex md:flex-row flex-col justify-start items-start gap-8 w-full overflow-hidden">
        <SidebarMenuCalendar
          setDialogOpen={setDialogOpen}
          setFormFields={setFormFields}
          filterEvents={filterEvents}
          setFilterEvents={setFilterEvents}
        />
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
              setFormFields({
                formSelected: formFields.formSelected,
                selectedDate: {
                  from: selectedDate.start,
                  to:
                    selectedDate.start.getDay() !== selectedDate.end.getDay()
                      ? subDays(selectedDate.end, 1)
                      : selectedDate.end,
                },
              });
              setDialogOpen(true);
            }}
            eventChange={(eventChange) => {
              setDialogOpen(true);
              setFormFields({
                ...(eventChange.event.extendedProps as FormFieldProps),
                selectedDate: {
                  from: (eventChange.event.start ||
                    eventChange.event.extendedProps.selectDate.start ||
                    new Date()) as Date,
                  to: (eventChange.event.end ||
                    eventChange.event.extendedProps.selectDate?.end ||
                    eventChange.event.start ||
                    eventChange.event.extendedProps.selectDate.start ||
                    new Date()) as Date,
                },
              });
              eventChange.revert();
            }}
            eventClick={(eventChange) => {
              setDialogOpen(true);
              setFormFields(eventChange.event.extendedProps as FormFieldProps);
            }}
            events={FilterdEvents(
              currentUserId,
              events,
              filterEvents,
              teachers
            )}
            locales={[brLocale]}
            locale={"pt-br"}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            eventDisplay="block"
            displayEventTime={false}
          />
        </div>
      </div>
      <DialogEventCalendar
        open={dialogOpen}
        setOpen={setDialogOpen}
        setFormFields={setFormFields}
        formFields={formFields}
      />
    </>
  );
};

export default CalendarClientComponent;
