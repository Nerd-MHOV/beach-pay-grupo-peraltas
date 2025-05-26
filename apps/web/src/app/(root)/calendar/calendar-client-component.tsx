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
import { $Enums, Member, LessonStatus, User } from "@beach-pay/database";
import { FilterdEvents } from "./functions-filter-events";
import { subDays } from "date-fns";
import HoverCardEventCalendar from "./hover-card-event-calendar";
import { Checkbox } from "@/components/ui/checkbox";
import DropdownMenuCopyEvent from "./dropdown-menu-copy-event";

export type EventType = "availability" | "class" | "tournament";
export type FormFieldProps = {
  formSelected: EventType;
  selectedDate?: {
    from: Date;
    to: Date;
  };
  currentUserRole: $Enums.UserRole;
  id?: string;
  teacher_id?: string;
  court_id?: string;
  attendances?: {
    id: string;
    replacement: string | null;
  }[];
  tournament_name?: string;
  description?: string;
  arena_id?: string;
  tier?: $Enums.Tier;
  status?: LessonStatus;
};
export type SetFormFieldProps = React.Dispatch<
  React.SetStateAction<FormFieldProps>
>;

export interface FilterEventsProps {
  "Somente Eu (Aulas)": boolean;
  "Minha Disponibilidade": boolean;
  Torneios: boolean;
  "Aulas agendas": boolean;
  "Aulas canceladas": boolean;
  "Aulas concluídas": boolean;
  [key: string]: boolean;
}

export type SetFilterEventsProps = React.Dispatch<
  React.SetStateAction<FilterEventsProps>
>;

interface CalendarClientComponentProps {
  currentUserId: string;
  currentUserRole: $Enums.UserRole;
  events: (EventInput & { extendedProps: FormFieldProps })[];
  teachers: (Member & { user: Omit<User, "passwd">; is_teacher: true })[];
}
const CalendarClientComponent: React.FC<CalendarClientComponentProps> = ({
  currentUserId,
  currentUserRole,
  events,
  teachers,
}) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedEvents, setSelectEvent] = React.useState<
    {
      event_id: string;
      event_type: EventType;
    }[]
  >([]);
  const [formFields, setFormFields] = React.useState<FormFieldProps>({
    formSelected: "class",
    currentUserRole,
  });
  // Estado para os filtros dos eventos
  const initialFilterState: FilterEventsProps = {
    "Somente Eu (Aulas)": currentUserRole === "teacher",
    "Minha Disponibilidade": false,
    Torneios: true,
    "Aulas agendas": true,
    "Aulas canceladas": true,
    "Aulas concluídas": true,
    ...teachers.reduce((acc, teacher) => {
      return {
        ...acc,
        [`Disp. ${teacher.name}`]: false,
      };
    }, {}),
  };
  const [filterEvents, setFilterEvents] =
    React.useState<FilterEventsProps>(initialFilterState);

  const handleSelectEvent = (event: {
    event_id: string;
    event_type: EventType;
  }) => {
    if (event.event_type === "tournament") return;
    setSelectEvent((prevSelectedEvents) => {
      const isSelected = prevSelectedEvents.some(
        (selectedEvent) =>
          selectedEvent.event_type === event.event_type &&
          selectedEvent.event_id === event.event_id,
      );
      if (isSelected) {
        return prevSelectedEvents.filter(
          (selectedEvent) =>
            selectedEvent.event_type !== event.event_type ||
            selectedEvent.event_id !== event.event_id,
        );
      } else {
        return [...prevSelectedEvents, event];
      }
    });
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
              setFormFields({
                currentUserRole,
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
              if (eventChange.jsEvent.shiftKey) {
                handleSelectEvent({
                  event_id: eventChange.event.id,
                  event_type: eventChange.event.extendedProps.formSelected,
                });
              } else {
                setDialogOpen(true);
                setFormFields(
                  eventChange.event.extendedProps as FormFieldProps,
                );
              }
            }}
            events={FilterdEvents(
              currentUserId,
              events,
              filterEvents,
              teachers,
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
            eventContent={(arg) => {
              return arg.event.extendedProps.formSelected !== "class" ? (
                <div className="event-title flex items-center gap-2">
                  {selectedEvents.some(
                    (selectedEvent) => selectedEvent.event_id === arg.event.id,
                  ) && <Checkbox checked />}
                  {arg.event.title}
                </div>
              ) : (
                <HoverCardEventCalendar
                  prev={
                    selectedEvents.some(
                      (selectedEvent) =>
                        selectedEvent.event_id === arg.event.id,
                    ) && <Checkbox checked />
                  }
                  id={arg.event.extendedProps.id}
                  title={arg.event.title}
                />
              );
            }}
          />
        </div>
      </div>
      {selectedEvents.length > 0 && currentUserRole !== "teacher" && (
        <div className="fixed bottom-6 right-10 z-50 ">
          <DropdownMenuCopyEvent
            events={selectedEvents}
            clear={() => {
              setSelectEvent([]);
            }}
          />
        </div>
      )}
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
