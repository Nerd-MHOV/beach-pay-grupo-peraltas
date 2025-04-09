import { z } from "zod";

export const formSchema = z.object({
  investment_type_id: z.string().min(2).max(255),
  athlete_id: z.string().min(2).max(255),
  value: z.number(),
  date: z.date(),
  description: z.string().min(5).max(255),
  paid: z
    .date()
    .optional()
    .nullable()
    .transform((v) => v ?? null),
  proof: z
    .instanceof(File, {
      message: "O arquivo deve ser uma imagem ou PDF.",
    })
    .refine(
      (file) =>
        ["application/pdf", "image/png", "image/jpeg", "image/jpg"].includes(
          file.type
        ),
      { message: "O arquivo deve ser uma imagem ou PDF." }
    )
    .optional()
    .nullable()
    .transform((v) => v ?? null),
});
