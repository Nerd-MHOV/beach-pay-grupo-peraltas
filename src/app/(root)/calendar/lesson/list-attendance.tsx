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
import DrawerMemberContents from "../../panel/members/[id]/modals/drawer-member-contents";
import { Button } from "@/components/ui/button";
import { UserRoundCog } from "lucide-react";
import DashboardStudent from "../../panel/members/[id]/student/dashboard-student";
import FormMember from "../../panel/members/form/form-member";

const ListAttendance = ({
  id,
  disabled,
}: {
  id: string;
  disabled?: boolean;
}) => {
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
                  <DrawerMemberContents
                    id={att_field.student.id}
                    trigger={
                      <Button variant="outline" size="icon" disabled={disabled}>
                        <UserRoundCog />
                      </Button>
                    }
                    content={(member) => (
                      <>
                        <DashboardStudent member={member} />

                        <div className="bg-white p-7 rounded-xl shadow-lg">
                          <FormMember member={member} />
                        </div>
                      </>
                    )}
                  />
                  <label
                    htmlFor={`student-${att_field.student_id}`}
                    className="flex-1 ml-4"
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
            onChange={() => {}}
            readOnly
          />
        </FormControl>
      </FormItem>
    </>
  );
};

export default ListAttendance;
