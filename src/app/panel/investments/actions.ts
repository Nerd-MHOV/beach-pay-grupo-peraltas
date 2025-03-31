"use server";
import db from "@/core/infra/db";
import { verifySession } from "@/lib/session";
import { Investment, InvestmentGroup } from "@prisma/client";
import fs from "fs";
import { revalidateTag, unstable_cache } from "next/cache";
import path from "path";

export const getInvestments = async (athelteId?: string) => {
  const session = await verifySession();
  return await cachedInvestments(session.userId, athelteId);
}

const cachedInvestments = unstable_cache(
  async (userId: string, athelteId?: string,) => {
    const user = await db.user.findFirst({ where: { id: userId } });
    if (!user) {
      return [];
    }
    return db.investment.findMany({
      where: athelteId ? { athleteId: athelteId } : {},
      include: {
        investmentGroup: {
          include: {
            pair: true,
            tournament: {
              include: {
                arena: true,
              },
            },
            investments: {
              where: {
                investmentType: {
                  canSee: {
                    has: user.role,
                  },
                }
              },
              include: {
                investmentType: true,
              },
            },
          },
        },
        athlete: true,
        investmentType: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },
  [`investment`],
  {
    tags: ["create-investment", "update-investment"],
  }
);

export const getGroupInvestments = async () => {
  const session = await verifySession();
  return await cachedGroupInvestments(session.userId);
}

const cachedGroupInvestments = unstable_cache(
  async (userId: string, athleteId?: string) => {
    const user = await db.user.findFirst({ where: { id: userId } });
    if (!user) {
      return [];
    }
    return db.investmentGroup.findMany({
      where: athleteId ? { athleteId } : {},
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
            investmentType: {
              canSee: {
                has: user.role,
              },
            },
          },
          include: {
            investmentType: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },
  [`group-investment`],
  {
    tags: ["create-group-investment", "update-group-investment"],
  }
);

export const getInvestmentById = async (id: string) => {
  const session = await verifySession();
  return await cachedInvestmentById(session.userId, id);
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
        investmentType: {
          canSee: {
            has: user.role,
          },
        },
      },
      include: {
        investmentGroup: {
          include: {
            pair: true,
            tournament: {
              include: {
                arena: true,
              },
            },
            investments: {
              where: {
                investmentType: {
                  canSee: {
                    has: user.role,
                  },
                },
              },
              include: {
                investmentType: true,
              },
            },
          },
        },
        athlete: true,
        investmentType: true,
      },
    });
  },
  [`investmentById`],
  {
    tags: ["update-investment"],
  }
);

export async function createInvestmentAthlete(
  data: Omit<Investment, "id" | "createdAt" | "updatedAt">
) {
  const investment = await db.investment.create({
    data,
    include: {
      investmentType: true,
    },
  });
  revalidateTag("create-investment");
  return investment;
}

export async function updateInvestmentAthlete(
  data: Omit<Investment, "createdAt" | "updatedAt">
) {
  const investment = await db.investment.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      updatedAt: new Date(),
    },
    include: {
      investmentType: true,
    },
  });
  revalidateTag("update-investment");
  return investment;
}

export async function createGroupInvetimentAthlete(
  data: Omit<InvestmentGroup, "id" | "createdAt" | "updatedAt">,
  investments: { id: string }[]
) {
  const investmentGroup = await db.investmentGroup.create({
    data: {
      ...data,
      investments: {
        connect: investments,
      },
    },
  });
  revalidateTag("create-group-investment");
  return investmentGroup;
}

export async function updateGroupInvestmentAthlete(
  data: Omit<InvestmentGroup, "createdAt" | "updatedAt">,
  investments: { id: string }[]
) {
  const groupInvestment = await db.investmentGroup.update({
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
  revalidateTag("update-group-investment");
  return groupInvestment;
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
  revalidateTag("update-group-investment");
}

export async function saveProof(file: File, name: string) {
  const uploadPath = path.join(process.cwd(), "public", "uploads", "proofs");
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  const filePath = path.join(uploadPath, name);
  const fileBuffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filePath, fileBuffer);
  const relativeFilePath = path.relative(
    path.join(process.cwd(), "public"),
    filePath
  );
  return `/${relativeFilePath}`;
}
