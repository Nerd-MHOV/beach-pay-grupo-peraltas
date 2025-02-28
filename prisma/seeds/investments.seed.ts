import {
  Arena,
  Investment,
  InvestmentGroup,
  PrismaClient,
  Tournament,
} from "@prisma/client";
export const investmentsSeedFN = async (prismaClient: PrismaClient) => {
  await Promise.all(
    ArenaSeed.map(async (data) => {
      await prismaClient.arena.upsert({
        where: {
          name_city: {
            name: data.name,
            city: data.city,
          },
        },
        create: {
          ...data,
        },
        update: {},
      });
    })
  );

  await Promise.all(
    TournamentSeed.map(async (data) => {
      await prismaClient.tournament.upsert({
        where: {
          id: data.id,
        },
        create: {
          ...data,
        },
        update: {},
      });
    })
  );

  await Promise.all(
    investmentGroupSeed.map(async (data) => {
      await prismaClient.investmentGroup.upsert({
        where: {
          id: data.id,
        },
        create: {
          ...data,
        },
        update: {},
      });
    })
  );

  await Promise.all(
    investmentsSeed.map(async (data) => {
      await prismaClient.investment.upsert({
        where: {
          id: data.id,
        },
        create: {
          ...data,
        },
        update: {},
      });
    })
  );

  console.log("Database seeded successfully");
};
export const InvestmentsFn = (prismaClient: PrismaClient) => {
  return ArenaSeed.map(async (data) => {
    await prismaClient.arena
      .upsert({
        where: {
          name_city: {
            name: data.name,
            city: data.city,
          },
        },
        create: {
          ...data,
        },
        update: {},
      })
      .then((data) => {
        console.log("Arena --> " + data.name + " created");
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

export const ArenaSeed: Omit<Arena, "createdAt" | "updatedAt">[] = [
  {
    id: "arenaSeed1",
    name: "Arena 1",
    city: "São Carlos",
  },
  {
    id: "arenaSeed2",
    name: "Arena 2",
    city: "Brotas",
  },
  {
    id: "arenaSeed3",
    name: "Arena 3",
    city: "Dois Corregos",
  },
];

export const TournamentSeed: Omit<Tournament, "createdAt" | "updatedAt">[] = [
  {
    id: "tournamentSeed1",
    name: "Torneio 1",
    description: "Primeiro torneio da temporada",
    arenaId: "arenaSeed1",
    fromDate: new Date("2023-11-01"),
    toDate: new Date("2023-11-05"),
  },
  {
    id: "tournamentSeed2",
    name: "Torneio 2",
    description: "Segundo torneio da temporada",
    arenaId: "arenaSeed2",
    fromDate: new Date("2023-12-01"),
    toDate: new Date("2023-12-05"),
  },
  {
    id: "tournamentSeed3",
    name: "Torneio 3",
    description: "Terceiro torneio da temporada",
    arenaId: "arenaSeed3",
    fromDate: new Date("2024-01-01"),
    toDate: new Date("2024-01-05"),
  },
  {
    id: "tournamentSeed4",
    name: "Torneio 4",
    description: "Quarto torneio da temporada",
    arenaId: "arenaSeed1",
    fromDate: new Date("2024-02-01"),
    toDate: new Date("2024-02-05"),
  },
  {
    id: "tournamentSeed5",
    name: "Torneio 5",
    description: "Quinto torneio da temporada",
    arenaId: "arenaSeed2",
    fromDate: new Date("2024-03-01"),
    toDate: new Date("2024-03-05"),
  },
];

export const investmentsSeed: Omit<Investment, "createdAt" | "updatedAt">[] = [
  {
    id: "investmentSeed1",
    athleteId: "athleteseed1",
    investmentTypeId: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p", // Incrições
    value: 1000,
    date: new Date("2024-08-10"),
    description: "Investimento inicial",
    paid: null,
    proof: null,
    investmentGroupId: "investmentGroupSeed1",
  },
  {
    id: "investmentSeed2",
    athleteId: "athleteseed2",
    investmentTypeId: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q", // Gasolina
    value: 2000,
    date: new Date("2024-10-20"),
    description: "Investimento secundário",
    paid: null,
    proof: null,
    investmentGroupId: "investmentGroupSeed2",
  },
  {
    id: "investmentSeed3",
    athleteId: "athleteseed3",
    investmentTypeId: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r", // Pedágio
    value: 1500,
    date: new Date("2024-11-15"),
    description: "Investimento terciário",
    paid: null,
    proof: null,
    investmentGroupId: "investmentGroupSeed3",
  },
  {
    id: "investmentSeed4",
    athleteId: "athleteseed1",
    investmentTypeId: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q", // Gasolina
    value: 2500,
    date: new Date("2023-12-05"),
    description: "Investimento adicional",
    paid: null,
    proof: null,
    investmentGroupId: "investmentGroupSeed1",
  },
  {
    id: "investmentSeed5",
    athleteId: "athleteseed2",
    investmentTypeId: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p", // Incrições
    value: 3000,
    date: new Date("2025-01-01"),
    description: "Investimento final",
    paid: null,
    proof: null,
    investmentGroupId: "investmentGroupSeed2",
  },
];

export const investmentGroupSeed: Omit<
  InvestmentGroup,
  "createdAt" | "updatedAt"
>[] = [
  {
    id: "investmentGroupSeed1",
    description:
      "Grupo de investimentos para o primeiro conjunto de investimentos",
    athleteId: "athleteseed1",
    pairId: null,
    tournamentId: "tournamentSeed1",
    podium: null,
    pairAmount: null,
    km: null,
    km_racional: null,
  },
  {
    id: "investmentGroupSeed2",
    description:
      "Grupo de investimentos para o segundo conjunto de investimentos",
    athleteId: "athleteseed2",
    pairId: null,
    tournamentId: "tournamentSeed2",
    podium: null,
    pairAmount: null,
    km: null,
    km_racional: null,
  },
  {
    id: "investmentGroupSeed3",
    description:
      "Grupo de investimentos para o terceiro conjunto de investimentos",
    athleteId: "athleteseed3",
    pairId: null,
    tournamentId: "tournamentSeed3",
    podium: null,
    pairAmount: null,
    km: null,
    km_racional: null,
  },
];
