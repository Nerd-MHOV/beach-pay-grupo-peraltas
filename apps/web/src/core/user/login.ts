"use server";

import { compare } from "bcryptjs";
import db from "../infra/db";

const login = async (data: { user: string; passwd: string }) => {
  try {
    const dUser = await db.user.findUnique({ where: { user: data.user } });
    if (!dUser) throw new Error("Usuário ou Senha não conferem!");
    const passwdMatch = await compare(data.passwd, dUser.passwd);
    if (!passwdMatch) throw new Error("Usuário ou Senha não conferem!");
    return {
      user: {
        id: dUser.id,
        role: dUser.role,
      },
    };
  } catch {
    return {
      error: "Usuário ou Senha não conferem!",
    };
  }
};

export default login;
