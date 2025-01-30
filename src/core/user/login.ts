"use server";

import { compare } from "bcryptjs";
import db from "../db";

const login = async (data: { user: string; passwd: string }) => {
  try {
    const dUser = await db.user.getByUser({ user: data.user });
    if (!dUser) throw new Error("Usuário ou Senha não conferem!");
    const passwdMatch = await compare(data.passwd, dUser.user.passwd);
    if (!passwdMatch) throw new Error("Usuário ou Senha não conferem!");
    return {
      user: {
        id: dUser.user.id,
      },
    };
  } catch {
    return {
      error: "Usuário ou Senha não conferem!",
    };
  }
};

export default login;
