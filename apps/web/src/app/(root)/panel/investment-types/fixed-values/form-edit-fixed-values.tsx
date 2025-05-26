"use client";
import MoneyInput from "@/components/money-Input";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { updateFixedValues } from "./actions";

const formSchema = z.object({
  km: z.number().min(0),
  association: z.number().min(0),
  association_student: z.number().min(0),
  lesson: z.number().min(0),
  lesson_associated: z.number().min(0),
});

export type FixedValuesForm = z.infer<typeof formSchema>;
const FormEditFixedValues = ({
  fixedValues,
}: {
  fixedValues: FixedValuesForm;
}) => {
  const { toast } = useToast();
  const onSubmit = async (data: FixedValuesForm) => {
    try {
      await updateFixedValues(data);
      toast({
        title: "Valores fixos atualizados",
        description: "Os valores fixos foram atualizados com sucesso.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao atualizar valores fixos",
        description: "Ocorreu um erro ao atualizar os valores fixos.",
      });
    }
  };

  const form = useForm<FixedValuesForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      km: fixedValues.km,
      association: fixedValues.association,
      association_student: fixedValues.association_student,
      lesson: fixedValues.lesson,
      lesson_associated: fixedValues.lesson_associated,
    },
  });
  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
        <MoneyInput
          label="R$ por Km ( Combustível )"
          placeholder="0,00"
          form={form}
          name="km"
        />

        <Separator className="bg-primary" />
        <h2 className="text-lg font-semibold">Valores de Associação</h2>
        <MoneyInput
          label="Valor da Associação"
          placeholder="0,00"
          form={form}
          name="association"
        />
        <MoneyInput
          label="Valor da Associação (Aluno)"
          placeholder="0,00"
          form={form}
          name="association_student"
        />
        <Separator className="bg-primary" />
        <h2 className="text-lg font-semibold">Valores por Aula</h2>

        <MoneyInput
          label="Valor da Aula"
          placeholder="0,00"
          form={form}
          name="lesson"
        />
        <MoneyInput
          label="Valor da Aula (Associado)"
          placeholder="0,00"
          form={form}
          name="lesson_associated"
        />

        <div className="flex w-full justify-end mt-5 gap-2">
          <Button
            isLoading={form.formState.isSubmitting}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Atualizar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormEditFixedValues;
