import { verifySession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await verifySession();
  if (session?.userRole === "teacher") redirect("/teacher");
  redirect("/panel");
}
