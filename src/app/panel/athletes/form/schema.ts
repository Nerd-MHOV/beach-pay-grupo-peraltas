import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string({
      message: "O nome é obrigatório e deve ter no mínimo 2 caracteres.",
    })
    .min(2)
    .max(255),
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
  startDate: z.date(),
  pixKey: z
    .string({
      message: "Informe a chave PIX",
    })
    .min(2)
    .max(255),
});
