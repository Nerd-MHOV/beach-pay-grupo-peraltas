"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { z } from "zod";
import { createArena, updateArena } from "./actions";
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
import { cities } from "./cities";
import { Arena } from "@prisma/client";

const formSchema = z.object({
  name: z
    .string({
      message: "O nome é obrigatório e deve ter no mínimo 2 caracteres.",
    })
    .min(2)
    .max(255),
  city: z
    .string({
      message: "A cidade é obrigatória e deve ter no mínimo 2 caracteres.",
    })
    .min(2)
    .max(255),
});

const FormCreateArena = ({ arena }: { arena?: Arena }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { mutateAsync: createArenaFn, isPending } = useMutation({
    mutationKey: ["create-arena"],
    mutationFn: createArena,
    onError: () => {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel adicionar a arena. Tente novamente.",
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["arenas"], (old: undefined) => [
        ...(old || []),
        data,
      ]);
      form.reset({
        city: "",
        name: "",
      });
      toast({
        title: "Arena Adicionada",
        description: "A arena foi adicionada com sucesso.",
      });
    },
  });

  const { mutateAsync: updateArenaFn, isPending: isPendingUpdate } =
    useMutation({
      mutationKey: ["update-arena"],
      mutationFn: updateArena,
      onError: () => {
        toast({
          title: "Algo de Errado",
          description: "Não foi possivel atualizar a arena. Tente novamente.",
          variant: "destructive",
        });
      },
      onSuccess: (data) => {
        queryClient.setQueryData(["arenas"], (old: Arena[]) =>
          old.map((a) => (a.id === data.id ? data : a))
        );
        toast({
          title: "Arena Atualizada",
          description: "A arena foi atualizada com sucesso.",
        });
      },
    });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (arena) {
      updateArenaFn({ ...values, id: arena.id || "" });
      return;
    }
    createArenaFn(values);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...(arena
        ? {
            name: arena.name,
            city: arena.city,
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
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cidade*</FormLabel>
              <FormControl>
                <Combobox
                  placeholder="Selecione a cidade"
                  items={cities.map((city) => ({
                    label: city,
                    value: city,
                  }))}
                  selected={field.value}
                  onSelect={(value) => field.onChange(value)}
                />
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
            {arena ? "Atualizar" : "Adicionar"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormCreateArena;
