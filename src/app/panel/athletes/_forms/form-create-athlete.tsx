"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAthlete } from "../actions";
import { useToast } from "@/hooks/use-toast";
import CalendarPickerInput from "@/components/calendarPickerInput";

const formSchema = z.object({
  name: z
    .string({
      message: "O nome é obrigatório e deve ter no mínimo 2 caracteres.",
    })
    .min(2)
    .max(255),
  phone: z
    .string({
      message: "O telefone é obrigatório (ddd) 99999-9999.",
    })
    .min(13, {
      message: "Número invalido (ddd) 99999-9999.",
    })
    .max(14, {
      message: "Número invalido (ddd) 99999-9999.",
    }),
  responsible: z
    .string()
    .max(255)
    .optional()
    .nullable()
    .transform((v) => v ?? ""),
  birthday: z.date(),
  startDate: z.date(),
  pixKey: z
    .string({
      message: "Informe a chave PIX",
    })
    .min(2)
    .max(255),
});

const FormCreateAthlete = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { mutateAsync: createAthleteFn } = useMutation({
    mutationKey: ["create-athhlete"],
    mutationFn: createAthlete,
    onError: () => {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel adicionar o atleta. Tente novamente.",
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["athletes"], (old: undefined) => [
        ...(old || []),
        data,
      ]);
      form.reset();
      toast({
        title: "Atleta Adicionado",
        description: "O atleta foi adicionado com sucesso.",
      });
    },
  });

  // 1.define form.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    createAthleteFn(values);
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
          name="responsible"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Responsável</FormLabel>
              <FormControl>
                <Input placeholder="Nome Completo do Responsável" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Celular*</FormLabel>
              <FormControl>
                <PhoneInput defaultCountry="BR" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pixKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chave PIX*</FormLabel>
              <FormControl>
                <Input placeholder="Chave PIX..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <CalendarPickerInput
          form={form}
          name="birthday"
          label="Data de Nascimento*"
        />

        <CalendarPickerInput
          form={form}
          name="startDate"
          label="Data de Início*"
        />

        <div className="flex w-full justify-end mt-5">
          <Button type="submit" className="">
            Cadastrar Atleta
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormCreateAthlete;
