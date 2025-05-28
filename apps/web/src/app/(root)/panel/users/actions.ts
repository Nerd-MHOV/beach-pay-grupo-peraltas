"use server"

import { verifySession } from "@/lib/session";
import { db, User } from "@beach-pay/database";
import { hashSync } from "bcryptjs";
import { revalidateTag, unstable_cache } from "next/cache"
import { BACKEND_URL } from "@/lib/constants";
import { authFetch } from "@/lib/auth-fetch";


// FIXME: REMOVE THIS FUNCTION PLS 
export const exampleWithToken = async () => {
  // const session = await verifySession();
  // const response = await fetch(`${BACKEND_URL}/auth/protected`, {
  //   headers: {
  //     Authorization: `Bearer ${session?.accessToken}`,
  //   },
  // });
  const response = await authFetch(`${BACKEND_URL}/auth/protected`);
  const result = await response.json();
  return result;
}




export const getUserById = async (id: string) => {
  const user = await db.user.findFirst({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      user: true,
      role: true,
      created_at: true,
      updated_at: true,
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
        teacher_id: true,
        created_at: true,
        updated_at: true,
      }
    });

    return users;
  },
  ["users"],
  {
    tags: ["update-user", "create-user"],
  }
)

export const createUser = async (data: Omit<User, "id" | "created_at" | "updated_at" | "teacher_id">) => {
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

export const updateUser = async (data: Omit<User, "created_at" | "updated_at">) => {

  const { passwd, ...rest } = data;
  const user = await db.user.update({
    where: { id: data.id },
    data: {
      ...rest,
      ...(passwd.length > 2 ? { passwd: hashSync(passwd, 10) } : {}),
      updated_at: new Date(),
    },
  });
  revalidateTag("update-user");
  return user;
}

export const getTeacherUsers = async (id?: string | null) => {
  const users = await db.user.findMany({
    where: {
      OR: [
        {
          role: "teacher",
          teacher_id: null,
        },
        {
          id: id ?? undefined,
        }
      ]
    },
    omit: {
      passwd: true,
    },
  });
  return users;
};