import { PrismaClient } from "@prisma/client";

const dbUser = (db: PrismaClient) => ({
  async create(data: {
    name: string;
    passwd: string;
    user: string;
    email: string;
  }) {
    const dbData = await db.user.create({ data });

    return { user: dbData };
  },

  async getByUser(data: { user: string }) {
    const dbData = await db.user.findUnique({
      where: {
        user: data.user,
      },
    });

    if (!dbData) return null;
    return { user: dbData };
  },
});

export default dbUser;
