"use client";
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

const FormCreateArena = ({
  arena,
  onCreate = () => {},
}: {
  arena?: Arena;
  onCreate?: (arena: Arena) => void;
}) => {
  const { toast } = useToast();

  const updateArenaFn = async (
    data: Omit<Arena, "createdAt" | "updatedAt">
  ) => {
    try {
      const updatedArena = await updateArena(data);
      toast({
        title: `Arena ${updatedArena.name} Atualizada`,
        description: "A arena foi atualizada com sucesso.",
      });
    } catch {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel atualizar a arena. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const createArenaFn = async (
    data: Omit<Arena, "id" | "createdAt" | "updatedAt">
  ) => {
    try {
      const newArena = await createArena(data);
      form.reset();
      onCreate(newArena);
      toast({
        title: `Arena ${newArena.name} Adicionada`,
        description: "A arena foi adicionada com sucesso.",
      });
    } catch {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel adicionar a arena. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (arena) {
      await updateArenaFn({ ...values, id: arena.id });
    } else {
      await createArenaFn(values);
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: arena ? { name: arena.name, city: arena.city } : {},
  });

  return (
    <Form {...form}>
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.stopPropagation();
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
            isLoading={form.formState.isSubmitting}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {arena ? "Atualizar" : "Adicionar"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormCreateArena;
