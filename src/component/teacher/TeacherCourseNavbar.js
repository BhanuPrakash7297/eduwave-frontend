import React from "react";
import NavbarRoutes from "../NavbarRoutes";
import CourseMobileSidebar from "./CourseMobileSidebar";

export const TeacherCourseNavbar = ({ course, progressCount }) => {
  return (
    <div className="p-4 border-b h-full flex items-center shadow-sm ">
      <CourseMobileSidebar course={course} progressCount={progressCount} />
      <NavbarRoutes />
    </div>
  );
};
