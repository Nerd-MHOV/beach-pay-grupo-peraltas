import { Courts, PrismaClient } from "@prisma/client";

export const CourtsSeedFn = (prismaClient: PrismaClient) => {
  return CourtsSeed.map(async (data) => {
    await prismaClient.courts
      .upsert({
        where: { id: data.id },
        create: {
          ...data,
        },
        update: {},
      })
      .then((data) => {
        console.log("Courts --> " + data.name + " created");
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

export const CourtsSeed: Omit<Courts, "created_at" | "updated_at" | "is_single">[] = [
  ...Array.from({ length: 10 }, (_, i) => ({
    id: "courtseed" + (i + 1),
    name: `Quadra ${i + 1}`,
    number: i + 1,
  })),
];
