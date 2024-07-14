import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  Layout,
  Compass,
  List as ListIcon,
  BarChart,
  BarChart2,
  LucideLayoutDashboard,
  MenuIcon,
  X,
} from "lucide-react"; // Adjust imports based on your icon library
import TeacherCourseSideBar from "./TeacherCourseSideBar";

const CourseMobileSidebar = ({ course, progressCount }) => {
  const isSmScreen = useMediaQuery("(max-width: 640px)");
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      {isSmScreen && (
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
      )}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "60%",
            height: "100%",
          },
        }}
      >
        <TeacherCourseSideBar course={course} progressCount={progressCount} />
      </Drawer>
    </div>
  );
};

export default CourseMobileSidebar;
