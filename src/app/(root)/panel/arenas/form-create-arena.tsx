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
import { Address, Arena } from "@prisma/client";
import AddressForm from "@/components/address-form";
import { useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
  name: z
    .string({
      message: "O nome é obrigatório e deve ter no mínimo 2 caracteres.",
    })
    .min(2)
    .max(255),
  street: z.string().optional().nullable(),
  number: z.string().optional().nullable(),
  complement: z.string().optional().nullable(),
  neighborhood: z.string().optional().nullable(),
  city_state: z.string(),
  zip_code: z
    .string({
      message: "O CEP é obrigatório e deve ter 8 dígitos.",
    })
    .length(8, {
      message: "O CEP deve ter 8 dígitos.",
    })
    .regex(/^\d+$/, {
      message: "O CEP deve conter apenas números.",
    })
    .optional()
    .nullable(),
});

const FormCreateArena = ({
  arena,
  onCreate = () => {},
}: {
  arena?: Arena & { address: Address };
  onCreate?: (arena: Arena) => void;
}) => {
  const { toast } = useToast();
  const query = useQueryClient();
  const updateArenaFn = async (
    data: Omit<
      Arena & {
        address: Omit<Address, "created_at" | "updated_at">;
      },
      "created_at" | "updated_at"
    >
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
    data: Omit<
      Arena & {
        address: Omit<Address, "id" | "created_at" | "updated_at">;
      },
      "id" | "created_at" | "updated_at" | "address_id"
    >
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
    const filteredValues = {
      name: values.name,
      address: {
        street: values.street || null,
        number: values.number || null,
        complement: values.complement || null,
        neighborhood: values.neighborhood || null,
        city_state: values.city_state,
        zip_code: values.zip_code || null,
      },
    };
    if (arena) {
      await updateArenaFn({
        ...filteredValues,
        id: arena.id,
        address_id: arena.address.id,
        address: {
          ...filteredValues.address,
          id: arena.address.id,
        },
      });
    } else {
      await createArenaFn(filteredValues);
    }
    query.invalidateQueries({
      queryKey: ["arenas"],
    });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: arena
      ? {
          name: arena.name,
          street: arena.address.street,
          number: arena.address.number,
          neighborhood: arena.address.neighborhood,
          complement: arena.address.complement,
          city_state: arena.address.city_state,
          zip_code: arena.address.zip_code,
        }
      : {},
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
                <Input placeholder="Nome da Arena" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <AddressForm form={form} />
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
