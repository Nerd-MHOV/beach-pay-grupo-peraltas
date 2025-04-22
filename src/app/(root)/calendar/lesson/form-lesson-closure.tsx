import SimpleInput from "@/components/simple-input";
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
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { closeLesson, getLessonById } from "./actions";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const schema = z.object({
  attendance_relation: z.array(
    z.object({
      student_id: z.string(),
      presence: z.boolean(),
      // Esse campo não é validado, mas pode ser usado para exibição
      student_name: z.string().optional(),
    })
  ),
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
    })) ?? [];

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      attendance_relation: defaultAttendance,
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
                      <>
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
                          <Checkbox
                            id={`student-${att_field.student_id}`}
                            className="w-5 h-5"
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
                      </>
                    ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full justify-end mt-5 gap-2">
          <Button
            isLoading={form.formState.isSubmitting}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Confirmar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormLessonClosure;
