"use client";
import { Button } from "@/components/ui/button";
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
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cancelLesson, closeLesson, getLessonById } from "./actions";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Combobox } from "@/components/combobox";
import { reasonOptions } from "./reason-options";
import { ReasonsToNotAttend } from "@prisma/client";
import DropdownMenuCancelLesson from "./dropdown-menu-cancel-lesson";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  attendance_relation: z.array(
    z
      .object({
        student_id: z.string(),
        presence: z.boolean(),
        reason: z.nativeEnum(ReasonsToNotAttend).optional(),
        student_name: z.string().optional(),
      })
      .superRefine((data, ctx) => {
        if (!data.presence && (!data.reason || data.reason.trim() === "")) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "O campo é obrigatório",
            path: ["attendance_realtion", "reason"],
          });
        }
      })
  ),
  observation: z.string().optional(),
});
const FormLessonClosure = ({
  lesson,
  onClosure,
}: {
  onClosure?: () => void;
  lesson: NonNullable<Awaited<ReturnType<typeof getLessonById>>>;
}) => {
  const { toast } = useToast();

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await closeLesson({
        id: lesson.id,
        attendance_relation: data.attendance_relation,
        observation: data.observation,
      });
      toast({
        title: "Aula encerrada com sucesso",
        description: "A aula foi encerrada com sucesso.",
      });
      onClosure?.();
    } catch (error) {
      toast({
        title: "Erro ao encerrar aula",
        description: "Ocorreu um erro ao encerrar a aula.",
        variant: "destructive",
      });
    }
  };
  // Se houver alunos na aula, garanta que eles estejam no defaultValues
  const defaultAttendance =
    lesson.attendances.map((attendance) => ({
      student_id: attendance.student_id,
      presence: attendance.did_attend,
      student_name: attendance.student.name,
      reason: attendance.reason || undefined,
    })) ?? [];

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      attendance_relation: defaultAttendance,
      observation: lesson.observation || "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit(onSubmit)(e);
        }}
        className="space-y-4"
      >
        {/* Lista de alunos com checkbox */}
        <FormField
          control={form.control}
          name="attendance_relation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lista de Presença</FormLabel>
              <FormControl>
                <div>
                  <Separator />

                  {form
                    .getValues("attendance_relation")
                    ?.map((att_field, index) => (
                      <Fragment key={att_field.student_id}>
                        <div
                          key={att_field.student_id}
                          className="flex items-center gap-2 p-2"
                        >
                          <label
                            htmlFor={`student-${att_field.student_id}`}
                            className="flex-1"
                          >
                            {att_field.student_name || "Aluno não identificado"}
                          </label>
                          {!att_field.presence && (
                            <FormItem>
                              <FormControl>
                                <Combobox
                                  placeholder="Motivo"
                                  items={reasonOptions}
                                  selected={field.value[index].reason || null}
                                  onSelect={(value) => {
                                    field.onChange(
                                      field.value.map((item, i) =>
                                        i === index
                                          ? { ...item, reason: value }
                                          : item
                                      )
                                    );
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                          <Checkbox
                            id={`student-${att_field.student_id}`}
                            className="w-5 h-5 ml-2"
                            checked={att_field.presence}
                            onCheckedChange={(e) => {
                              field.onChange(
                                field.value.map((item, i) =>
                                  i === index
                                    ? { ...item, presence: !att_field.presence }
                                    : item
                                )
                              );
                            }}
                          />
                        </div>
                        <Separator />
                      </Fragment>
                    ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="observation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Observação</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  rows={3}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full justify-end mt-5 gap-2">
          <DropdownMenuCancelLesson
            id={lesson.id}
            onClosure={() => {
              onClosure?.();
            }}
          />
          <Button
            isLoading={form.formState.isSubmitting}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Fechar Aula
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormLessonClosure;
