import db from "@/core/infra/db";

export async function getDashboard(data?: {
  date: {
    from: Date;
    to: Date;
  };
}) {
  const investments = await db.investiment.findMany({
    where: {
      createdAt: {
        gte: data?.date.from,
        lte: data?.date.to,
      },
    },
  });

  return {
    investments,
  };
}

export async function downloadReport(data: {
  date: {
    from: Date;
    to: Date;
  };
}) {
  const investments = await db.investiment.findMany({
    where: {
      createdAt: {
        gte: data.date.from,
        lte: data.date.to,
      },
    },
  });

  return investments;
}
