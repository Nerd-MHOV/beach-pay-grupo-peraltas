"use server";
import { authFetch } from "@/lib/auth-fetch";
import { BACKEND_URL } from "@/lib/constants";
import { createSession, deleteSession, updateToken } from "@/lib/session";
import { z } from "zod";

const LoginSchema = z.object({
  user: z.string().min(3, { message: "Informe o usuário" }),
  passwd: z.string().min(3, { message: "Informe a senha" }),
});

type LoginData = z.infer<typeof LoginSchema>;

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof LoginData]?: string[];
  };
}

export async function submitLogin(
  prevState: ActionResponse | null,
  formData: FormData,
): Promise<ActionResponse> {
  // 1. validate fields
  const validateFormData = LoginSchema.safeParse({
    user: formData.get("user") as string,
    passwd: formData.get("passwd") as string,
  });

  if (!validateFormData.success) {
    return {
      success: false,
      message: "Erro ao validar os dados",
      errors: validateFormData.error.flatten().fieldErrors,
    };
  }

  // 2. login

  // NEXTJS LOGIN....
  // const user = await login(validateFormData.data);
  // if (user.error || !user.user)
  //   return {
  //     success: false,
  //     message: user.error || "Erro ao logar, tente novamente!",
  //   };
  // const sessionParams = user.user;

  // API LOGIN
  const userResponse = await fetch(`${BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: validateFormData.data.user,
      password: validateFormData.data.passwd,
    }),
  });

  if (!userResponse.ok) {
    const errorData = await userResponse.json();
    return {
      success: false,
      message: errorData.message || "Erro ao logar, tente novamente!",
    }
  }
  const response = await userResponse.json();

  // 3. create  a session
  await createSession({
    user: {
      id: response.id,
      role: response.role,
      name: response.name,
    },
    accessToken: response.accessToken,
    refreshToken: response.refreshToken,
  });
  return {
    success: true,
    message: "Logado com sucesso",
  };
}


export const refreshToken = async (oldRefreshToken: string) => {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/refresh`, {
      method: "POST",
      body: JSON.stringify({
        refresh: oldRefreshToken,
      }),
    });
    if (!response.ok)
      throw new Error("Erro ao atualizar o token");

    const { accessToken, refreshToken } = await response.json();

    await updateToken({ accessToken, refreshToken });

    return accessToken;

  } catch {
    return null;
  }
}

export const logout = async () => {
  await authFetch(`${BACKEND_URL}/auth/logout`, {
    method: "POST",
  });
  await deleteSession();
}