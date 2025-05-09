"use server";
import db from "@/core/infra/db";
import { verifySession } from "@/lib/session";
import { Investment, InvestmentTournament } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";

export const getInvestments = async (athlete_id?: string) => {
  const session = await verifySession();
  return await cachedInvestments(session?.userId || "", athlete_id);
}

const cachedInvestments = unstable_cache(
  async (userId: string, athlete_id?: string,) => {
    const user = await db.user.findFirst({ where: { id: userId } });
    if (!user) {
      return [];
    }
    return db.investment.findMany({
      where: athlete_id ? { athlete_id: athlete_id } : {},
      include: {
        investment_tournament: {
          include: {
            pair: true,
            tournament: {
              include: {
                arena: true,
              },
            },
            investments: {
              where: {
                investment_type: {
                  can_see: {
                    has: user.role,
                  },
                }
              },
              include: {
                investment_type: true,
              },
            },
          },
        },
        athlete: true,
        investment_type: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
  },
  [`investment`],
  {
    tags: [
      "create-investment",
      "update-investment",
      "delete-investment",
      "delete-investment-tournament",
      "update-investment-tournament",
      "create-investment-tournament",
    ],
  }
);

export const getInvestmentTournaments = async () => {
  const session = await verifySession();
  return await cachedInvestmentTournament(session?.userId || "");
}

const cachedInvestmentTournament = unstable_cache(
  async (userId: string, athlete_id?: string) => {
    const user = await db.user.findFirst({ where: { id: userId } });
    if (!user) {
      return [];
    }
    return db.investmentTournament.findMany({
      where: athlete_id ? { athlete_id } : {},
      include: {
        pair: true,
        athlete: true,
        tournament: {
          include: {
            arena: true,
          },
        },
        investments: {
          where: {
            investment_type: {
              can_see: {
                has: user.role,
              },
            },
          },
          include: {
            investment_type: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });
  },
  [`investment-tournament`],
  {
    tags: [
      "create-investment-tournament",
      "update-investment-tournament",
      "delete-investment-tournament",
      "update-investment",
      "delete-investment",
    ],
  }
);

export const getInvestmentById = async (id: string) => {
  const session = await verifySession();
  return await cachedInvestmentById(session?.userId || "", id);
}
const cachedInvestmentById = unstable_cache(
  async (userId: string, id: string) => {
    const user = await db.user.findFirst({ where: { id: userId } });
    if (!user) {
      return null;
    }
    return db.investment.findUnique({
      where: {
        id,
        investment_type: {
          can_see: {
            has: user.role,
          },
        },
      },
      include: {
        investment_tournament: {
          include: {
            pair: true,
            tournament: {
              include: {
                arena: true,
              },
            },
            investments: {
              where: {
                investment_type: {
                  can_see: {
                    has: user.role,
                  },
                },
              },
              include: {
                investment_type: true,
              },
            },
          },
        },
        athlete: true,
        investment_type: true,
      },
    });
  },
  [`investmentById`],
  {
    tags: ["update-investment", "delete-investment"],
  }
);

export async function createInvestmentAthlete(
  data: Omit<Investment, "id" | "created_at" | "updated_at">
) {
  const investment = await db.investment.create({
    data,
    include: {
      investment_type: true,
    },
  });
  revalidateTag("create-investment");
  return investment;
}

export async function updateInvestmentAthlete(
  data: Omit<Investment, "created_at" | "updated_at">
) {
  const investment = await db.investment.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      updated_at: new Date(),
    },
    include: {
      investment_type: true,
    },
  });
  revalidateTag("update-investment");
  return investment;
}

export async function deleteInvestmentAthlete(investment: Investment) {
  const deleted = await db.investment.delete({
    where: {
      id: investment.id,
    },
  });
  revalidateTag("delete-investment");
  return deleted;
}

export async function deleteInvestmentTournament(investment: InvestmentTournament) {
  const deleted = await db.investmentTournament.delete({
    where: {
      id: investment.id,
    },
  });
  revalidateTag("delete-investment-tournament");
  return deleted;
}

export async function createInvestmentTournamentAthlete(
  data: Omit<InvestmentTournament, "id" | "created_at" | "updated_at">,
  investments: { id: string }[]
) {
  const investmentTournament = await db.investmentTournament.create({
    data: {
      ...data,
      investments: {
        connect: investments,
      },
    },
  });
  revalidateTag("create-investment-tournament");
  return investmentTournament;
}

export async function updateInvestmentTournament(
  data: Omit<InvestmentTournament, "created_at" | "updated_at">,
  investments: { id: string }[]
) {
  const investmentTournament = await db.investmentTournament.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      investments: {
        set: investments,
      },
    },
  });
  revalidateTag("update-investment-tournament");
  return investmentTournament;
}

export async function updateInvestmentProof(
  investments: { id: string }[],
  proof: {
    file: string | null;
    date: Date | null;
  }
) {
  await db.investment.updateMany({
    where: {
      id: {
        in: investments.map((i) => i.id),
      },
    },
    data: {
      ...(proof.file && { proof: proof.file }),
      ...(proof.date && { paid: proof.date }),
    },
  });
  revalidateTag("update-investment");
  revalidateTag("update-investment-tournament");
}

export async function saveProof(file: File, name: string) {
  const { v2: cloudinary } = await import("cloudinary");
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  const fileBuffer = Buffer.from(await file.arrayBuffer());
  const base64Image = fileBuffer.toString("base64");
  const dataUri = `data:${file.type};base64,${base64Image}`;
  const uploadResponse = await cloudinary.uploader.upload(dataUri, {
    folder: "uploads/proofs",
  });
  return uploadResponse.secure_url;
}
