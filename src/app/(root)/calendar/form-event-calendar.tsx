import { Toggle } from "@/components/ui/toggle";
import React from "react";
import FormAvailabilityCalendar from "./availability/form-availability-calendar";

const FormEventCalendar = ({
  formSelected,
  setFormSelected,
  teacher_id,
}: {
  teacher_id?: string;
  formSelected: "availability" | "class" | "tournament";
  setFormSelected: React.Dispatch<
    React.SetStateAction<"availability" | "class" | "tournament">
  >;
}) => {
  return (
    <div>
      <div className="flex flex-row gap-2">
        <Toggle
          pressed={formSelected === "availability"}
          onClick={() => setFormSelected("availability")}
        >
          Disponibilidade
        </Toggle>
        <Toggle
          pressed={formSelected === "class"}
          onClick={() => setFormSelected("class")}
        >
          Aula
        </Toggle>
        <Toggle
          pressed={formSelected === "tournament"}
          onClick={() => setFormSelected("tournament")}
        >
          Torneio
        </Toggle>
      </div>

      <div className="flex flex-col mt-4">
        {formSelected === "availability" && (
          <FormAvailabilityCalendar
            availability={{
              teacher_id: teacher_id,
            }}
          />
        )}
        {formSelected === "class" && <div>Formulário de Aula</div>}
        {formSelected === "tournament" && <div>Formulário de Torneio</div>}
      </div>
    </div>
  );
};

export default FormEventCalendar;
