import { z } from "zod";

export const formSchemaInvestmentTournament = z.object({
  athlete_id: z.string().min(2).max(255),
  tournament_id: z
    .string()
    .min(2)
    .max(255),
  pair_id: z
    .string()
    .min(2)
    .max(255)
    .optional()
    .nullable()
    .transform((v) => v ?? null),
  investments: z.array(z.string().min(2).max(255)),
  podium: z
    .string()
    .min(2)
    .max(255),
  description: z
    .string()
    .min(0)
    .max(255)
    .optional()
    .nullable()
    .transform((v) => v ?? ""),
  pair_amount: z
    .number(),
  km: z
    .number()
    .optional()
    .nullable()
    .transform((v) => v ?? NaN),
  paid: z
    .date()
    .optional()
    .nullable()
    .transform((v) => v ?? null),
  total: z
    .number()
    .optional()
    .nullable()
    .transform((v) => v ?? 0),
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
