"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/combobox";
import { createTournament, updateTournament } from "./actions";
import { getArenas } from "../arenas/actions";
import { format, isDate } from "date-fns";
import DialogCreateArena from "../arenas/dialog-arena";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Plus } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Tournament } from "@prisma/client";

const formSchema = z.object({
  name: z
    .string({
      message: "O nome é obrigatório e deve ter no mínimo 2 caracteres.",
    })
    .min(2)
    .max(255),
  date: z.object({
    from: z.date({
      message: "A data inicial é obrigatória.",
    }),
    to: z.date({
      message: "A data final é obrigatória.",
    }),
  }),
  arena_id: z.string({
    message: "A arena é obrigatória.",
  }),
  description: z
    .string({
      message: "A descrição é obrigatória e deve ter no mínimo 5 caracteres.",
    })
    .min(5)
    .max(255)
    .nullable()
    .transform((v) => v || ""),
});

const FormTournament = ({
  tournament,
  onCreateTournament = () => {},
}: {
  tournament?: Partial<Tournament>;
  onCreateTournament?: (tournament: Tournament) => void;
}) => {
  const { toast } = useToast();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const { data: arenas, refetch: refetchArenas } = useQuery({
    queryKey: ["arenas"],
    queryFn: getArenas,
  });

  const createTournamentFn = async (
    values: Omit<Tournament, "id" | "created_at" | "updated_at">
  ) => {
    try {
      const created = await createTournament(values);
      onCreateTournament(created);
      form.reset({
        description: "",
        name: "",
      });
      toast({
        title: "Torneio Adicionado",
        description: "O torneio foi adicionada com sucesso.",
      });
    } catch {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel adicionar o torneio. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const updateTournamentFn = async (
    values: Omit<Tournament, "created_at" | "updated_at">
  ) => {
    try {
      await updateTournament(values);
      toast({
        title: "Torneio Atualizado",
        description: "O torneio foi atualizado com sucesso.",
      });
    } catch {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel atualizar o torneio. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { date, ...rest } = values;
    if (tournament?.id) {
      updateTournamentFn({
        ...rest,
        date_from: date.from,
        date_to: date.to,
        id: tournament.id || "",
      });
      return;
    }
    createTournamentFn({
      ...rest,
      date_from: date.from,
      date_to: date.to,
    });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...(tournament
        ? {
            name: tournament.name,
            arena_id: tournament.arena_id,
            date: {
              from: tournament.date_from,
              to: tournament.date_to,
            },
            description: tournament.description || "",
          }
        : {}),
    },
  });
  return (
    <Form {...form}>
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(onSubmit)(e);
        }}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome*</FormLabel>
              <FormControl>
                <Input placeholder="Nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="arena_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Arena*</FormLabel>
              <FormControl>
                <Combobox
                  placeholder="Selecione a Arena"
                  items={(arenas || []).map((arena) => ({
                    label: arena.name + " - " + arena.address.city_state,
                    value: arena.id,
                  }))}
                  selected={field.value}
                  onSelect={(value) => field.onChange(value)}
                  above={
                    <DialogCreateArena
                      trigger={
                        <Button size="sm" variant="ghost">
                          <Plus /> Nova arena
                        </Button>
                      }
                      onCreate={(newArena) => {
                        refetchArenas();
                        field.onChange(newArena.id);
                      }}
                    />
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data:*</FormLabel>
              <Popover onOpenChange={setIsCalendarOpen} open={isCalendarOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value && isDate(field.value.from) ? (
                        field.value.to && isDate(field.value.to) ? (
                          <>
                            {format(field.value.from, "dd LLL", {
                              locale: ptBR,
                            })}{" "}
                            à{" "}
                            {format(field.value.to, "dd LLL - y", {
                              locale: ptBR,
                            })}
                          </>
                        ) : (
                          format(field.value.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Selecione uma Data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    selected={field.value}
                    onSelect={(value) => {
                      field.onChange(value);
                    }}
                    autoFocus
                    showOutsideDays={false}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição*</FormLabel>
              <FormControl>
                <Textarea placeholder="Descrição do Torneio" {...field} />
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
            {tournament ? "Atualizar" : "Adicionar"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormTournament;
