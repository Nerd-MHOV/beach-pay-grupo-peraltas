import { format } from "date-fns";
import { formSchemaGroupInvestimentAthlete } from "./schema-group-investiment-athlete";
import { z } from "zod";

export const getFileName = (
  values: z.infer<typeof formSchemaGroupInvestimentAthlete>
) => {
  if (!values.proof) return "";
  const fileExtension = values.proof.name.split(".").pop();
  return `investments-${values.athleteId}-group-${format(
    new Date(),
    "dd-mm-yy"
  )}.${fileExtension}`;
};
