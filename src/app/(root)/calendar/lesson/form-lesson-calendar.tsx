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
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getAthletes } from "../../panel/athletes/actions";
import LoadingData from "@/components/LoadingData";
import { Button } from "@/components/ui/button";
import DateTimeRangePicker from "@/components/date-time-range-picker";
import { createLesson, updateLesson } from "./actions";
import { Lesson } from "@prisma/client";
import { getAvailability } from "../availability/actions";
import { getCourts } from "../courts/actions";
import SimpleInput from "@/components/simple-input";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

const schema = z.object({
  teacher_id: z.string({
    message: "Esta declarando para qual professor?",
  }),
  date: z.object({
    from: z.date({
      required_error: "Data inicial é obrigatória",
    }),
    to: z.date({
      required_error: "Data final é obrigatória",
    }),
  }),
  court_id: z.string(),
  subject: z
    .string()
    .nullable()
    .optional()
    .transform((value) => value || null),
  attendance: z.array(z.string()),
});
const FormLessonCalendar = ({
  lesson,
}: {
  lesson?: {
    id?: string;
    teacher_id?: string;
    date?: {
      from: Date;
      to: Date;
    };
    court_id?: string;
    subject?: string;
    attendance?: string[];
  };
}) => {
  console.log(lesson);
  const { toast } = useToast();
  const { data: athletes, isPending: isPendingAthletes } = useQuery({
    queryKey: ["athletes"],
    queryFn: async () => {
      const data = await getAthletes({
        student: true,
      });
      return data;
    },
    initialData: [],
  });

  const { data: courts, isPending: isPendingCourts } = useQuery({
    queryKey: ["courts"],
    queryFn: async () => {
      const data = await getCourts();
      return data;
    },
    initialData: [],
  });

  const {
    data: availabilities,
    isPending: isPendingAvailabilities,
    refetch: refetchAvailabilities,
  } = useQuery({
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

  const createLessonFn = async (
    data: Omit<Lesson, "id" | "created_at" | "updated_at"> & {
      attendance_ids: string[];
    }
  ) => {
    try {
      await createLesson(data);
      toast({
        title: "Aula criada com sucesso!",
        description: "A aula foi criada com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao criar aula",
        description: "Ocorreu um erro ao criar a aula.",
        variant: "destructive",
      });
    }
  };

  const updateLessonFn = async (
    data: Omit<Lesson, "created_at" | "updated_at"> & {
      attendance_ids: string[];
    }
  ) => {
    try {
      await updateLesson(data);
      toast({
        title: "Aula atualizada com sucesso!",
        description: "A aula foi atualizada com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao atualizar aula",
        description: "Ocorreu um erro ao atualizar a aula.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = async (data: z.infer<typeof schema>) => {
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
      subject: data.subject,
      attendance_ids: data.attendance,
    };
    if (lesson?.id) {
      updateLessonFn({
        ...refined,
        id: lesson.id,
      });
    } else {
      createLessonFn(refined);
    }
  };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...lesson,
      attendance: lesson?.attendance,
    },
  });

  console.log(form.getValues("attendance"));
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
                value={field.value}
                onChange={(value) => {
                  field.onChange(value);
                  refetchAvailabilities();
                }}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        {isPendingAvailabilities ? (
          <LoadingData message="Carregando professores..." />
        ) : (
          <FormField
            control={form.control}
            name="teacher_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Professor*</FormLabel>
                <FormControl>
                  <Combobox
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
        )}

        {isPendingCourts ? (
          <LoadingData message="Carregando Quadras..." />
        ) : (
          <FormField
            control={form.control}
            name="court_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quadra*</FormLabel>
                <FormControl>
                  <Combobox
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
        )}

        <SimpleInput
          form={form}
          label="Assunto"
          name="subject"
          placeholder="Tema da aula"
        />

        {isPendingAthletes ? (
          <LoadingData message="Carregando Quadras..." />
        ) : (
          <FormField
            control={form.control}
            name="attendance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adicionar Aluno*</FormLabel>
                <FormControl>
                  <Combobox
                    placeholder="Selecione o Aluno"
                    items={
                      athletes
                        .filter(
                          (ath) =>
                            !form.getValues("attendance").includes(ath.id)
                        )
                        .map((ath) => ({
                          label: ath.name,
                          value: ath.id,
                        })) || []
                    }
                    selected={""}
                    onSelect={(value) => {
                      console.log(value, field.value);
                      field.onChange([...field.value, value]);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="attendance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alunos*</FormLabel>
              <FormControl>
                <div className="h-32 rounded-md border overflow-auto py-1">
                  <div className="p-4">
                    {field.value?.map((id, index) => {
                      const athlete = athletes.find((find) => find.id === id);
                      if (!athlete) return null;
                      return (
                        <div key={index}>
                          <div className="text-sm flex justify-between gap-2 items-center">
                            <div className="relative flex flex-col flex-1">
                              <h1 className="font-bold">{athlete.name}</h1>
                            </div>
                            <div className="flex flex-col gap-1">
                              <Button
                                size="sm"
                                variant="outline"
                                type="button"
                                className="bg-red-100 text-red-800 hover:bg-red-200 hover:text-red-900"
                                onClick={() => {
                                  const array = field.value?.filter(
                                    (_, i) => i !== index
                                  );
                                  field.onChange(array);
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
          )}
        />

        <div className="flex w-full justify-end mt-5">
          <Button
            isLoading={form.formState.isSubmitting}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {lesson?.id ? "Atualizar" : "Adicionar"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormLessonCalendar;
