"use server";
import db from "@/core/infra/db";
import { verifySession } from "@/lib/session";

export async function getDashboard(data?: {
  date?: {
    from: Date;
    to: Date;
  };
}) {

  const session = await verifySession();
  const user = await db.user.findFirst({ where: { id: session?.userId } });
  if (!user) {
    return null;
  }
  const totalInvestments = await db.investment.aggregate({
    _sum: {
      value: true,
    },
    _count: true,
    where: {
      investment_type: {
        can_see: {
          has: user.role,
        },
      },
      date: {
        gte: data?.date?.from,
        lte: data?.date?.to,
      },
    },
  });

  const pendingInvestments = await db.investment.aggregate({
    _sum: {
      value: true,
    },
    where: {
      investment_type: {
        can_see: {
          has: user.role,
        },
      },
      date: {
        gte: data?.date?.from,
        lte: data?.date?.to,
      },
      paid: null,
    },
  });

  const pendingInvestmentsCount = await db.investment.count({
    where: {
      investment_type: {
        can_see: {
          has: user.role,
        },
      },
      date: {
        gte: data?.date?.from,
        lte: data?.date?.to,
      },
      paid: null,
    },
  });

  const totalSubscriptions = await db.athlete.count({
    where: {
      created_at: {
        gte: data?.date?.from,
        lte: data?.date?.to,
      },
    },
  });

  const investmentsByMonth = await db.investment
    .groupBy({
      by: ["date"],
      _sum: {
        value: true,
      },
      where: {
        investment_type: {
          can_see: {
            has: user.role,
          },
        },
        date: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 8)),
        },
      },
      orderBy: {
        date: "asc",
      },
    })
    .then((results) =>
      results.reduce((acc: { month: string; value: number }[], curr) => {
        const month = curr.date.toLocaleString("pt-BR", { month: "short" });
        const existingMonth = acc.find((item) => item.month === month);
        if (existingMonth) {
          existingMonth.value += curr._sum.value ?? 0;
        } else {
          acc.push({ month, value: curr._sum.value ?? 0 });
        }
        return acc;
      }, [])
    );

  const lastSixMonths = Array.from({ length: 8 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    return date.toLocaleString("pt-BR", { month: "short" });
  }).reverse();

  const investmentsByMonthWithDefaults = lastSixMonths.map((month) => {
    const existingMonth = investmentsByMonth.find(
      (item) => item.month === month
    );
    return {
      month,
      value: existingMonth ? existingMonth.value : 0,
    };
  });

  const lastFiveInvestments = await db.investment.findMany({
    orderBy: {
      created_at: "desc",
    },
    where: {
      investment_type: {
        can_see: {
          has: user.role,
        },
      },
    },
    include: {
      athlete: true,
    },
    take: 5,
  });

  const investmentsLast30Days = await db.investment.count({
    where: {
      investment_type: {
        can_see: {
          has: user.role,
        },
      },
      created_at: {
        gte: new Date(new Date().setDate(new Date().getDate() - 30)),
      },
    },
  });

  const investmentByType = await db.investment
    .groupBy({
      by: ["investment_type_id"],
      _sum: {
        value: true,
      },
      _count: true,
      where: {
        investment_type: {
          can_see: {
            has: user.role,
          },
        },
        date: {
          gte: data?.date?.from,
          lte: data?.date?.to,
        },
      },
    })
    .then((results) =>
      Promise.all(
        results.map(async (results) => {
          return {
            type:
              (
                await db.investmentType.findUnique({
                  where: {
                    id: results.investment_type_id
                  },
                })
              )?.name || "",
            value: results._sum.value || 0,
            count: results._count,
          };
        })
      )
    );

  const investmentByAthlete = await db.investment
    .groupBy({
      by: ["athlete_id"],
      _sum: {
        value: true,
      },
      where: {
        investment_type: {
          can_see: {
            has: user.role,
          },
        },
        date: {
          gte: data?.date?.from,
          lte: data?.date?.to,
        },
      },
    })
    .then((results) =>
      Promise.all(
        results.map(async (result) => {
          return {
            athlete: await db.athlete.findUnique({
              where: { id: result.athlete_id },
              include: {
                investments: {
                  include: {
                    investment_type: true,
                  },
                  where: {
                    investment_type: {
                      can_see: {
                        has: user.role,
                      },
                    },
                    date: {
                      gte: data?.date?.from,
                      lte: data?.date?.to,
                    },
                  },
                },
              },
            }),
            value: result._sum.value,
          };
        })
      )
    );

  return {
    investmentByAthlete,
    investmentByType,
    recentInvestments: {
      lastFiveInvestments,
      investmentsLast30Days,
    },
    investmentsByMonth: investmentsByMonthWithDefaults,
    totalSubscriptions: totalSubscriptions,
    totalInvestments: {
      value: totalInvestments._sum.value ?? 0,
      count: totalInvestments._count,
    },
    pendingInvestments: {
      value: pendingInvestments._sum.value ?? 0,
      count: pendingInvestmentsCount,
    },
  };
}

export async function downloadReport(data: {
  date: {
    from: Date;
    to: Date;
  };
}) {
  const investments = await db.investment.findMany({
    where: {
      created_at: {
        gte: data.date.from,
        lte: data.date.to,
      },
    },
  });

  return investments;
}
