import React from "react";
import { Combobox } from "@/components/combobox";
import { Button } from "@/components/ui/button";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import DrawerMemberContents from "../../../../panel/members/[id]/modals/drawer-member-contents";
import DashboardStudent from "../../../../panel/members/[id]/student/dashboard-student";
import FormMember from "../../../../panel/members/form/form-member";
import AlertsMemberList from "../../alerts-member-list";
import DialogSelectReplacementLesson from "../../dialogs/dialog-select-replacement-lesson";
import {
  AlarmClockPlus,
  CircleFadingPlus,
  CirclePlus,
  UserRoundCog,
  X,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { reasonOptions } from "../../reason-options";
import { getMembers } from "../../../../panel/members/actions";

const AttendanceManager = ({
  members = [],
  value = [],
  onChange,
  tier,
  disabled = false,
}: {
  members: Awaited<ReturnType<typeof getMembers>>;
  value: { id: string; replacement: any }[];
  onChange: (value: { id: string; replacement: any }[]) => void;
  tier?: any;
  disabled?: boolean;
}) => {
  return (
    <>
      <FormItem>
        <FormLabel>Adicionar Aluno*</FormLabel>
        <FormControl>
          <Combobox
            placeholder="Selecione o Aluno"
            disabled={disabled}
            items={
              members
                .filter(
                  (ath) => !(value.map((att) => att.id) || []).includes(ath.id)
                )
                .map((ath) => ({
                  label: ath.name,
                  value: ath.id,
                })) || []
            }
            selected={""}
            onSelect={(selectedId) => {
              const member = members.find((m) => m.id === selectedId);
              if (!member) return;
              onChange([
                ...value,
                {
                  id: member.id,
                  replacement: null,
                },
              ]);
            }}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
      <FormItem>
        <FormLabel>Alunos*</FormLabel>
        <FormControl>
          <div className="h-32 rounded-md border overflow-auto py-1">
            <div className="p-4">
              {value?.map((studentAttendance, index) => {
                const member = members.find(
                  (find) => find.id === studentAttendance.id
                );
                if (!member) return null;
                return (
                  <div key={index}>
                    <div className="text-sm flex justify-between gap-2 items-center">
                      <div className="flex-1 flex gap-1 items-center">
                        <DrawerMemberContents
                          id={member.id}
                          trigger={
                            <Button
                              variant="outline"
                              size="icon"
                              disabled={disabled}
                            >
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
                        <DialogSelectReplacementLesson
                          key={member.id}
                          content={
                            <Combobox
                              items={member.lesson_attendance
                                .filter((att) => {
                                  const twoMonthsAgo = new Date();
                                  twoMonthsAgo.setMonth(
                                    twoMonthsAgo.getMonth() - 2
                                  );
                                  return (
                                    att.reason &&
                                    att.reason !== "no_justification" &&
                                    !att.replacement_id &&
                                    att.lesson.time_start &&
                                    new Date(att.lesson.time_start) >
                                      twoMonthsAgo
                                  );
                                })
                                .map((lesson) => ({
                                  label: `${format(
                                    lesson.lesson.time_start,
                                    "dd/MM/yyyy"
                                  )} - ${
                                    reasonOptions.find(
                                      (ro) => ro.value === lesson.reason
                                    )?.label ?? ""
                                  }`,
                                  value: lesson.id,
                                }))}
                              onSelect={(val) => {
                                console.log(val);
                                const newValue = value.map((att) => {
                                  if (att.id === member.id) {
                                    return {
                                      ...att,
                                      replacement: val,
                                    };
                                  }
                                  return att;
                                });
                                onChange(newValue);
                              }}
                              placeholder="Selecione a aula correspondente"
                              selected={studentAttendance.replacement}
                            />
                          }
                          trigger={
                            <Button
                              variant="outline"
                              size="icon"
                              disabled={disabled}
                              className={
                                studentAttendance.replacement
                                  ? "bg-amber-100 text-amber-800 hover:bg-amber-200 hover:text-amber-900"
                                  : ""
                              }
                            >
                              {studentAttendance.replacement ? (
                                <CirclePlus />
                              ) : (
                                <CircleFadingPlus />
                              )}
                            </Button>
                          }
                        />
                        <h1 className="font-bold pl-5">{member.name}</h1>
                      </div>
                      <AlertsMemberList member={member} field={{ tier }} />
                      <div className="flex flex-col gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          type="button"
                          disabled={disabled}
                          className="bg-red-100 text-red-800 hover:bg-red-200 hover:text-red-900"
                          onClick={() => {
                            const array = value?.filter((_, i) => i !== index);
                            onChange(array);
                          }}
                        >
                          <X />
                        </Button>
                      </div>
                    </div>
                    <Separator className="my-2" />
                  </div>
                );
              })}
            </div>
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    </>
  );
};

export default AttendanceManager;
