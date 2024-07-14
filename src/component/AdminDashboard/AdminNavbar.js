import React from "react";

import NavbarRoutes from "../NavbarRoutes";
import AdminTeacherMobileSidebar from "./AdminMobileTeacherSideBar";

const AdminNavbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <AdminTeacherMobileSidebar />

      <NavbarRoutes />
    </div>
  );
};

export default AdminNavbar;
