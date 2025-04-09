"use server";
import "server-only";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

const key = new TextEncoder().encode(process.env.JWT_SECRET);

const cookie = {
  name: "session",
  options: {
    httpOnly: true,
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

export async function createSession(user: {
  id: string;
  role: string;
}) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({
    userId: user.id,
    userRole: user.role,
    expires
  });
  (await cookies()).set(cookie.name, session, { ...cookie.options, expires });
  redirect("/panel", RedirectType.push);
}

export async function verifySession(redirectToLogin = true) {
  const ck = (await cookies()).get(cookie.name)?.value || "";
  const session = await decrypt(ck);
  if (!session?.userId || !session?.userRole) {
    if (redirectToLogin) redirect("/login");
    return null;
  }

  return {
    userId: session.userId as string,
    userRole: session.userRole as string
  };
}

export async function deleteSession() {
  (await cookies()).delete(cookie.name);
  redirect("/login");
}
