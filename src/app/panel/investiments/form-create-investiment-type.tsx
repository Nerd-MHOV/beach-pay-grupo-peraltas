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
import { UserRole } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createInvestimentType } from "./actions";
import { Button } from "@/components/ui/button";
import MultiSelect from "@/components/multiSelect";

const formSchema = z.object({
  name: z.string().min(2).max(255),
  description: z.string().min(5).max(255),
  canSee: z.array(z.nativeEnum(UserRole)).min(1),
});

const FormCreateInvestimentType = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { mutateAsync: createInvestimentTypeFn } = useMutation({
    mutationKey: ["create-investiment-type"],
    mutationFn: createInvestimentType,
    onError: (error) => {
      console.error(error);
      toast({
        title: "Algo de Errado",
        description:
          "Não foi possivel adicionar o tipo de investimento. Tente novamente.",
        variant: "destructive",
      });
    },
    onSuccess: (_, variables) => {
      queryClient.setQueryData(["investiment-types"], (old: undefined) => [
        ...(old || []),
        variables,
      ]);
      form.reset();
      toast({
        title: "Tipo de Investimento Adicionado",
        description: "O tipo de investimento foi adicionado com sucesso.",
      });
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    createInvestimentTypeFn(values);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      canSee: ["admin"],
    },
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
                  placeholder="Nome do Tipo de Investimento"
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
          <Button type="submit">Adicionar</Button>
        </div>
      </form>
    </Form>
  );
};

export default FormCreateInvestimentType;
