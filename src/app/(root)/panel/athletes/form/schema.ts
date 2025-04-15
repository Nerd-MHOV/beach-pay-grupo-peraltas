import { cpfValidator } from "@/lib/utils";
import { z } from "zod";

export const formSchema = z
  .object({
    name: z
      .string({
        message:
          "O nome é obrigatório e deve ter no mínimo 2 caracteres.",
      })
      .min(2, {
        message:
          "O nome é obrigatório e deve ter no mínimo 2 caracteres.",
      }),
    cpf: z
      .string({
        message: "O CPF é obrigatório e deve ter 11 dígitos.",
      })
      .length(11, {
        message: "O CPF deve ter 11 dígitos.",
      })
      .regex(/^\d+$/, {
        message: "O CPF deve conter apenas números.",
      })
      .refine((value) => cpfValidator(value), {
        message: "O CPF é inválido.",
      }),
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
    date_start: z.date(),
    pix_key: z
      .string({
        message: "Informe a chave PIX",
      })
      .min(2)
      .max(255),
    is_associated: z
      .boolean()
      .optional()
      .transform((v) => v ?? false),
    is_student: z
      .boolean()
      .optional()
      .transform((v) => v ?? false),
    is_teacher: z
      .boolean()
      .optional()
      .transform((v) => v ?? false),
    // Novo campo para selecionar usuário do sistema, obrigatório se is_teacher for true
    teacher_user_id: z.string().nullable(),
    street: z.string().optional().nullable(),
    number: z.string().optional().nullable(),
    complement: z.string().optional().nullable(),
    neighborhood: z.string().optional().nullable(),
    city_state: z.string(),
    zip_code: z.preprocess(
      (val) =>
        typeof val === "string"
          ? val.replace(/-/g, "")
          : val,
      z.string({
        message: "O CEP é obrigatório e deve ter 8 dígitos.",
      })
        .regex(/^\d+$/, {
          message: "O CEP deve conter apenas números.",
        })
        .length(8, {
          message: "O CEP deve ter 8 dígitos.",
        })
    )
      .optional()
      .nullable(),
  })
  .superRefine((data, ctx) => {
    if (data.is_teacher && !data.teacher_user_id) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Selecione um usuário do sistema se for professor.",
        path: ["teacher_user_id"],
      });
    }
  });
