import { InvestimentType, PrismaClient } from "@prisma/client";

export const InvestimentTypeSeedFn = (prismaClient: PrismaClient) => {
  return InvestimentTypeSeed.map(async (data) => {
    await prismaClient.investimentType
      .upsert({
        where: { name: data.name },
        create: {
          ...data,
        },
        update: {},
      })
      .then((data) => {
        console.log("InvestimentType --> " + data.name + " created");
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

export const InvestimentTypeSeed: Omit<
  InvestimentType,
  "id" | "createdAt" | "updatedAt"
>[] = [
  {
    name: "Incrições",
    description: "Investimento em inscrições de campenatos",
    canSee: ["admin", "user"],
  },
  {
    name: "Gasolina",
    description: "Investimento em gasolina para viagens e campenatos",
    canSee: ["admin", "user"],
  },
  {
    name: "Pedágio",
    description: "Investimento em pedágio para viagens e campenatos",
    canSee: ["admin", "user"],
  },
  {
    name: "Diárias / Alimentação",
    description:
      "Investimento em diárias e alimentação para viagens e campenatos",
    canSee: ["admin", "user"],
  },
  {
    name: "Premiações",
    description: "Investimento em premiações",
    canSee: ["admin"],
  },
  {
    name: "Aulas",
    description: "Investimento em aulas para atletas",
    canSee: ["admin"],
  },
  {
    name: "Camisetas",
    description: "Investimento em camisetas para atletas",
    canSee: ["admin"],
  },
  {
    name: "Uniformes",
    description: "Investimento em uniformes para atletas",
    canSee: ["admin"],
  },
  {
    name: "Equipamentos",
    description: "Investimento em equipamentos para atletas",
    canSee: ["admin"],
  },
  {
    name: "Nutricionista",
    description: "Investimento em nutricionista para atletas",
    canSee: ["admin"],
  },
  {
    name: "Ajuda de Custo",
    description: "Investimento em ajuda de custo para atletas",
    canSee: ["admin"],
  },
];
