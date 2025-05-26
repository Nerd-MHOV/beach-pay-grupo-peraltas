import LoadingData from "@/components/LoadingData";
import Navbar from "@/components/Navbar";
import SidebarRole from "@/components/SidebarRole";
import { SidebarContextProvider } from "@/context/sidebar.context";
import { ReactNode, Suspense } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarContextProvider>
      <main className="flex">
        <SidebarRole />
        <div className="w-full max-h-screen overflow-auto transition-all duration-300">
          <Navbar />
          <Suspense fallback={<LoadingData />}>{children}</Suspense>
        </div>
      </main>
    </SidebarContextProvider>
  );
};

export default Layout;
