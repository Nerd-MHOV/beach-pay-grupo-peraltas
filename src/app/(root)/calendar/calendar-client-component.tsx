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
import { Athlete, User } from "@prisma/client";

export type FormFieldProps = {
  formSelected: "availability" | "class" | "tournament";
  selectedDate?: {
    from: Date;
    to: Date;
  };
  id?: string;
  teacher_id?: string;
};
export type SetFormFieldProps = React.Dispatch<
  React.SetStateAction<FormFieldProps>
>;

export type FilterEventsProps = {
  "Minha Disponibilidade": boolean;
  Torneios: boolean;
  Aulas: boolean;
} & Record<string, boolean>;
export type SetFilterEventsProps = React.Dispatch<
  React.SetStateAction<FilterEventsProps>
>;

const CalendarClientComponent = ({
  events,
  currentUserId,
  teachers,
}: {
  currentUserId: string;
  events: (EventInput & {
    extendedProps: FormFieldProps;
  })[];
  teachers: (Athlete & {
    user: Omit<User, "passwd">;
    is_teacher: true;
  })[];
}) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [formFields, setFormFields] = React.useState<FormFieldProps>({
    formSelected: "availability",
  });
  const [filterEvents, setFilterEvents] = React.useState<
    {
      "Minha Disponibilidade": boolean;
      Torneios: boolean;
      Aulas: boolean;
    } & Record<string, boolean>
  >({
    "Minha Disponibilidade": true,
    Torneios: true,
    Aulas: true,
    ...teachers.reduce((acc, teacher) => {
      return {
        ...acc,
        [`Disp. ${teacher.name}`]: false,
      };
    }, {}),
  });

  const FilterdEvents = (
    currentUserId: string,
    events: EventInput[],
    filters: FilterEventsProps
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

    const classes = filters["Aulas"]
      ? events.filter((event) => event.extendedProps?.formSelected === "class")
      : [];

    const tournaments = filters["Torneio"]
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
              setDialogOpen(true); // Open dialog when a date is selected.
              setFormFields({
                formSelected: formFields.formSelected,
                selectedDate: {
                  from: selectedDate.start,
                  to: new Date(
                    selectedDate.end.setDate(selectedDate.end.getDate() - 1)
                  ),
                },
              });
            }}
            eventChange={(eventChange) => {
              console.log(eventChange);
            }}
            eventClick={(eventChange) => {
              setDialogOpen(true);
              setFormFields(eventChange.event.extendedProps as FormFieldProps);
            }}
            events={FilterdEvents(currentUserId, events, filterEvents)}
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
