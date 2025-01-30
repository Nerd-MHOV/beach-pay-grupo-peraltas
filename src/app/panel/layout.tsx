import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { SidebarContextProvider } from "@/context/sidebar.context";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarContextProvider>
      <main className="flex">
        <Sidebar />
        <div className="w-full max-h-screen overflow-auto transition-all duration-300">
          <Navbar />
          {children}
        </div>
      </main>
    </SidebarContextProvider>
  );
};

export default Layout;
