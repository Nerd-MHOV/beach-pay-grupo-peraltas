"use server";
import db from "@/core/infra/db";
import { Investiment, InvestimentGroup } from "@prisma/client";
import fs from "fs";
import { revalidateTag, unstable_cache } from "next/cache";
import path from "path";

export const getInvestiments = unstable_cache(
  async (athelteId?: string) => {
    return db.investiment.findMany({
      where: athelteId ? { athleteId: athelteId } : {},
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
  },
  [`investiment`],
  {
    tags: ["create-investiment", "update-investiment"],
  }
);

export const getGroupInvestiments = unstable_cache(
  async (athleteId?: string) => {
    return db.investimentGroup.findMany({
      where: athleteId ? { athleteId } : {},
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
  },
  [`group-investiment`],
  {
    tags: ["create-group-investiment", "update-group-investiment"],
  }
);

export const getInvestimentById = unstable_cache(
  async (id: string) => {
    return db.investiment.findUnique({
      where: { id },
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
    });
  },
  [`investimentById`],
  {
    tags: ["update-investiment"],
  }
);

export async function createInvestmentAthlete(
  data: Omit<Investiment, "id" | "createdAt" | "updatedAt">
) {
  const investiment = await db.investiment.create({
    data,
    include: {
      investimentType: true,
    },
  });
  revalidateTag("create-investiment");
  return investiment;
}

export async function updateInvestimentAthlete(
  data: Omit<Investiment, "createdAt" | "updatedAt">
) {
  const investiment = await db.investiment.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      updatedAt: new Date(),
    },
    include: {
      investimentType: true,
    },
  });
  revalidateTag("update-investiment");
  return investiment;
}

export async function createGroupInvetimentAthlete(
  data: Omit<InvestimentGroup, "id" | "createdAt" | "updatedAt">,
  investiments: { id: string }[]
) {
  const investimentGroup = await db.investimentGroup.create({
    data: {
      ...data,
      investiments: {
        connect: investiments,
      },
    },
  });
  revalidateTag("create-group-investiment");
  return investimentGroup;
}

export async function updateGroupInvestimentAthlete(
  data: Omit<InvestimentGroup, "createdAt" | "updatedAt">,
  investiments: { id: string }[]
) {
  const groupInvestiment = await db.investimentGroup.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      investiments: {
        set: investiments,
      },
    },
  });
  revalidateTag("update-group-investiment");
  return groupInvestiment;
}

export async function updateInvestimentProof(
  investiments: { id: string }[],
  proof: {
    file: string | null;
    date: Date | null;
  }
) {
  await db.investiment.updateMany({
    where: {
      id: {
        in: investiments.map((i) => i.id),
      },
    },
    data: {
      ...(proof.file && { proof: proof.file }),
      ...(proof.date && { paid: proof.date }),
    },
  });
  revalidateTag("update-investiment");
  revalidateTag("update-group-investiment");
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
