import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CourseCard from "../CourseCard/CourseCard";
import { useCart } from "../../../context/cartContext";
import axios from "axios";
const CourseList = () => {

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
    <section className="edu-course-area">
      <Container>
        <div className="row g-5 mt-3">
          {courses?.map((course, idx) => (
            <CourseCard course={course} key={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CourseList;
