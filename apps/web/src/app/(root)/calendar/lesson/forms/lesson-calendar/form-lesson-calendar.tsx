"use client";
import { Combobox } from "@/components/combobox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getMembers } from "@/app/(root)/panel/members/actions";
import { Button } from "@/components/ui/button";
import DateTimeRangePicker from "@/components/date-time-range-picker";
import { $Enums, LessonStatus, Tier } from "@beach-pay/database";
import { getAvailability } from "../../../availability/actions";
import { getCourts } from "../../../courts/actions";
import DialogLessonClosure from "../../dialogs/dialog-lesson-closure";
import ListAttendance from "../../list-attendance";
import DialogDeleteLessonCalendar from "../../dialogs/dialog-delete-lesson";
import DialogReopenLessonCalendar from "../../dialogs/dialog-reopen-lesson";
import AttendanceManager from "./attendance-manager";
import { useActionForm } from "./use-action-form";
import { schema } from "./schema-lesson-calendar";

export interface FormLessonCalendarProps {
  currentUserRole: $Enums.UserRole;
  onClosure?: () => void;
  lesson?: {
    status?: LessonStatus;
    id?: string;
    teacher_id?: string;
    date?: {
      from: Date;
      to: Date;
    };
    court_id?: string;
    subject?: string;
    tier?: $Enums.Tier;
    attendance?: {
      id: string;
      replacement: string | null;
    }[];
  };
}

const FormLessonCalendar = ({
  lesson,
  onClosure,
  currentUserRole,
}: FormLessonCalendarProps) => {
  const { toast } = useToast();
  const query = useQueryClient();
  const { createLessonFn, updateLessonFn } = useActionForm();
  const { data: members, refetch: refetchMembers } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const data = await getMembers({
        student: true,
      });
      return data;
    },
    initialData: [],
  });

  const { data: courts } = useQuery({
    queryKey: ["courts"],
    queryFn: async () => {
      const data = await getCourts();
      return data;
    },
    initialData: [],
  });

  const { data: availabilities, refetch: refetchAvailabilities } = useQuery({
    queryKey: ["availability"],
    queryFn: async () => {
      const from = form.getValues("date.from");
      const to = form.getValues("date.to");
      if (!from || !to) {
        return [];
      }
      const data = await getAvailability({
        aula: {
          start: from || new Date(),
          end: to || new Date(),
        },
      });
      return data;
    },
    initialData: [],
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    if (lesson?.status === "canceled" || lesson?.status === "completed") {
      toast({
        title: "Aula FECHADA.",
        description: "Essa aula já foi fechada, não pode ser atualizada.",
        variant: "destructive",
      });
      return;
    }
    if (!availabilities.some((av) => av.teacher.id === data.teacher_id)) {
      toast({
        title: "Professor não disponível",
        description: "O professor não está disponível nesse horário.",
        variant: "destructive",
      });
      return;
    }
    const refined = {
      teacher_id: data.teacher_id,
      time_start: data.date.from,
      time_end: data.date.to,
      courts_id: data.court_id,
      tier: data.tier,
      attendances_object: data.attendance,
      teacher_availability_id:
        availabilities.find((av) => av.teacher.id === data.teacher_id)?.id ||
        "",
    };
    if (lesson?.id) {
      updateLessonFn({
        ...refined,
        id: lesson.id,
      });
    } else {
      createLessonFn(refined, () => {
        form.reset();
      });
    }
    refetchMembers();
    query.invalidateQueries({
      queryKey: ["lesson"],
    });
  };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...lesson,
      attendance:
        lesson?.attendance?.map((att) => ({
          id: att.id,
          replacement: att.replacement || null,
        })) || [],
    },
    disabled:
      lesson?.status === "canceled" ||
      lesson?.status === "completed" ||
      currentUserRole === "teacher",
  });

  return (
    <Form {...form}>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(onSubmit)(e);
        }}
      >
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data*</FormLabel>
              <DateTimeRangePicker
                disabled={field.disabled}
                value={field.value}
                onChange={(value) => {
                  field.onChange(value);
                  refetchMembers(); // remove
                  refetchAvailabilities();
                }}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="teacher_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Professor*</FormLabel>
              <FormControl>
                <Combobox
                  disabled={field.disabled}
                  placeholder="Selecione a Professor"
                  items={(
                    availabilities.map((av) => av.teacher).flat() || []
                  ).map((teacher) => ({
                    label: teacher.name,
                    value: teacher.id,
                  }))}
                  selected={field.value}
                  onSelect={(value) => field.onChange(value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="court_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quadra*</FormLabel>
                  <FormControl>
                    <Combobox
                      disabled={field.disabled}
                      placeholder="Selecione a Quadra"
                      items={courts.map((courts) => ({
                        label: courts.name,
                        value: courts.id,
                      }))}
                      selected={field.value}
                      onSelect={(value) => field.onChange(value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="tier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Classificação*</FormLabel>
                <FormControl>
                  <Combobox
                    disabled={field.disabled}
                    placeholder="Selecione"
                    items={Object.values(Tier).map((tier) => ({
                      label: tier,
                      value: tier,
                    }))}
                    selected={field.value}
                    onSelect={(value) => {
                      field.onChange(value);
                      form.setValue("attendance", [
                        ...form.getValues("attendance"),
                      ]);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {(lesson?.status === "canceled" || lesson?.status === "completed") &&
        lesson?.id ? (
          <ListAttendance id={lesson.id} />
        ) : (
          <>
            <FormField
              control={form.control}
              name="attendance"
              render={({ field }) => (
                <AttendanceManager
                  members={members}
                  value={field.value}
                  onChange={field.onChange}
                  tier={form.getValues("tier")}
                  disabled={field.disabled}
                />
              )}
            />

            <div className="flex w-full justify-end mt-5 gap-2">
              {lesson?.id && currentUserRole !== "teacher" && (
                <DialogDeleteLessonCalendar
                  id={lesson.id}
                  onDelete={() => {
                    onClosure?.();
                  }}
                />
              )}

              {lesson?.id && (
                <DialogLessonClosure
                  id={lesson.id}
                  onClosure={() => {
                    onClosure?.();
                  }}
                />
              )}

              <Button
                isLoading={form.formState.isSubmitting}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {lesson?.id ? "Atualizar" : "Adicionar"}
              </Button>
            </div>
          </>
        )}

        {lesson?.id &&
          lesson?.status !== "scheduled" &&
          currentUserRole !== "teacher" && (
            <DialogReopenLessonCalendar
              id={lesson.id}
              onReopen={() => {
                onClosure?.();
              }}
            />
          )}

        {lesson?.status === "canceled" && (
          <div className="flex flex-col gap-2">
            <h1 className="text-sm font-bold text-red-600">Aula cancelada</h1>
            <p className="text-sm text-red-600">
              Reagendar Alunos para outra aula.
            </p>
          </div>
        )}
      </form>
    </Form>
  );
};

export default FormLessonCalendar;
