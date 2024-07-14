import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import { RiLogoutBoxLine } from "react-icons/ri";
import "./Sidebar.css";
import { useEffect } from "react";
const Sidebar = (props) => {
  const setUserSelect = props.setUserSelect;
  const { logOut, user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch(
      `https://edu-vibe-server-eight.vercel.app/isAdmin?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length !== 0) {
          setIsAdmin(true);
        }
      });
  }, [user]);
  return (
    <section className="sidebar-left p-0">
      <h4>Dashboard</h4>

      <ul>
        <li>
          <p to="#" onClick={() => setUserSelect("dashcourses")}>
            Courses
          </p>
        </li>
        {isAdmin && (
          <>
            <li>
              <p to="#" onClick={() => setUserSelect("admin")}>
                Admin
              </p>
            </li>
            <li>
              <p to="/" onClick={() => setUserSelect("addInstructor")}>
                Add Instructor
              </p>
            </li>
          </>
        )}

        <li>
          <p to="/" onClick={() => setUserSelect("setting")}>
            Setting
          </p>
        </li>
      </ul>

      <button className="logoutBtn" onClick={logOut}>
        <RiLogoutBoxLine /> LogOut
      </button>
    </section>
  );
};

export default Sidebar;
