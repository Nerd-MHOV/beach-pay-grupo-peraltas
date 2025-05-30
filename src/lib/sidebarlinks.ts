import { CalendarDays, Dumbbell, HandCoins, LayoutDashboard, MapPinned, Receipt, Trophy, User } from "lucide-react";

export const SidebarLinks = [
  {
    link: "/panel",
    icon: LayoutDashboard,
    title: "Home",
    role: ["admin", "operational"]
  },
  {
    link: "/calendar",
    icon: CalendarDays,
    title: "Agenda",
    role: ["admin", "operational", "teacher"]
  },
  {
    link: "/panel/members",
    icon: Dumbbell,
    title: "Membros",
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