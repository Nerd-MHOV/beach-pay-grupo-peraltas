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
import { getAthletes } from "../../panel/athletes/actions";
import LoadingData from "@/components/LoadingData";
import { Button } from "@/components/ui/button";
import DateTimeRangePicker from "@/components/date-time-range-picker";
import { createLesson, updateLesson } from "./actions";
import { $Enums, Lesson, LessonStatus, Tier } from "@prisma/client";
import { getAvailability } from "../availability/actions";
import { getCourts } from "../courts/actions";
import SimpleInput from "@/components/simple-input";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, X } from "lucide-react";
import DialogLessonClosure from "./dialog-lesson-closure";
import ListAttendance from "./list-attendance";
import { Portal } from "@radix-ui/react-portal";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
  tier: z.nativeEnum(Tier, {
    required_error: "Selecione o nível",
  }),
  attendance: z.array(z.string()),
});
const FormLessonCalendar = ({
  lesson,
  onClosure,
}: {
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
    attendance?: string[];
  };
}) => {
  const { toast } = useToast();
  const query = useQueryClient();
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
    data: Omit<Lesson, "id" | "created_at" | "updated_at" | "status"> & {
      attendance_ids: string[];
    }
  ) => {
    try {
      await createLesson(data);
      toast({
        title: "Aula criada com sucesso!",
        description: "A aula foi criada com sucesso.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao criar aula",
        description: "Ocorreu um erro ao criar a aula.",
        variant: "destructive",
      });
    }
  };

  const updateLessonFn = async (
    data: Omit<Lesson, "created_at" | "updated_at" | "status"> & {
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
    if (lesson?.status === "completed") {
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
      attendance_ids: data.attendance,
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
      createLessonFn(refined);
    }

    query.invalidateQueries({
      queryKey: ["lesson"],
    });
  };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...lesson,
      attendance: lesson?.attendance,
    },
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
                disabled={lesson?.status === "completed"}
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
                    disabled={lesson?.status === "completed"}
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

        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2">
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
                        disabled={lesson?.status === "completed"}
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
          </div>
          <FormField
            control={form.control}
            name="tier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Classificação*</FormLabel>
                <FormControl>
                  <Combobox
                    disabled={lesson?.status === "completed"}
                    placeholder="Selecione"
                    items={Object.values(Tier).map((tier) => ({
                      label: tier,
                      value: tier,
                    }))}
                    selected={field.value}
                    onSelect={(value) => {
                      field.onChange(value);
                      // revalida alunos
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

        {lesson?.status === "completed" && lesson?.id ? (
          <ListAttendance id={lesson.id} />
        ) : (
          <>
            {isPendingAthletes ? (
              <LoadingData message="Carregando Alunos..." />
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
                                !(form.getValues("attendance") || []).includes(
                                  ath.id
                                )
                            )
                            .map((ath) => ({
                              label: ath.name,
                              value: ath.id,
                            })) || []
                        }
                        selected={""}
                        onSelect={(value) => {
                          field.onChange([...(field.value || []), value]);
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
                          const athlete = athletes.find(
                            (find) => find.id === id
                          );
                          if (!athlete) return null;
                          return (
                            <div key={index}>
                              <div className="text-sm flex justify-between gap-2 items-center">
                                <div className="flex-1">
                                  <h1 className="font-bold">{athlete.name}</h1>
                                </div>
                                {athlete.tier !== form.getValues("tier") && (
                                  <HoverCard>
                                    <HoverCardTrigger>
                                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                                    </HoverCardTrigger>
                                    <Portal>
                                      <HoverCardContent>
                                        <div className="flex flex-col gap-2">
                                          <h1 className="text-sm font-bold">
                                            Classificação - Atenção!
                                          </h1>
                                          <p className="text-sm">
                                            Você está adicionando um aluno que
                                            não está classificado para essa
                                            aula.
                                          </p>
                                          <span className="text-xs text-muted-foreground">
                                            <b>Aluno tier {athlete.tier} </b>
                                          </span>
                                        </div>
                                      </HoverCardContent>
                                    </Portal>
                                  </HoverCard>
                                )}
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

            <div className="flex w-full justify-end mt-5 gap-2">
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
      </form>
    </Form>
  );
};

export default FormLessonCalendar;
