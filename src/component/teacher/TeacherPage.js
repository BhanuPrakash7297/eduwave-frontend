import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TeacherPage = () => {
  const Navigate = useNavigate();

  return (
    <div className="p-6">
      <Button onClick={() => Navigate("/admin/teacher/create-course")}>
        create Course
      </Button>
      
    </div>
  );
};

export default TeacherPage;
