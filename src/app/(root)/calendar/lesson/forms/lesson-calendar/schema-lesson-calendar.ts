import { z } from "zod";
import { Tier } from "@prisma/client";

export const schema = z.object({
  teacher_id: z.string({
    message: "Esta declarando para qual professor?",
  }),
  date: z.object({
    from: z.date({
      required_error: "Data inicial é obrigatória",
    }),
    to: z.date({
      required_error: "Data final é obrigatória",
    }),
  }),
  court_id: z.string(),
  tier: z.nativeEnum(Tier, {
    required_error: "Selecione o nível",
  }),
  attendance: z.array(
    z.object({
      id: z.string(),
      replacement: z
        .string()
        .optional()
        .nullable()
        .transform((v) => v ?? null),
    })
  ),
});