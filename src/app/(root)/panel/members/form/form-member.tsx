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
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import CalendarPickerInput from "@/components/calendarPickerInput";
import { Address, Member, Tier, User } from "@prisma/client";
import useCreateMember from "./use-create-member";
import useUpdateMember from "./use-update-member";
import { formSchema } from "./schema";
import SimpleInput from "@/components/simple-input";
import CpfInput from "@/components/cpf-input";
import { Combobox } from "@/components/combobox";
import DialogCreateUser from "../../users/dialog-user";
import { Plus } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTeacherUsers } from "../../users/actions";
import CheckboxInput from "@/components/checkbox-input";
import AddressForm from "@/components/address-form";
import DialogDeleteMember from "../[id]/dialog-delete-member";

const FormMember = ({
  member,
}: {
  member?: Member & { user?: User | null; address?: Address | null };
}) => {
  const { createMember } = useCreateMember();
  const { updateMember } = useUpdateMember();
  const query = useQueryClient();

  const { data: teacherUsers, refetch: refetchTeacherUsers } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = await getTeacherUsers(member?.user?.id);
      return data;
    },
    initialData: [],
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const filteredValues: Omit<
      Member & {
        address: Omit<Address, "id" | "created_at" | "updated_at">;
        teacher_user_id?: string | null;
      },
      "id" | "created_at" | "updated_at" | "address_id"
    > = {
      name: values.name,
      phone: values.phone,
      responsible: values.responsible,
      birthday: values.birthday,
      date_start: values.date_start,
      email: values.email || null,
      pix_key: values.pix_key,
      cpf: values.cpf || null,
      is_student: values.is_student,
      is_associated: values.is_associated,
      is_teacher: values.is_teacher,
      is_athlete: values.is_athlete,
      teacher_user_id: values.teacher_user_id,
      tier: values.tier,
      address: {
        street: values.street || null,
        number: values.number || null,
        city_state: values.city_state,
        complement: values.complement || null,
        neighborhood: values.neighborhood || null,
        zip_code: values.zip_code || null,
      },
    };
    if (member) {
      await updateMember({
        ...filteredValues,
        id: member.id,
        address: {
          ...filteredValues.address,
          id: member.address_id ?? "",
        },
      });
    } else {
      const created = await createMember(filteredValues);
      if (created) {
        form.reset();
      }
    }
    query.invalidateQueries({
      queryKey: ["members"],
    });
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: member?.name ?? "",
      responsible: member?.responsible ?? "",
      cpf: member?.cpf || null,
      pix_key: member?.pix_key ?? "",
      phone: member?.phone ?? "",
      birthday: member?.birthday ? new Date(member.birthday) : new Date(),
      date_start: member?.date_start ? new Date(member.date_start) : undefined,
      email: member?.user?.email ?? undefined,
      is_student: member?.is_student ?? false,
      is_associated: member?.is_associated ?? false,
      is_teacher: member?.is_teacher ?? false,
      is_athlete: member?.is_athlete ?? false,
      teacher_user_id: member?.user?.id ?? "",
      street: member?.address?.street ?? "",
      number: member?.address?.number ?? "",
      complement: member?.address?.complement ?? "",
      neighborhood: member?.address?.neighborhood ?? "",
      city_state: member?.address?.city_state ?? "",
      zip_code: member?.address?.zip_code ?? "",
      tier: member?.tier || undefined,
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
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-2">
          <SimpleInput
            name="name"
            form={form}
            label="Nome*"
            placeholder="Nome Completo"
          />
          <SimpleInput
            name="responsible"
            form={form}
            label="Nome do Responsável"
            placeholder="Nome Completo do Responsável"
          />
        </div>
        <div className="grid md:grid-cols-10 grid-cols-2 gap-2">
          <div className="md:col-span-3 col-span-2">
            <CpfInput name="cpf" form={form} label="CPF" placeholder="CPF" />
          </div>
          <div className="md:col-span-4">
            <CalendarPickerInput
              form={form}
              name="birthday"
              label="Data de Nascimento*"
            />
          </div>
          <div className="md:col-span-3">
            <FormField
              control={form.control}
              name="tier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Classificação*</FormLabel>
                  <FormControl>
                    <Combobox
                      placeholder="Selecione"
                      items={Object.values(Tier).map((tier) => ({
                        label: tier,
                        value: tier,
                      }))}
                      selected={field.value}
                      onSelect={(value) => {
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-2">
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
          <SimpleInput
            name="email"
            form={form}
            label="Email"
            placeholder="Email"
          />
        </div>

        <div className="grid grid-cols-4 w-full py-2">
          <CheckboxInput form={form} name="is_athlete" label="Atleta" />
          <CheckboxInput form={form} name="is_associated" label="Associado" />
          <CheckboxInput form={form} name="is_student" label="Aluno" />
          <CheckboxInput form={form} name="is_teacher" label="Professor" />
        </div>

        {form.getValues("is_athlete") && (
          <SimpleInput
            name="pix_key"
            form={form}
            label="Chave PIX do Atleta*"
            placeholder="Chave PIX"
          />
        )}
        {form.getValues("is_associated") && (
          <CalendarPickerInput
            form={form}
            name="date_start"
            label="Data de associação*"
          />
        )}
        {form.getValues("is_teacher") && (
          <FormField
            control={form.control}
            name="teacher_user_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuário do professor no sistema*</FormLabel>
                <FormControl>
                  <Combobox
                    placeholder="Selecione um usuário"
                    items={teacherUsers.map((tuser) => ({
                      label: tuser.name,
                      value: tuser.id,
                    }))}
                    onSelect={(value) => field.onChange(value)}
                    selected={field.value}
                    above={
                      <DialogCreateUser
                        permission={"teacher"}
                        trigger={
                          <Button size="sm" variant="ghost">
                            <Plus /> Novo Usuario do sistema
                          </Button>
                        }
                        onCreate={(newUser) => {
                          refetchTeacherUsers();
                          field.onChange(newUser.id);
                        }}
                      />
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <AddressForm form={form} />

        <div className="flex w-full gap-2 items-center justify-end pt-5">
          {member && <DialogDeleteMember member={member} />}

          <Button
            isLoading={form.formState.isSubmitting}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {!member ? "Cadastrar" : "Atualizar"} Membro
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormMember;
