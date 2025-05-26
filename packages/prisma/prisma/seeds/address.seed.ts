import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";


type AddressSeed = {
  id: string;
  street: string | null;
  number: string | null;
  complement: string | null;
  neighborhood: string | null;
  zip_code: string | null;
  city_state: string;
  updated_at: string;
  created_at: string;
};

type addressSeedType = AddressSeed[];
export const AddressSeedFn = async (prismaClient: PrismaClient) => {
  const data = readFileSync('prisma/seeds/jsons/address.json', 'utf8');
  const parsedData = JSON.parse(data) as addressSeedType;


  for (const address of parsedData) {
    await prismaClient.address.upsert({
      where: { id: address.id },
      create: {
        ...address,
        // added missing required fields with default values
        created_at: new Date(address.created_at),
        updated_at: new Date(address.updated_at),
      },
      update: {}
    });
  }

  console.log("Seeding address completed.");
};
