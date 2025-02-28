"use client";
import { useSidebar } from "@/context/sidebar.context";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Dumbbell,
  HandCoins,
  LayoutDashboard,
  LogOut,
  MapPinned,
  Menu,
  Receipt,
  Trophy,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { deleteSession } from "@/lib/session";

const links = [
  {
    link: "/panel",
    icon: LayoutDashboard,
    title: "Home",
  },
  {
    link: "/panel/athletes",
    icon: Dumbbell,
    title: "Atletas",
  },
  {
    link: "/panel/investments",
    icon: HandCoins,
    title: "Investimentos",
  },
  {
    link: "/panel/investment-types",
    icon: Receipt,
    title: "Tipos",
  },
  {
    link: "/panel/tournaments",
    icon: Trophy,
    title: "Torneios",
  },
  {
    link: "/panel/arenas",
    icon: MapPinned,
    title: "Arenas",
  },
];

const Sidebar = () => {
  const { activeSidebar, dispatch } = useSidebar();
  const pathname = usePathname();

  const logout = async () => {
    await deleteSession();
  };
  return (
    <div
      className={cn(
        "h-screen transition-all duration-500 bg-slate-900 absolute md:static sm:static overflow-x-hidden",
        activeSidebar
          ? "min-w-full md:min-w-80 sm:min-w-80 relative"
          : "min-w-0 md:min-w-16"
      )}
    >
      <div className="w-full relative h-screen">
        <ul className="absolute w-full h-full flex flex-col gap-2 ">
          <li className="list-none mb-12 pointer-events-none mt-1 relative">
            <Link
              href="/panel"
              className="flex whitespace-nowrap items-center  "
            >
              <span className="top-3 left-3 absolute ">
                <Image src="/images/GP.png" alt="Logo" width={35} height={35} />
              </span>
              <span className=" mt-4 ml-[70px] font-bold text-2xl text-white">
                Beach Pay
              </span>
            </Link>
          </li>

          {links.map((link, index) => (
            <li
              key={index}
              className={cn(
                "list-none rounded-l-full w-full text-white relative ",
                pathname === link.link ||
                  (pathname?.includes(link.link) && link.link !== "/panel")
                  ? `bg-background text-slate-900 
                                before:content-[" "] before:absolute before:right-0 
                                before:w-12 before:h-12 before:rounded-full before:pointer-events-none
                                before:top-[-48px] before:shadow-[35px_35px_0_10px] before:shadow-background

                                after:content-[" "] after:absolute after:right-0
                                after:w-12 after:h-12 after:rounded-full after:pointer-events-none
                                after:bottom-[-48px] after:shadow-[35px_-35px_0_10px] after:shadow-background
                           
                            `
                  : "hover:text-gray-300"
              )}
            >
              <Link
                href={link.link}
                className={cn("flex items-center gap-5 w-full relative")}
                onClick={() => dispatch!({ type: "OPEN" })}
              >
                <span className="relative ml-4">
                  <link.icon className="ml-1" width={22} height={22} />
                </span>
                <span className="py-3 ml-2 whitespace-normal text-lg">
                  {link.title}
                </span>
              </Link>
            </li>
          ))}
          <li className="flex-grow"></li>
          <li
            className="flex cursor-pointer items-center bg-[##060814] max-w-f gap-5 w-full text-white py-3 hover:text-gray-300"
            onClick={() => {
              logout();
            }}
          >
            <span className="relative ml-5 ">
              <LogOut width={22} height={22} />
            </span>
            <span className="py-1 ml-20 whitespace-normal text-lg">sair</span>
          </li>
        </ul>
        <span
          className="flex text-white sm:hidden h-14 w-14 top-0 absolute right-0 items-center justify-center cursor-pointer transition-all duration-500"
          onClick={() => dispatch!({ type: "TOGGLE" })}
        >
          <Menu height={25} width={25} />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
