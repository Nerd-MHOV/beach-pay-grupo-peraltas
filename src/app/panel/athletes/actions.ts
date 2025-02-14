"use server";

import db from "@/core/infra/db";
import { Athlete, Investiment, InvestimentGroup } from "@prisma/client";
import fs from "fs";
import path from "path";

export async function createAthlete(
  data: Omit<Athlete, "id" | "createdAt" | "updatedAt">
) {
  return await db.athlete.create({ data });
}

export async function getAthletes() {
  return await db.athlete.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

export async function createInvestmentAthlete(
  data: Omit<Investiment, "id" | "createdAt" | "updatedAt">
) {
  return await db.investiment.create({ data });
}

export async function createGroupInvetimentAthlete(
  data: Omit<InvestimentGroup, "id" | "createdAt" | "updatedAt">,
  investiments: { id: string }[]
) {
  return await db.investimentGroup.create({
    data: {
      ...data,
      investiments: {
        connect: investiments,
      },
    },
  });
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
