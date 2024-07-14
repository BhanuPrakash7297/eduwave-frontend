import React from "react";
import { Container } from "react-bootstrap";
import CourseCard from "../../Courses/CourseCard/CourseCard";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
const RelatedCourse = () => {
  const [Courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://edu-vibe-server-eight.vercel.app/coures")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section className="edu-related-course">
      <Container>
        <div className="row g-5">
          <div className="col-lg-12">
            <div className="section-title" data-aos="fade-up">
              <span className="pre-title">Related Courses</span>
              <h3 className="title">Courses You May Like</h3>
            </div>
          </div>

          <Slider {...settings}>
            {Courses.map((course, idx) => (
              <CourseCard course={course} key={idx} slick="yes" />
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default RelatedCourse;
