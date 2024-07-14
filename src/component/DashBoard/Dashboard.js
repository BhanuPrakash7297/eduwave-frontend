import React, { useState } from "react";

import Sidebar from "./Sidebar/Sidebar";
import "./Dashboard.css";
import Courses from "./Courses/Courses";
import Admin from "./Admin/Admin";
import AddInstructor from "./AddInstructor/AddInstructor";
const Dashboard = () => {
  const [userSelect, setUserSelect] = useState("dashcourses");

  return (
    <section className="edu-dashboard p-0">
      <div className="row">
        <div className="col-md-2">
          <Sidebar setUserSelect={setUserSelect} />
        </div>
        <div className="col-md-9">
          {userSelect === "dashcourses" && <Courses />}
          {userSelect === "admin" && <Admin />}
          {userSelect === "addInstructor" && <AddInstructor />}
          {userSelect === "setting" && <h1>Setting</h1>}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
