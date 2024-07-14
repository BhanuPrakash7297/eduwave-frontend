import React from "react";
import SideBar from "../SideBar/SideBar";
import AdminNavbar from "./AdminNavbar";

const AdminDashboard = () => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
           <AdminNavbar/>
      </div>
      <div className="hidden sm:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <SideBar/>
      </div>
    </div>
  );
};

export default AdminDashboard;
