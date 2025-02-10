"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { PhoneInput } from "@/components/ui/phone-input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAthlete } from "./actions";
import { useToast } from "@/hooks/use-toast";

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
    onSuccess: (_, variables) => {
      queryClient.setQueryData(["athletes"], (old: undefined) => [
        ...(old || []),
        variables,
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

const CalendarPickerInput = ({
  form,
  name,
  label,
}: {
  form: ReturnType<typeof useForm<z.infer<typeof formSchema>>>;
  name: keyof z.infer<typeof formSchema>;
  label: string;
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
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
                    format(field.value, "PPP", { locale: ptBR })
                  ) : (
                    <span>Selecione uma Data</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value as Date}
                onSelect={(value) => {
                  field.onChange(value);
                  setIsCalendarOpen(false);
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
  );
};

export default FormCreateAthlete;
