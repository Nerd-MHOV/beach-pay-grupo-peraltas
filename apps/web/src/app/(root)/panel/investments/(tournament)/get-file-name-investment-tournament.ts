import { format } from "date-fns";
import { formSchemaInvestmentTournament } from "./schema-investment-tournament";
import { z } from "zod";

export const getFileName = (
  values: z.infer<typeof formSchemaInvestmentTournament>
) => {
  if (!values.proof) return "";
  const fileExtension = values.proof.name.split(".").pop();
  return `investments-${values.athlete_id}-group-${format(
    new Date(),
    "dd-mm-yy"
  )}.${fileExtension}`;
};
