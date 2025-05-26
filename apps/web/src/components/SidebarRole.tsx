import { verifySession } from "@/lib/session";
import React from "react";
import Sidebar from "./Sidebar";

const SidebarRole = async () => {
  const session = await verifySession();
  if (!session?.userRole) return;
  return <Sidebar role={session.userRole} />;
};

export default SidebarRole;
