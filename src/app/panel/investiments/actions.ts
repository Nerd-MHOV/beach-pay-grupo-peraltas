import db from "@/core/infra/db";

export async function getInvestiments() {
  return db.investiment.findMany({
    include: {
      investimentGroup: {
        include: {
          investiments: {
            include: {
              investimentType: true,
            },
          },
        },
      },
      athlete: true,
      investimentType: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
