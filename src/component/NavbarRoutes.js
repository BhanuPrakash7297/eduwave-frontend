import { LogOut, User } from "lucide-react";
import React from "react";
import { Link, Router, useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { SearchInput } from "./AdminSearch/SearchInput";

const NavbarRoutes = () => {
  const pathname = useLocation().pathname;
  const Navigate = useNavigate();
  const isTeacher = pathname?.startsWith("/admin/teacher");
  const isPlayerPage = pathname?.includes("/chapter");
  const isSearchPage = pathname?.includes("/search");
  const isTeacherPage =
    pathname?.startsWith("/teacher") || pathname?.startsWith("/admin/teacher");
  const isCreatingCourse = pathname?.includes("/admin/search");
  console.log(isSearchPage);
  console.log(pathname);
  return (
    <>
      <div className="flex items-center justify-center gap-5">
        {isSearchPage && (
          <div className="hidden md:block">
            <SearchInput />
          </div>
        )}

        {isCreatingCourse && (
          <Button
            variant="contained"
            color="secondary"
            sx={{ backgroundColor: "green" }}
            onClick={() => Navigate("/admin/teacher/create-course")}
          >
            create-course
          </Button>
        )}
      </div>

      <div className="flex gap-x-2 ml-auto items-center">
        {isTeacherPage || isPlayerPage ? (
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              sx={{ backgroundColor: "black" }}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher ? (
          <Link to="/admin/teacher/courses">
            <Button variant="contained" color="secondary">
              Teacher Mode
            </Button>
          </Link>
        ) : null}
        <User />
      </div>
    </>
  );
};

export default NavbarRoutes;
