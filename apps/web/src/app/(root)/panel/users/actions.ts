"use server"

import { db, Prisma, User } from "@beach-pay/database";
import { hashSync } from "bcryptjs";
import { revalidateTag, unstable_cache } from "next/cache"
import { BACKEND_URL } from "@/lib/constants";
import { authFetch, VerifySessionType } from "@/lib/auth-fetch";
import { verifySession } from "@/lib/session";




export const getUserById = async (id: string): Promise<Omit<User, "passwd">> => {
  const session = await verifySession();
  return await cashedUserById(id, session);
}
const cashedUserById = unstable_cache(
  async (id: string, session: VerifySessionType): Promise<Omit<User, "passwd">> => {
    const response = await authFetch(`${BACKEND_URL}/user/${id}`, {}, session);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Erro ao buscar usuário");
    }
    const user = await response.json();
    return user;
  },
  ["user"],
  {
    tags: ["update-user", "create-user"],
  }
)



export const getUsers = async () => {
  const session = await verifySession();
  return await cashedUsers(session);
}
const cashedUsers = unstable_cache(
  async (session: VerifySessionType): Promise<Omit<User, "passwd">[]> => {
    const response = await authFetch(`${BACKEND_URL}/user`, {}, session);
    const users = await response.json();
    if (!response.ok) {
      throw new Error(users.message || "Erro ao buscar usuários");
    }
    return users;
  },
  ["users"],
  {
    tags: ["update-user", "create-user"],
  }
)

export const createUser = async (data: Prisma.UserCreateInput) => {
  const response = await authFetch(`${BACKEND_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao criar usuário");
  }
  const user = await response.json();
  revalidateTag("create-user");
  return user;
}

export const updateUser = async (data: Omit<User, "created_at" | "updated_at" | "hashed_refresh_token">) => {
  const response = await authFetch(`${BACKEND_URL}/user/${data.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      passwd: data.passwd ? data.passwd : undefined,
    }),
  });
  const user = await response.json();
  if (!response.ok) {
    throw new Error(user.message || "Erro ao atualizar usuário");
  }
  revalidateTag("update-user");
  return user;
}

export const getTeacherUsers = async (id?: string | null) => {
  const session = await verifySession();
  return await cashedTeacherUsers(session, id);
}
const cashedTeacherUsers = unstable_cache(
  async (session: VerifySessionType, id?: string | null): Promise<Omit<User, "passwd">[]> => {
    const response = await authFetch(`${BACKEND_URL}/user/teachers/${id || ""}`, {}, session);
    const users = await response.json();
    if (!response.ok) {
      throw new Error(users.message || "Erro ao buscar professores");
    }
    return users;
  },
  ["teachers"],
  {
    tags: ["update-user", "create-user"],
  }
);