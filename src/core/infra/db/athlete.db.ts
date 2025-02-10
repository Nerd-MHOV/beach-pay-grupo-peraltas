import { PrismaClient } from "@prisma/client";

const dbAthlete = (db: PrismaClient) => ({
  async get() {
    const athletes = await db.athlete.findMany();
    return { athletes };
  },
});

export default dbAthlete;
