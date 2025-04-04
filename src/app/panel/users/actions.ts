"use server"

import db from "@/core/infra/db"
import { User } from "@prisma/client";
import { hashSync } from "bcryptjs";
import { revalidateTag, unstable_cache } from "next/cache"

export const getUserById = async (id: string) => {
  const user = await db.user.findFirst({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      user: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return user;
}

export const getUsers = unstable_cache(
  async () => {
    const users = await db.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        user: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    return users;
  },
  ["users"],
  {
    tags: ["update-user", "create-user"],
  }
)

export const createUser = async (data: Omit<User, "id" | "createdAt" | "updatedAt">) => {
  const { passwd, ...rest } = data;

  const user = await db.user.create({
    data: {
      ...rest,
      passwd: hashSync(passwd, 10),
    }
  });
  revalidateTag("create-user");
  return user;
}

export const updateUser = async (data: Omit<User, "createdAt" | "updatedAt">) => {

  const { passwd, ...rest } = data;
  const user = await db.user.update({
    where: { id: data.id },
    data: {
      ...rest,
      ...(passwd.length > 2 ? { passwd: hashSync(passwd, 10) } : {}),
      updatedAt: new Date(),
    },
  });
  revalidateTag("update-user");
  return user;
}