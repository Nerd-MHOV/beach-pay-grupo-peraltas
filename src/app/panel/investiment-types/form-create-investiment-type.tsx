"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { InvestimentType, UserRole } from "@prisma/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createInvestimentType, updateInvestimentType } from "./actions";
import { Button } from "@/components/ui/button";
import MultiSelect from "@/components/multiSelect";

const formSchema = z.object({
  name: z.string().min(2).max(255),
  description: z.string().min(5).max(255),
  canSee: z.array(z.nativeEnum(UserRole)).min(1),
});

const FormCreateInvestimentType = ({
  investimentType,
}: {
  investimentType?: InvestimentType;
}) => {
  const { toast } = useToast();

  const createInvestimentTypeFn = async (
    data: Omit<InvestimentType, "id" | "createdAt" | "updatedAt">
  ) => {
    try {
      const created = await createInvestimentType(data);
      form.reset({
        name: "",
        description: "",
        canSee: ["admin"],
      });
      toast({
        title: `${created.name} Adicionado`,
        description: "O tipo de investimento foi adicionado com sucesso.",
      });
    } catch {
      toast({
        title: "Algo de Errado",
        description:
          "Não foi possivel adicionar o tipo de investimento. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const updateInvestimentTypeFn = async (
    data: Omit<InvestimentType, "createdAt" | "updatedAt">
  ) => {
    try {
      const updated = await updateInvestimentType(data);
      toast({
        title: `${updated.name} Atualizado`,
        description: "O tipo de investimento foi atualizado com sucesso.",
      });
    } catch {
      toast({
        title: "Algo de Errado",
        description:
          "Não foi possivel atualizar o tipo de investimento. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (investimentType) {
      updateInvestimentTypeFn({ ...values, id: investimentType.id });
      return;
    }
    createInvestimentTypeFn(values);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      canSee: ["admin"],
      ...(investimentType
        ? {
            name: investimentType.name,
            description: investimentType.description,
            canSee: investimentType.canSee,
          }
        : {}),
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
                <Input placeholder="Nome do Tipo de Investimento" {...field} />
              </FormControl>
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
                <Textarea
                  placeholder="Descrição do Tipo de Investimento"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="canSee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pode Ver*</FormLabel>
              <FormControl>
                <MultiSelect
                  placeholder="Permissões"
                  {...field}
                  selected={
                    field.value?.map((val) => ({
                      label: val,
                      value: val,
                    })) || []
                  }
                  onSelect={(value) => {
                    field.onChange(value.map((val) => val.value));
                  }}
                  options={Object.values(UserRole).map((role) => ({
                    label: role,
                    value: role,
                  }))}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex w-full justify-end mt-5">
          <Button
            isLoading={form.formState.isSubmitting}
            type="button"
            onClick={(e) => e.stopPropagation()}
          >
            {investimentType ? "Atualizar" : "Adicionar"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormCreateInvestimentType;
