import { Toggle } from "@/components/ui/toggle";
import React from "react";
import FormAvailabilityCalendar from "./availability/form-availability-calendar";
import { FormFieldProps, SetFormFieldProps } from "./calendar-client-component";

const FormEventCalendar = ({
  formFields,
  setFormFields,
}: {
  formFields: FormFieldProps;
  setFormFields: SetFormFieldProps;
}) => {
  return (
    <div>
      <div className="flex flex-row gap-2">
        <Toggle
          pressed={formFields.formSelected === "availability"}
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
        {formFields.formSelected === "class" && <div>Formulário de Aula</div>}
        {formFields.formSelected === "tournament" && (
          <div>Formulário de Torneio</div>
        )}
      </div>
    </div>
  );
};

export default FormEventCalendar;
