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
import CalendarPickerInput from "@/components/calendarPickerInput";
import { Athlete } from "@prisma/client";
import useCreateAthlete from "./use-create-athlete";
import useUpdateAthlete from "./use-update-athlete";
import { formSchema } from "./schema";

const FormCreateAthlete = ({ athlete }: { athlete?: Athlete }) => {
  const { createAthlete } = useCreateAthlete();
  const { updateAthlete } = useUpdateAthlete();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (athlete) {
      await updateAthlete({ ...values, id: athlete.id });
    } else {
      const created = await createAthlete(values);
      if (created) {
        form.reset({
          name: "",
          phone: "",
          pixKey: "",
          responsible: "",
        });
      }
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
