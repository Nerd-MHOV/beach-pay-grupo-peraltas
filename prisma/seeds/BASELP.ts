import { Member, Prisma, PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";
import { parse } from "csv-parse/sync";

type baselp = {
  "NOME"?: string;
  "EMAIL"?: string;
  "TELEFONE"?: string;
  "DATA NASCIMENTO"?: string;
  "RESPONSÁVEL"?: string;
  "RESPONSÁVEL POR"?: string;
  "ALUNO"?: string;
  "LOCATARIO"?: string;
  "CLUBISTA"?: string;
  "RANKEADO"?: string;
  "COMPETIDOR"?: string;
  "CPF"?: string;
  "CEP"?: string;
  "ENDEREÇO"?: string;
  "NÚMERO"?: string;
  "COMPLEMENTO"?: string;
  "BAIRRO"?: string;
  "CIDADE"?: string;
  "ESTADO"?: string;
  "DATA CRIAÇÃO"?: string;
}[]

export const BaselpSeedFn = async (prismaClient: PrismaClient) => {
  const data = readFileSync('prisma/seeds/BASE DE MEMBROS LP - Membros.csv', 'utf8');
  const parsedData = parse(data, {
    columns: true,
    skip_empty_lines: true
  }) as baselp;


  const formattedData: Prisma.MemberCreateInput[] = parsedData.map((item) => ({
    name: item["NOME"] ?? "",
    birthday: item["DATA NASCIMENTO"] ? new Date(item["DATA NASCIMENTO"]) : new Date(),
    phone: "+55" + (item["TELEFONE"] ?? ""),
    responsible: item["RESPONSÁVEL"] ?? "",
    date_start: item["DATA CRIAÇÃO"] ? new Date(item["DATA CRIAÇÃO"]) : "",
    cpf: item["CPF"] ?? "",
    email: item["EMAIL"] ?? "",
    is_student: (item["ALUNO"] === "ATIVO"),
    is_associated: (item["CLUBISTA"] === "ATIVO"),
  }));
  for (const item of formattedData) {
    await prismaClient.member.upsert({
      where: { name: item.name },
      create: item,
      update: {}
    });
  }

  console.log("Seeding courts completed.");
};