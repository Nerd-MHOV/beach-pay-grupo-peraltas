import { $Enums, PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";

type Member = {
  id: string;
  name: string;
  birthday: string;
  phone: string;
  responsible: string;
  cpf: string;
  created_at: string;
  updated_at: string;
  address_id: string;
  date_start: string;
  is_associated: boolean;
  is_student: boolean;
  is_teacher: boolean;
  pix_key: string;
  tier: $Enums.Tier;
};

type memberSeedType = Member[];
export const MemberSeedFn = async (prismaClient: PrismaClient) => {
  const data = readFileSync('prisma/seeds/jsons/athlete.json', 'utf8');
  const parsedData = JSON.parse(data) as memberSeedType;


  for (const member of parsedData) {
    await prismaClient.member.upsert({
      where: { id: member.id },
      create: {
        ...member,
        // added missing required fields with default values
        date_start: new Date(member.created_at) || null,
        birthday: new Date(member.created_at),
        created_at: new Date(member.created_at),
        updated_at: new Date(member.updated_at),
      },
      update: {}
    });
  }

  console.log("Seeding members completed.");
};
