import db from "@/core/infra/db";

export async function getInvestiments() {
  return db.investiment.findMany({
    include: {
      investimentGroup: {
        include: {
          pair: true,
          tournament: {
            include: {
              arena: true,
            },
          },
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
export async function getGroupInvestiments() {
  return db.investimentGroup.findMany({
    include: {
      pair: true,
      athlete: true,
      tournament: {
        include: {
          arena: true,
        },
      },
      investiments: {
        include: {
          investimentType: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
