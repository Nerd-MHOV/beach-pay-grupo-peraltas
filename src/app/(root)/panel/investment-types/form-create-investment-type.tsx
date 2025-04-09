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
import { InvestmentType, UserRole } from "@prisma/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createInvestmentType, updateInvestmentType } from "./actions";
import { Button } from "@/components/ui/button";
import MultiSelect from "@/components/multiSelect";
import roleOptions from "@/components/role-options";
import DialogDeleteInvestmentType from "./dialog-delete-investment-type";

const formSchema = z.object({
  name: z.string().min(2).max(255),
  description: z.string().min(5).max(255),
  can_see: z.array(z.nativeEnum(UserRole)).min(1),
});

const FormCreateInvestmentType = ({
  investmentType,
  onCreate,
}: {
  investmentType?: InvestmentType;
  onCreate?: (investmentType: InvestmentType) => void;
}) => {
  const { toast } = useToast();
  // const queryClient = useQueryClient();

  const createInvestmentTypeFn = async (
    data: Omit<InvestmentType, "id" | "created_at" | "updated_at">
  ) => {
    try {
      const created = await createInvestmentType(data);
      // queryClient.invalidateQueries({ queryKey: ["investmentTypes"] });
      // queryClient.setQueryData(["investmentTypes"], (old: InvestmentType[]) => [
      //   ...old,
      //   created,
      // ]);
      form.reset({
        name: "",
        description: "",
        can_see: ["admin"],
      });
      toast({
        title: `${created.name} Adicionado`,
        description: "O tipo de investimento foi adicionado com sucesso.",
      });
      onCreate?.(created);
    } catch {
      toast({
        title: "Algo de Errado",
        description:
          "Não foi possivel adicionar o tipo de investimento. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const updateInvestmentTypeFn = async (
    data: Omit<InvestmentType, "created_at" | "updated_at">
  ) => {
    try {
      const updated = await updateInvestmentType(data);
      // queryClient.setQueryData(["investmentTypes"], (old: InvestmentType[]) => [
      //   ...old.map((type) => (type.id === updated.id ? updated : type)),
      // ]);
      toast({
        title: `${updated.name} Atualizado`,
        description: "O tipo de investimento foi atualizado com sucesso.",
      });
    } catch (error) {
      console.error(error);

      toast({
        title: "Algo de Errado",
        description:
          "Não foi possivel atualizar o tipo de investimento. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (investmentType) {
      updateInvestmentTypeFn({ ...values, id: investmentType.id });
      return;
    }
    createInvestmentTypeFn(values);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      can_see: ["admin"],
      ...(investmentType
        ? {
            name: investmentType.name,
            description: investmentType.description,
            can_see: investmentType.can_see,
          }
        : {}),
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
          name="can_see"
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
                  options={[...roleOptions]}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex w-full justify-end mt-5 gap-2">
          {investmentType && (
            <DialogDeleteInvestmentType investmentType={investmentType} />
          )}
          <Button
            isLoading={form.formState.isSubmitting}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {investmentType ? "Atualizar" : "Adicionar"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormCreateInvestmentType;
