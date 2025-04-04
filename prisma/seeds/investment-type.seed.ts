import { InvestmentType, PrismaClient } from "@prisma/client";

export const InvestmentTypeSeedFn = (prismaClient: PrismaClient) => {
  return InvestmentTypeSeed.map(async (data) => {
    await prismaClient.investmentType
      .upsert({
        where: { name: data.name },
        create: {
          ...data,
        },
        update: {},
      })
      .then((data) => {
        console.log("InvestmentType --> " + data.name + " created");
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

export const InvestmentTypeSeed: Omit<
  InvestmentType,
  "created_at" | "updated_at"
>[] = [
    {
      id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
      name: "Incrição",
      description: "Investimento em inscrições de campenatos",
      can_see: ["admin", "operational"],
    },
    {
      id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
      name: "Combústivel",
      description: "Investimento em combústivel para viagens e campenatos",
      can_see: ["admin", "operational"],
    },
    {
      id: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
      name: "Pedágio",
      description: "Investimento em pedágio para viagens e campenatos",
      can_see: ["admin", "operational"],
    },
    {
      id: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
      name: "Diárias / Alimentação",
      description:
        "Investimento em diárias e alimentação para viagens e campenatos",
      can_see: ["admin", "operational"],
    },
    {
      id: "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
      name: "Premiação",
      description: "Investimento em premiações",
      can_see: ["admin"],
    },
    {
      id: "6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u",
      name: "Aula",
      description: "Investimento em aulas para atletas",
      can_see: ["admin"],
    },
    {
      id: "7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v",
      name: "Camiseta",
      description: "Investimento em camisetas para atletas",
      can_see: ["admin"],
    },
    {
      id: "8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w",
      name: "Uniforme",
      description: "Investimento em uniformes para atletas",
      can_see: ["admin"],
    },
    {
      id: "9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w4x",
      name: "Equipamento",
      description: "Investimento em equipamentos para atletas",
      can_see: ["admin"],
    },
    {
      id: "0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x5y",
      name: "Nutricionista",
      description: "Investimento em nutricionista para atletas",
      can_see: ["admin"],
    },
    {
      id: "1k2l3m4n-5o6p-7q8r-9s0t-1u2v3w4x5y6z",
      name: "Ajuda de Custo",
      description: "Investimento em ajuda de custo para atletas",
      can_see: ["admin"],
    },
  ];
