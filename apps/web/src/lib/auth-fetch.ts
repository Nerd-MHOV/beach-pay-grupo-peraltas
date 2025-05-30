import { refreshToken } from "@/app/login/actions";
import { verifySession } from "./session";

export type VerifySessionType = Awaited<ReturnType<typeof verifySession>>;
export interface FetchOptions extends RequestInit {
    headers?: Record<string, string>;
}

export const authFetch = async (url: string | URL, options: FetchOptions = {}, session?: VerifySessionType) => {
    session = session || await verifySession();
    options.headers = {
        ...options.headers,
        Authorization: `Bearer ${session?.accessToken}`,
    }

    let response = await fetch(url, options);

    if (response.status === 401) {
        if (session == null || !session?.refreshToken) throw new Error("Refresh Token não encontrado");

        const newAccessToken = await refreshToken(session?.refreshToken || "");
        if (newAccessToken) {
            options.headers.Authorization = `Bearer ${newAccessToken}`;
            response = await fetch(url, options);
        }
    }
    return response;
}