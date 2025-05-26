import { ReasonsToNotAttend } from "@prisma/client";

export const reasonOptions: {
  label: string;
  value: ReasonsToNotAttend;
}[] = [
  { label: "Condições Climática", value: "climatic" },
  { label: "Problemas de Saúde", value: "health" },
  { label: "Aula Cancelada", value: "cancelled" },
  { label: "Sem Professor", value: "no_teacher" },
  { label: "Sem Justificativa", value: "no_justification" },
] as const;