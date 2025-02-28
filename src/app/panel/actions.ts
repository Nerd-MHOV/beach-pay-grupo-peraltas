import db from "@/core/infra/db";

export async function getDashboard(data?: {
  date: {
    from: Date;
    to: Date;
  };
}) {
  const totalInvestments = await db.investment.aggregate({
    _sum: {
      value: true,
    },
    where: {
      createdAt: {
        gte: data?.date.from,
        lte: data?.date.to,
      },
    },
  });

  const pendingInvestments = await db.investment.aggregate({
    _sum: {
      value: true,
    },
    where: {
      createdAt: {
        gte: data?.date.from,
        lte: data?.date.to,
      },
      paid: null,
    },
  });

  const pendingInvestmentsCount = await db.investment.count({
    where: {
      createdAt: {
        gte: data?.date.from,
        lte: data?.date.to,
      },
      paid: null,
    },
  });

  const totalSubscriptions = await db.athlete.count({
    where: {
      createdAt: {
        gte: data?.date.from,
        lte: data?.date.to,
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
      createdAt: "desc",
    },
    include: {
      athlete: true,
    },
    take: 5,
  });

  const investmentsLast30Days = await db.investment.count({
    where: {
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 30)),
      },
    },
  });

  return {
    recentInvestments: {
      lastFiveInvestments,
      investmentsLast30Days,
    },
    investmentsByMonth: investmentsByMonthWithDefaults,
    totalSubscriptions: totalSubscriptions,
    totalInvestments: {
      value: totalInvestments._sum.value ?? 0,
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
      createdAt: {
        gte: data.date.from,
        lte: data.date.to,
      },
    },
  });

  return investments;
}
