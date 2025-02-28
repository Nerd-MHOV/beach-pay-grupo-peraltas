import { z } from "zod";

export const formSchemaGroupInvestmentAthlete = z.object({
  athleteId: z.string().min(2).max(255),
  tournamentId: z
    .string()
    .min(2)
    .max(255)
    .optional()
    .nullable()
    .transform((v) => v ?? null),
  pairId: z
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
    .max(255)
    .optional()
    .nullable()
    .transform((v) => v ?? ""),
  description: z
    .string()
    .min(0)
    .max(255)
    .optional()
    .nullable()
    .transform((v) => v ?? ""),
  pairAmount: z
    .number()
    .optional()
    .nullable()
    .transform((v) => v ?? NaN),
  km: z
    .number()
    .optional()
    .nullable()
    .transform((v) => v ?? NaN),
  km_racional: z
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
