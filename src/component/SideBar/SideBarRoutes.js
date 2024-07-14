import { BarChart, Compass, Layout, List } from "lucide-react";
import React from "react";
import SidebarItem from "./SidebarItem";
import { useLocation } from "react-router-dom";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/admin/search",
  },
];
const teacherRoutes = [
  {
    icon: List,
    label: "courses",
    href: "/admin/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/admin/teacher/analytics",
  },
];

const SideBarRoutes = () => {
  const pathname = useLocation().pathname;

  const isTeacherPage = pathname.includes("/teacher");
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;
  
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SideBarRoutes;
