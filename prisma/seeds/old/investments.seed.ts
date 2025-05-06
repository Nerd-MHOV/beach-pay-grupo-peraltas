import {
  Address,
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
          name_address_id: {
            name: data.name,
            address_id: data.address.create.id,
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
          name_address_id: {
            name: data.name,
            address_id: data.address.create.id,
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


type ArenaSeedType = Omit<Arena, "created_at" | "updated_at" | "address_id"> & {
  address: {
    create: Omit<Address, "created_at" | "updated_at">;
  }
}
export const ArenaSeed: ArenaSeedType[] = [
  {
    id: "arenaSeed1",
    name: "Arena 1",
    address: {
      create: {
        id: "address1",
        city_state: "São Carlos",
        neighborhood: "Centro",
        street: "Rua da Liberdade",

        number: "100",
        complement: "Apto 101",
        zip_code: "13500-000",
      },
    },
  },
  {
    id: "arenaSeed2",
    name: "Arena 2",
    address: {
      create: {
        id: "address2",
        city_state: "Brotas",
        neighborhood: "Zona Rural",
        street: "Estrada dos Bandeirantes",
        number: "200",
        complement: "Casa",
        zip_code: "13510-000",
      },
    },
  },
  {
    id: "arenaSeed3",
    name: "Arena 3",
    address: {
      create: {
        id: "address3",
        city_state: "Dois Corregos",
        neighborhood: "Industrial",
        street: "Av. Principal",
        number: "300",
        complement: "Sala 5",
        zip_code: "13520-000",
      },
    },
  },
];

export const TournamentSeed: Omit<Tournament, "created_at" | "updated_at">[] = [
  {
    id: "tournamentSeed1",
    name: "Torneio 1",
    description: "Primeiro torneio da temporada",
    arena_id: "arenaSeed1",
    date_from: new Date("2023-11-01"),
    date_to: new Date("2023-11-05"),
  },
  {
    id: "tournamentSeed2",
    name: "Torneio 2",
    description: "Segundo torneio da temporada",
    arena_id: "arenaSeed2",
    date_from: new Date("2023-12-01"),
    date_to: new Date("2023-12-05"),
  },
  {
    id: "tournamentSeed3",
    name: "Torneio 3",
    description: "Terceiro torneio da temporada",
    arena_id: "arenaSeed3",
    date_from: new Date("2024-01-01"),
    date_to: new Date("2024-01-05"),
  },
  {
    id: "tournamentSeed4",
    name: "Torneio 4",
    description: "Quarto torneio da temporada",
    arena_id: "arenaSeed1",
    date_from: new Date("2024-02-01"),
    date_to: new Date("2024-02-05"),
  },
  {
    id: "tournamentSeed5",
    name: "Torneio 5",
    description: "Quinto torneio da temporada",
    arena_id: "arenaSeed2",
    date_from: new Date("2024-03-01"),
    date_to: new Date("2024-03-05"),
  },
];

export const investmentsSeed: Omit<Investment, "created_at" | "updated_at">[] = [
  {
    id: "investmentSeed1",
    athlete_id: "athleteseed1",
    investment_type_id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p", // Incrições
    value: 1000,
    date: new Date("2025-03-10"),
    description: "Investimento inicial",
    paid: null,
    proof: null,
    investment_group_id: "investmentGroupSeed1",
  },
  {
    id: "investmentSeed2",
    athlete_id: "athleteseed2",
    investment_type_id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q", // Gasolina
    value: 2000,
    date: new Date("2025-02-20"),
    description: "Investimento secundário",
    paid: null,
    proof: null,
    investment_group_id: "investmentGroupSeed2",
  },
  {
    id: "investmentSeed3",
    athlete_id: "athleteseed3",
    investment_type_id: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r", // Pedágio
    value: 1500,
    date: new Date("2025-1-15"),
    description: "Investimento terciário",
    paid: null,
    proof: null,
    investment_group_id: "investmentGroupSeed3",
  },
  {
    id: "investmentSeed4",
    athlete_id: "athleteseed1",
    investment_type_id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q", // Gasolina
    value: 2500,
    date: new Date("2024-12-05"),
    description: "Investimento adicional",
    paid: null,
    proof: null,
    investment_group_id: "investmentGroupSeed1",
  },
  {
    id: "investmentSeed5",
    athlete_id: "athleteseed2",
    investment_type_id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p", // Incrições
    value: 3000,
    date: new Date("2025-01-01"),
    description: "Investimento final",
    paid: null,
    proof: null,
    investment_group_id: "investmentGroupSeed2",
  },
];

export const investmentGroupSeed: Omit<
  InvestmentGroup,
  "created_at" | "updated_at"
>[] = [
    {
      id: "investmentGroupSeed1",
      description:
        "Grupo de investimentos para o primeiro conjunto de investimentos",
      athlete_id: "athleteseed1",
      pair_id: null,
      tournament_id: "tournamentSeed1",
      podium: null,
      pair_amount: null,
      km: null,
      km_racional: null,
    },
    {
      id: "investmentGroupSeed2",
      description:
        "Grupo de investimentos para o segundo conjunto de investimentos",
      athlete_id: "athleteseed2",
      pair_id: null,
      tournament_id: "tournamentSeed2",
      podium: null,
      pair_amount: null,
      km: null,
      km_racional: null,
    },
    {
      id: "investmentGroupSeed3",
      description:
        "Grupo de investimentos para o terceiro conjunto de investimentos",
      athlete_id: "athleteseed3",
      pair_id: null,
      tournament_id: "tournamentSeed3",
      podium: null,
      pair_amount: null,
      km: null,
      km_racional: null,
    },
  ];
