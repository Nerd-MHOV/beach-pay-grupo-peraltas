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
import { Address, Athlete, User } from "@prisma/client";
import useCreateAthlete from "./use-create-athlete";
import useUpdateAthlete from "./use-update-athlete";
import { formSchema } from "./schema";
import SimpleInput from "@/components/simple-input";
import CpfInput from "@/components/cpf-input";
import { Combobox } from "@/components/combobox";
import DialogCreateUser from "../../users/dialog-user";
import { Plus } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getTeacherUsers } from "../../users/actions";
import CheckboxInput from "@/components/checkbox-input";
import AddressForm from "@/components/address-form";

const FormCreateAthlete = ({
  athlete,
}: {
  athlete?: Athlete & { user?: User | null; address?: Address | null };
}) => {
  const { createAthlete } = useCreateAthlete();
  const { updateAthlete } = useUpdateAthlete();

  const { data: teacherUsers, refetch: refetchTeacherUsers } = useQuery({
    queryKey: ["teacher_users"],
    queryFn: async () => {
      const data = await getTeacherUsers(athlete?.user?.id);
      return data;
    },
    initialData: [],
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const filteredValues: Omit<
      Athlete & {
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
      pix_key: values.pix_key,
      cpf: values.cpf,
      is_student: values.is_student,
      is_associated: values.is_associated,
      is_teacher: values.is_teacher,
      teacher_user_id: values.teacher_user_id,
      address: {
        street: values.street || null,
        number: values.number || null,
        city_state: values.city_state,
        complement: values.complement || null,
        neighborhood: values.neighborhood || null,
        zip_code: values.zip_code || null,
      },
    };
    if (athlete) {
      await updateAthlete({
        ...filteredValues,
        id: athlete.id,
        address: {
          ...filteredValues.address,
          id: athlete.address_id ?? "",
        },
      });
    } else {
      const created = await createAthlete(filteredValues);
      if (created) {
        form.reset();
      }
    }
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: athlete?.name ?? "",
      responsible: athlete?.responsible ?? "",
      cpf: athlete?.cpf ?? "",
      pix_key: athlete?.pix_key ?? "",
      phone: athlete?.phone ?? "",
      birthday: athlete?.birthday ?? new Date(),
      date_start: athlete?.date_start ?? new Date(),
      is_student: athlete?.is_student ?? false,
      is_associated: athlete?.is_associated ?? false,
      is_teacher: athlete?.is_teacher ?? false,
      teacher_user_id: athlete?.user?.id ?? "",
      street: athlete?.address?.street ?? "",
      number: athlete?.address?.number ?? "",
      complement: athlete?.address?.complement ?? "",
      neighborhood: athlete?.address?.neighborhood ?? "",
      city_state: athlete?.address?.city_state ?? "",
      zip_code: athlete?.address?.zip_code ?? "",
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
        <CpfInput name="cpf" form={form} label="CPF*" placeholder="CPF" />
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
            name="pix_key"
            form={form}
            label="Chave PIX*"
            placeholder="Chave PIX"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
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
        </div>

        <div className="grid grid-cols-3 w-full py-2">
          <CheckboxInput form={form} name="is_student" label="Aluno" />
          <CheckboxInput form={form} name="is_associated" label="Associado" />
          <CheckboxInput form={form} name="is_teacher" label="Professor" />
        </div>
        {form.getValues("is_teacher") && (
          <FormField
            control={form.control}
            name="teacher_user_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usurio no sistem do professor*</FormLabel>
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
