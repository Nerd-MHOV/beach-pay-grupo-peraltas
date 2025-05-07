import { cpfValidator } from "@/lib/utils";
import { Tier } from "@prisma/client";
import { isDate } from "date-fns";
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
      .string()
      .regex(/^[0-9]*$/, {
        message: "O CPF deve conter apenas números.",
      })
      .refine((val) => !val || val.length === 11, {
        message: "O CPF deve ter 11 dígitos.",
      })
      .optional()
      .nullable(),
    tier: z.nativeEnum(Tier, {
      required_error: "Selecione o nível",
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
    email: z.string().email({
      message: "Email inválido.",
    }).optional().nullable(),
    responsible: z
      .string()
      .max(255)
      .optional()
      .nullable()
      .transform((v) => v ?? ""),
    birthday: z.date(),


    date_start: z.date().nullable(),
    pix_key: z.string().nullable(),
    is_associated: z.boolean().optional().transform((v) => v ?? false),

    is_student: z.boolean().optional().transform((v) => v ?? false),
    is_teacher: z.boolean().optional().transform((v) => v ?? false),
    is_athlete: z.boolean().optional().transform((v) => v ?? false),
    teacher_user_id: z.string().nullable(),
    street: z.string().optional().nullable(),
    number: z.string().optional().nullable(),
    complement: z.string().optional().nullable(),
    neighborhood: z.string().optional().nullable(),
    city_state: z.string(),
    zip_code: z
      .preprocess(
        (val) => (typeof val === "string" ? val.replace(/-/g, "") : val),
        z
          .string()
          .regex(/^[0-9]*$/, {
            message: "O CEP deve conter apenas números.",
          })
          .refine((val) => !val || val.length === 8, {
            message: "O CEP deve ter 8 dígitos.",
          })
          .optional()
      )
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

    if (data.is_associated && !data.date_start) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "A data de início é obrigatória para associados.",
        path: ["date_start"],
      });
    }

    if (data.is_athlete && !data.pix_key) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "A chave PIX é obrigatória para atletas.",
        path: ["pix_key"],
      });
    }
  });
