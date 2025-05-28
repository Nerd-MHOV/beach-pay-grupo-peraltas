"use server";
import "server-only";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { UserRole } from "@beach-pay/database";

export type Session = {
  user: {
    id: string;
    role: UserRole;
    name: string;
  }
  accessToken: string;
  refreshToken: string;
}

const key = new TextEncoder().encode(process.env.JWT_SECRET);

const cookie = {
  name: "session",
  options: {
    httpOnly: true,
    secure: true,
    sameSite: "lax" as const,
    path: "/",
  },
  duration: 30 * 24 * 60 * 60 * 1000,
};

export async function encrypt(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function decrypt(session: string) {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    return null;
  }
}

export async function createSession(payload: Session) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({
    ...payload,
    expires
  });
  (await cookies()).set(cookie.name, session, { ...cookie.options, expires });
  redirect("/", RedirectType.push);
}

export async function verifySession(redirectToLogin = true) {
  const ck = (await cookies()).get(cookie.name)?.value || "";
  const session = await decrypt(ck);
  if (!session?.user) {
    if (redirectToLogin) redirect("/login");
    return null;
  }

  return {
    user: session.user as Session["user"],
    accessToken: session.accessToken as string,
    refreshToken: session.refreshToken as string,
  };
}

export async function deleteSession() {
  (await cookies()).delete(cookie.name);
  redirect("/login");
}

export async function updateToken({ accessToken, refreshToken }: {
  accessToken: string;
  refreshToken: string;
}) {
  const ck = (await cookies()).get(cookie.name)?.value;
  if (!ck) {
    return null;
  }
  const session = await decrypt(ck);
  if (!session?.user)
    throw new Error("Sessão invalida ou expirada");


  const expires = new Date(Date.now() + cookie.duration);
  const newSession = await encrypt({
    ...session,
    accessToken,
    refreshToken,
    expires
  });
  (await cookies()).set(cookie.name, newSession, { ...cookie.options, expires });
}