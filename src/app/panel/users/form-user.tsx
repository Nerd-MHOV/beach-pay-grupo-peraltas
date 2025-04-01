"use client";
import React from "react";
import { z } from "zod";
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
import { User } from "@prisma/client";
import { createUser, updateUser } from "./actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const getFormSchema = (isUpdate: boolean) =>
  z
    .object({
      name: z
        .string({
          message: "O nome é obrigatório e deve ter no mínimo 2 caracteres.",
        })
        .min(2)
        .max(255),
      email: z.string().email("Formato de e-mail inválido"),
      user: z.string().min(3),
      // se for update, senha é opcional; senão, obrigatória com no mínimo 6 caracteres.
      passwd: isUpdate
        ? z
            .string()
            .min(6, {
              message: "A senha deve ter no mínimo 6 caracteres.",
            })
            .optional()
        : z.string().min(6, {
            message: "A senha deve ter no mínimo 6 caracteres.",
          }),
      confirmPasswd: isUpdate ? z.string().optional() : z.string(),
      role: z.enum(["admin", "user"], {
        errorMap: () => ({ message: "Selecione um nível de acesso." }),
      }),
    })
    .superRefine(({ confirmPasswd, passwd }, ctx) => {
      if (confirmPasswd !== passwd) {
        ctx.addIssue({
          code: "custom",
          message: "As senhas não conferem.",
          path: ["confirmPasswd"],
        });
      }
    });

const FormUser = ({ user }: { user?: Omit<User, "passwd"> }) => {
  const { toast } = useToast();
  const formSchema = getFormSchema(!!user);
  const updateUserFn = async (
    data: Omit<User, "createdAt" | "updatedAt" | "password">
  ) => {
    try {
      const updatedUser = await updateUser(data);
      toast({
        title: `Usuario ${updatedUser.user} Atualizado`,
        description: "O Usuário foi atualizado com sucesso.",
      });
    } catch {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel atualizar o usuário. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const createUserFn = async (
    data: Omit<User, "id" | "createdAt" | "updatedAt">
  ) => {
    try {
      const newUser = await createUser(data);
      form.reset();
      toast({
        title: `Usuário ${newUser.user} Criado`,
        description: "O Usuário foi adicionado com sucesso.",
      });
    } catch {
      toast({
        title: "Algo de Errado",
        description: "Não foi possivel adicionar o usuário. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { confirmPasswd: _, ...data } = {
      ...values,
      passwd: values.passwd || "",
    };
    if (user) {
      await updateUserFn({ ...data, id: user.id });
    } else {
      await createUserFn(data);
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: user || {
      role: "user",
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail*</FormLabel>
              <FormControl>
                <Input placeholder="E-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="user"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User*</FormLabel>
              <FormControl>
                <Input placeholder="User" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwd"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha*</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPasswd"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirme a Senha*</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Permissão*</FormLabel>
              <FormControl>
                <Select
                  defaultValue={field.value}
                  value={field.value}
                  onValueChange={field.onChange}
                  // disabled={true}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o nível de acesso" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrador</SelectItem>
                    <SelectItem value="user">Usuário</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Input type="hidden" {...form.register("role")} />
        <div className="flex w-full justify-end mt-5">
          <Button
            isLoading={form.formState.isSubmitting}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {user ? "Atualizar" : "Adicionar"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormUser;
