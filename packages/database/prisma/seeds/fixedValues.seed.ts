import { $Enums, PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";

type fixedValuesType = {
  "id": string,
  "name": string,
  "value": number
}[];
export const FixedValuesSeedFn = async (prismaClient: PrismaClient) => {
  const data = readFileSync('prisma/seeds/jsons/fixed_values.json', 'utf8');
  const parsedData = JSON.parse(data) as fixedValuesType;

  for (const value of parsedData) {
    await prismaClient.fixedValues.upsert({
      where: { id: value.id },
      create: value,
      update: {}
    });
  }

  console.log("Seeding fixed values completed.");
};
