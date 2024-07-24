import React, { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import "./mediaQuery.css";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./component/About/About";
import Login from "./component/Home/Login/Login";
import Home from "./component/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrolledToTop from "./component/ScrolledToTop/ScrolledToTop";
import Courses from "./component/Courses/Courses";
import CourseDetails from "./component/CourseDetails/CourseDetails";
import InstructorDeails from "./component/InstructorDeails/InstructorDeails";
import Faq from "./component/Faq/Faq";
import NavBar from "./component/Home/Header/NavBar";
import Blogs from "./component/Blogs/Blogs";
import Contact from "./component/Contact/Contact";
import Dashboard from "./component/DashBoard/Dashboard";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import AdminDashboard from "./component/AdminDashboard/AdminDashboard";
import TeacherPage from "./component/teacher/TeacherPage";
import AdminNavbar from "./component/AdminDashboard/AdminNavbar";
import AdminSearch from "./component/AdminSearch/AdminSearch";
import SideBar from "./component/SideBar/SideBar";
import { Navbar } from "react-bootstrap";
import CreateCourse from "./component/AdminDashboard/Teacher/Createcourse";
import Course from "./component/Courses/Course/Course";
import ChapterIdPage from "./component/Courses/chapters/ChapterIdPage";
import CourseIdDetailPage from "./component/teacher/CourseIdDetailPage";
import TeacherCourseSideBar from "./component/teacher/TeacherCourseSideBar";
import { TeacherCourseNavbar } from "./component/teacher/TeacherCourseNavbar";
import { AuthContext } from "./component/Context/UserContext";
import axios from "axios";
import CourseChapterId from "./component/teacher/chapters/CourseChapterId";
import { ProgressProvider, useProgressContext } from "./context/ProgressContex";
import UserDashboard from "./component/UserDashboard";
import Cart from "./component/Cart/Cart";

const UserDashboardLayout = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-10">
        <div className="h-full w-full">
          <AdminNavbar />
          <Routes>
            <Route path="/dashboard" element={<UserDashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const AdminLayout = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-10">
        <div className="hidden sm:flex h-full w-56 flex-col fixed inset-y-0 z-50">
          <SideBar />
        </div>
        <div className="md:pl-56 h-full w-full">
          <AdminNavbar />
          <Routes>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/search" element={<AdminSearch />} />
            <Route path="/teacher/courses" element={<TeacherPage />} />
            <Route path="/teacher/create-course" element={<CreateCourse />} />
            <Route path="/teacher/:courseId" element={<Course />} />
            <Route path="/teacher/analytics" element={<div>analytics</div>} />
            <Route
              path="/teacher/courses/:courseId/chapters/:chapterId"
              element={<ChapterIdPage />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};
const AdminTeacherLayout = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-10">
        <div className="h-full w-full">
          <AdminNavbar />
          <div className="m-5">
          <Routes>
            <Route path="/courses" element={<TeacherPage />} />
            <Route path="/create-course" element={<CreateCourse />} />
            <Route path="/:courseId" element={<Course />} />
            <Route path="/analytics" element={<div>analytics</div>} />
            <Route
              path="/courses/:courseId/chapters/:chapterId"
              element={<ChapterIdPage />}
            />
          </Routes>
          </div>
       
        </div>
      </div>
    </div>
  );
};

// User Layout Component
const UserLayout = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courseDetails/:id" element={<CourseDetails />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/author/:name" element={<InstructorDeails />} />
      </Routes>
    </div>
  );
};

const TeacherLayout = () => {
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [progressCount, setProgressCount] = useState(0);
  const getProgressCount = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/progress/get-progress`,
        {
          params: {
            userId: user?.email,
            courseId,
          },
        }
      );

      setProgressCount(response?.data?.data);
    } catch (error) {
      console.error("Error fetching progress count:", error);
    } finally {
      setLoading(false);
    }
  };

  const getCourse = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/course/${courseId}`
      );
      console.log(response.data);
      setCourse(response?.data?.courseData);
      console.log(course);
      setError("Failed to load course data.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleProgressCountChange = () => {
    getProgressCount();
  };

  useEffect(() => {
    getCourse();
    getProgressCount();
  }, [courseId, user?.email]);

  return (
    <>
      {course && (
        <div className="flex flex-col">
          <div className="flex gap-10">
            <div className="hidden sm:flex h-full w-80 flex-col fixed inset-y-0 z-50">
              <TeacherCourseSideBar
                course={course[0]}
                progressCount={progressCount}
              />
            </div>
            <div className="md:pl-80 h-full w-full">
              <div>
                <TeacherCourseNavbar course={course[0]} currentProfile={user} />
              </div>

              <Routes>
                <Route path="/" element={<CourseIdDetailPage />} />
                <Route
                  path="chapters/:chapterId"
                  element={
                    <CourseChapterId
                      onProgressCountChange={handleProgressCountChange}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const SearchRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminSearch />} />
      <Route path="content" element={<div>Search Content Sub-route</div>} />
    </Routes>
  );
};

const App = () => {
  AOS.init({
    offset: 150,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  // Get the current location (pathname) using useLocation hook
  const location = useLocation();

  // List of routes where NavBar should be displayed
  const navBarRoutes = [
    "/",
    "/home",
    "/login",
    "/about",
    "/courses",
    "/courseDetails/:id",
    "/faq",
    "/blog",
    "/contact",
    "/dashboard",
    "/author/:name",
  ];
  const adminNavbarRoutes = ["/teacher/courses"];

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/admin/teacher/*" element={<AdminTeacherLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/*" element={<UserLayout />} />
        <Route path="/user/*" element={<UserDashboardLayout />} />

        <Route
          path="/user/details/courses/:courseId/*"
          element={<TeacherLayout />}
        />
      </Routes>
      <ScrolledToTop />
    </>
  );
};

export default App;
