import React, { useEffect, useState } from "react";
import BreadCrumb from "../Home/BreadCrumb/BreadCrumb";
import CourseList from "./Course/CourseList";
import Footer from "./../Home/Footer/Footer";
import { useCart } from "../../context/cartContext";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState();
  const [cart, setCart] = useCart();

  const getAllCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/course/course-list/:${page}`
      );
      setCourses(response?.data?.data);
      setLoading(false);
      console.log(courses);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div>
      <BreadCrumb title="Courses " currentPage="Courses " />
      <CourseList />
      <Footer />
    </div>
  );
};

export default Courses;
