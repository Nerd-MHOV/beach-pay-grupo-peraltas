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
import LoadingData from "@/components/LoadingData";
import { Button } from "@/components/ui/button";
import DateTimeRangePicker from "@/components/date-time-range-picker";
import { createAvailability, updateAvailability } from "./actions";
import { TeacherAvailability } from "@prisma/client";

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
});
const FormAvailabilityCalendar = ({
  availability,
}: {
  availability?: {
    id?: string;
    teacher_id?: string;
    date?: {
      from: Date;
      to: Date;
    };
  };
}) => {
  const { toast } = useToast();
  const query = useQueryClient();
  const { data: teachers, isPending: isPendingTeachers } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const data = await getMembers({
        teacher: true,
      });
      return data;
    },
    initialData: [],
  });

  const createAvailabilityFn = async (
    data: Omit<
      TeacherAvailability,
      "id" | "created_at" | "updated_at" | "lesson_id"
    >
  ) => {
    try {
      await createAvailability(data);
      toast({
        title: "Disponibilidade criada com sucesso!",
        description: "A disponibilidade foi criada com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao criar disponibilidade",
        description: "Ocorreu um erro ao criar a disponibilidade.",
        variant: "destructive",
      });
    }
  };

  const updateAvailabilityFn = async (
    data: Omit<TeacherAvailability, "created_at" | "updated_at" | "lesson_id">
  ) => {
    try {
      await updateAvailability(data);
      toast({
        title: "Disponibilidade atualizada com sucesso!",
        description: "A disponibilidade foi atualizada com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao atualizar disponibilidade",
        description: "Ocorreu um erro ao atualizar a disponibilidade.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = async (data: z.infer<typeof schema>) => {
    const refined = {
      teacher_id: data.teacher_id,
      time_start: data.date.from,
      time_end: data.date.to,
    };
    if (availability?.id) {
      updateAvailabilityFn({
        ...refined,
        id: availability.id,
      });
    } else {
      createAvailabilityFn(refined);
    }
    query.invalidateQueries({
      queryKey: ["availability"],
    });
  };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: availability,
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
        {isPendingTeachers ? (
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
                    items={(teachers || []).map((teacher) => ({
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

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data*</FormLabel>
              <DateTimeRangePicker
                value={field.value}
                onChange={(value) => field.onChange(value)}
              />
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
            {availability?.id ? "Atualizar" : "Adicionar"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormAvailabilityCalendar;
