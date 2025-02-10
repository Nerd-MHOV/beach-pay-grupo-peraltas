import { Athlete, PrismaClient } from "@prisma/client";

export const AthleteSeedFn = (prismaClient: PrismaClient) => {
  return AthleteSeed.map(async (data) => {
    await prismaClient.athlete
      .upsert({
        where: { name: data.name },
        create: {
          ...data,
        },
        update: {},
      })
      .then((data) => {
        console.log("Athlete --> " + data.name + " created");
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

export const AthleteSeed: Omit<Athlete, "id" | "createdAt" | "updatedAt">[] = [
  {
    name: "Matheus Henrique",
    birthday: new Date("2001-11-04"),
    phone: "+5514991578451",
    pixKey: "14991578451",
    responsible: null,
    startDate: new Date("2021-11-04"),
  },
];
