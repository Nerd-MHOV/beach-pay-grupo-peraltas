import { Toggle } from "@/components/ui/toggle";
import React from "react";
import FormAvailabilityCalendar from "./availability/form-availability-calendar";
import { FormFieldProps, SetFormFieldProps } from "./calendar-client-component";
import FormLessonCalendar from "./lesson/form-lesson-calendar";
import FormTournament from "../panel/tournaments/form-tournament";

const FormEventCalendar = ({
  formFields,
  setFormFields,
  close,
}: {
  formFields: FormFieldProps;
  setFormFields: SetFormFieldProps;
  close?: VoidFunction;
}) => {
  return (
    <div>
      <div className="flex flex-row gap-2">
        <Toggle
          pressed={formFields.formSelected === "availability"}
          disabled={formFields.id !== undefined}
          onClick={() =>
            setFormFields((prev) => ({
              ...prev,
              formSelected: "availability",
            }))
          }
        >
          Disponibilidade
        </Toggle>
        <Toggle
          pressed={formFields.formSelected === "class"}
          disabled={formFields.id !== undefined}
          onClick={() =>
            setFormFields((prev) => ({
              ...prev,
              formSelected: "class",
            }))
          }
        >
          Aula
        </Toggle>
        <Toggle
          pressed={formFields.formSelected === "tournament"}
          disabled={formFields.id !== undefined}
          onClick={() =>
            setFormFields((prev) => ({
              ...prev,
              formSelected: "tournament",
            }))
          }
        >
          Torneio
        </Toggle>
      </div>

      <div className="flex flex-col mt-4">
        {formFields.formSelected === "availability" && (
          <FormAvailabilityCalendar
            availability={{
              teacher_id: formFields.teacher_id,
              id: formFields.id,
              date: formFields.selectedDate,
            }}
          />
        )}
        {formFields.formSelected === "class" && (
          <FormLessonCalendar
            lesson={{
              teacher_id: formFields.teacher_id,
              id: formFields.id,
              date: formFields.selectedDate,
              court_id: formFields.court_id,
              attendance: formFields.attendance_ids,
              tier: formFields.tier,
              status: formFields.status,
            }}
            onClosure={() => {
              close?.();
            }}
          />
        )}
        {formFields.formSelected === "tournament" && (
          <FormTournament
            tournament={{
              arena_id: formFields.arena_id,
              id: formFields.id,
              date_from: formFields.selectedDate?.from,
              date_to: formFields.selectedDate?.to,
              name: formFields.tournament_name,
              description: formFields.description,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default FormEventCalendar;
