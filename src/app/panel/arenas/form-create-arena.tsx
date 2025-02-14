"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { z } from "zod";
import { createArena } from "./actions";
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

const FormCreateArena = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { mutateAsync: createArenaFn } = useMutation({
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
      form.reset();
      toast({
        title: "Arena Adicionada",
        description: "A arena foi adicionada com sucesso.",
      });
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    createArenaFn(values);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
          <Button type="submit">Adicionar</Button>
        </div>
      </form>
    </Form>
  );
};

export default FormCreateArena;
