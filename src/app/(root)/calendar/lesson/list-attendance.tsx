import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { getLessonById } from "./actions";
import { useQuery } from "@tanstack/react-query";
import { Checkbox } from "@/components/ui/checkbox";
import { Combobox } from "@/components/combobox";
import { reasonOptions } from "./reason-options";
import { Textarea } from "@/components/ui/textarea";

const ListAttendance = ({ id }: { id: string }) => {
  const { data: lesson, isPending } = useQuery({
    queryKey: ["lesson"],
    queryFn: async () => await getLessonById(id),
  });
  return (
    <>
      <FormItem>
        <FormLabel>Lista de Presença</FormLabel>
        <FormControl>
          <div>
            <Separator />

            {lesson?.attendances?.map((att_field, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-2 p-2">
                  <label
                    htmlFor={`student-${att_field.student_id}`}
                    className="flex-1"
                  >
                    {att_field.student.name || "Aluno não identificado"}
                  </label>
                  {!att_field.did_attend && (
                    <FormItem>
                      <FormControl>
                        <Combobox
                          disabled={true}
                          placeholder="Motivo"
                          items={reasonOptions}
                          selected={att_field.reason}
                          onSelect={() => {}}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                  <Checkbox
                    id={`student-${att_field.student_id}`}
                    className="w-5 h-5"
                    checked={att_field.did_attend}
                    onCheckedChange={(e) => {}}
                  />
                </div>
                <Separator />
              </React.Fragment>
            ))}
          </div>
        </FormControl>
      </FormItem>

      <FormItem>
        <FormLabel>Observação</FormLabel>

        <FormControl>
          <Textarea
            rows={3}
            value={lesson?.observation || ""}
            className="resize-none"
          />
        </FormControl>
      </FormItem>
    </>
  );
};

export default ListAttendance;
