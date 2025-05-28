import { verifySession } from "@/lib/session";
import React from "react";
import Sidebar from "./Sidebar";

const SidebarRole = async () => {
  const session = await verifySession();
  if (!session?.user.role) return null;
  return <Sidebar role={session.user.role} />;
};

export default SidebarRole;
