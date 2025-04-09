import { Dumbbell, HandCoins, LayoutDashboard, MapPinned, Receipt, Trophy, User } from "lucide-react";

export const SidebarLinks = [
  {
    link: "/panel",
    icon: LayoutDashboard,
    title: "Home",
    role: ["admin", "operational", "teacher"]
  },
  {
    link: "/panel/athletes",
    icon: Dumbbell,
    title: "Atletas",
    role: ["admin", "operational"]
  },
  {
    link: "/panel/investments",
    icon: HandCoins,
    title: "Investimentos",
    role: ["admin", "operational"]
  },
  {
    link: "/panel/investment-types",
    icon: Receipt,
    title: "Tipos",
    role: ["admin"]
  },
  {
    link: "/panel/tournaments",
    icon: Trophy,
    title: "Torneios",
    role: ["admin", "operational"]
  },
  {
    link: "/panel/arenas",
    icon: MapPinned,
    title: "Arenas",
    role: ["admin", "operational"]
  },
  {
    link: "/panel/users",
    icon: User,
    title: "Usuarios",
    role: ["admin"]
  },
];