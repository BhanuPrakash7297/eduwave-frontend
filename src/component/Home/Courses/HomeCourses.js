import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CourseCard from "./CourseCard";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./HomeCourses.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useCart } from "../../../context/cartContext";
const HomeCourses = () => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState();
  const [cart,setCart]=useCart();

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

  const getCount = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/course/get-course-count`
      );
      setTotal(response?.data?.count);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCourses();
    getCount();
  }, []);

  const loadMore = async () => {
    try {
      console.log(page);
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/course/course-list/${page}`
      );
      console.log(page);
      console.log(response?.data?.data);
      setCourses([...courses, ...response?.data?.data]);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong here");
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);



  return (
    <section className="edu-home-course">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center " data-aos="fade-up">
              <span className="pre-title">Popular Courses</span>
              <h3 className="title">Featured On This Month</h3>
            </div>
          </div>
          <div className="row gy-5 mt-5">
            {courses?.map((course, idx) => (
              <CourseCard course={course} key={course._id} data-aos="fade-up" />
            ))}
          </div>
          <div className="col-lg-12 mt-5 pt-5">
            <div className="main-btn text-center">
              {courses && courses?.length < total && (
                <button
                  className="btn btn-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? "Loading" : "LoadMore"}
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeCourses;
