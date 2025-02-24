"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
import { format } from "date-fns";
import DialogCreateArena from "../arenas/dialog-create-arena";
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
  arenaId: z.string({
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

const FormCreateTournament = ({ tournament }: { tournament?: Tournament }) => {
  const { toast } = useToast();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const queryClient = useQueryClient();
  const { data: arenas } = useQuery({
    queryKey: ["arenas"],
    queryFn: getArenas,
  });
  const { mutateAsync: createTournamentFn, isPending } = useMutation({
    mutationKey: ["create-tournament"],
    mutationFn: createTournament,
    onError: () => {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel adicionar o torneio. Tente novamente.",
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["tournaments"], (old: undefined) => [
        ...(old || []),
        data,
      ]);
      form.reset({
        description: "",
        name: "",
      });
      toast({
        title: "Torneio Adicionado",
        description: "O torneio foi adicionada com sucesso.",
      });
    },
  });

  const { mutateAsync: updateTournamentFn, isPending: isPendingUpdate } =
    useMutation({
      mutationKey: ["update-tournament"],
      mutationFn: updateTournament,
      onError: () => {
        toast({
          title: "Algo de Errado",
          description: "Não foi possivel atualizar o torneio. Tente novamente.",
          variant: "destructive",
        });
      },
      onSuccess: (data) => {
        queryClient.setQueryData(["tournaments"], (old: Tournament[]) =>
          old.map((torn) => (torn.id === data.id ? data : torn))
        );
        toast({
          title: "Torneio Atualizado",
          description: "O torneio foi atualizado com sucesso.",
        });
      },
    });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { date, ...rest } = values;
    if (tournament) {
      updateTournamentFn({
        ...rest,
        fromDate: date.from,
        toDate: date.to,
        id: tournament.id || "",
      });
      return;
    }
    createTournamentFn({
      ...rest,
      fromDate: date.from,
      toDate: date.to,
    });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...(tournament
        ? {
            name: tournament.name,
            arenaId: tournament.arenaId,
            date: {
              from: tournament.fromDate,
              to: tournament.toDate,
            },
            description: tournament.description || "",
          }
        : {}),
    },
  });
  return (
    <Form {...form}>
      <form className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome*</FormLabel>
              <FormControl>
                <Input placeholder="Nome Completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="arenaId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Arena*</FormLabel>
              <FormControl>
                <Combobox
                  placeholder="Selecione a Arena"
                  items={(arenas || []).map((arena) => ({
                    label: arena.name,
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
                      {field.value ? (
                        field.value.to ? (
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
            isLoading={isPending || isPendingUpdate}
            onClick={form.handleSubmit(onSubmit)}
          >
            {tournament ? "Atualizar" : "Adicionar"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormCreateTournament;
