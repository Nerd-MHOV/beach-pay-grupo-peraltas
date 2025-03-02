import { format } from "date-fns";
import { formSchema } from "./schema";
import { z } from "zod";

export const getFileName = (values: z.infer<typeof formSchema>) => {
  if (!values.proof) return "";
  const fileExtension = values.proof.name.split(".").pop();
  return `investments-${values.athleteId}-${values.investmentTypeId}-${format(
    new Date(),
    "dd-mm-yy"
  )}.${fileExtension}`;
};
