import React from "react";
import { Container } from "react-bootstrap";
import { CourseCategory } from "../../../FakeData";
import "./HomeCategory.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const HomeCategory = () => {
  return (
    <section className="home-edu-category">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center" data-aos="fade-up">
              <span className="pre-title">About us</span>
              <h3 className="title">Popular Topics To Learn</h3>
            </div>
          </div>
          <div className="mt-5 row">
            {CourseCategory.map((course, idx) => (
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-12 g-5"
                key={idx}
                data-aos="fade-up"
              >
                <div className="service-card radius-small">
                  <div className="inner">
                    <div className="thumbnail">
                      <a href="/home">
                        <img src={course.thumbnail} alt="" />
                      </a>
                    </div>
                    <div className="content">
                      <span className="course-total">
                        {course.totalCourse} Courses
                      </span>
                      <h6 className="title">{course.name}</h6>
                      <p className="description">{course.shortDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-12 mt-5 pt-5">
            <div className="main-btn text-center">
              <a href="/home">All Categories</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeCategory;
