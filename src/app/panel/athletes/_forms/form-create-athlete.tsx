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
import { createAthlete, updateAthlete } from "../actions";
import { useToast } from "@/hooks/use-toast";
import CalendarPickerInput from "@/components/calendarPickerInput";
import { Athlete } from "@prisma/client";

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

const FormCreateAthlete = ({ athlete }: { athlete?: Athlete }) => {
  const { toast } = useToast();
  const createAthleteFn = async (
    data: Omit<Athlete, "id" | "createdAt" | "updatedAt">
  ) => {
    try {
      const { name } = await createAthlete(data);
      toast({
        title: `Atleta ${name} Adicionado`,
        description: "O atleta foi adicionado com sucesso.",
      });
      form.reset({
        name: "",
        phone: "",
        pixKey: "",
        responsible: "",
      });
    } catch {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel adicionar o atleta. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const updateAthleteFn = async (
    data: Omit<Athlete, "createdAt" | "updatedAt">
  ) => {
    try {
      const updatedAthlete = await updateAthlete(data);
      toast({
        title: `Atleta ${updatedAthlete.name} Atualizado`,
        description: "O atleta foi atualizado com sucesso.",
      });
    } catch {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel atualizar o atleta. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  // 1.define form.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (athlete) {
      await updateAthleteFn({ ...values, id: athlete.id });
    } else {
      await createAthleteFn(values);
    }
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: athlete?.name ?? "",
      phone: athlete?.phone ?? "",
      responsible: athlete?.responsible ?? "",
      birthday: athlete?.birthday ?? new Date(),
      startDate: athlete?.startDate ?? new Date(),
      pixKey: athlete?.pixKey ?? "",
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
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

        <div className="flex w-full justify-end pt-5">
          <Button
            isLoading={form.formState.isSubmitting}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {!athlete ? "Cadastrar" : "Atualizar"} Atleta
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormCreateAthlete;
