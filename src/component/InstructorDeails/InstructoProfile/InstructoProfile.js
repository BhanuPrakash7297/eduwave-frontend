import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import { Container } from "react-bootstrap";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import { Line } from "rc-progress";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./InstructorProfile.css";
import CourseCard from "../../Courses/CourseCard/CourseCard";
const InstructoProfile = ({ name }) => {
  const [Courses, setCourses] = useState([]);
  const [authorInfo, setAuthInfo] = useState({});
  const [skills, setSkills] = useState({});
  useEffect(() => {
    fetch("https://edu-vibe-server-eight.vercel.app/coures")
      .then((res) => res.json())
      .then((data) => {
        const course = data.filter((course) => course.author.name === name);
        setCourses(course);
      });

    fetch(`https://edu-vibe-server-eight.vercel.app/instructor?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setAuthInfo(data[0]);
        setSkills(data[0].skills);
      });
  }, [name]);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section className="edu-instructor-profile">
      <Container>
        <div className="row g-5">
          <div className="col-lg-4 pe-5">
            <div className="instructorProfile-left">
              <div className="inner">
                <div className="thumbnail">
                  <img src={authorInfo.profilePic} alt="" />
                </div>
                <div className="content">
                  <h5 className="title">{authorInfo.name}</h5>
                  <span className="subtitle">{authorInfo.degination}</span>
                  <div className="contact-info">
                    <p>
                      <span>Email:</span>
                      <a href={`mailto:${authorInfo.email}`}>
                        {authorInfo.email}
                      </a>
                    </p>
                    <p>
                      <span>Phone:</span>
                      <a href={`tel:${authorInfo.phone}`}>{authorInfo.phone}</a>
                    </p>
                  </div>
                  <div className="contact-with-info ">
                    <span>Share:</span>
                    <a href="/about">
                      <FaLinkedinIn />
                    </a>
                    <a href="/about">
                      <FaFacebookF />
                    </a>
                    <a href="/about">
                      <FaPinterestP />
                    </a>
                    <a href="/about">
                      <FaTwitter />
                    </a>
                  </div>
                  <div className="contact-btn">
                    <a href="/" className="edu-btn">
                      Contact Me <AiOutlineArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="instructor-profile-right">
              <div className="inner">
                <div className="section-title " data-aos="fade-up">
                  <span className="pre-title">About Me</span>
                  <h3 className="title">Hello, I’m {authorInfo.name}</h3>
                  <p className="description mt-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="edu-skillset mt-5">
                  <div className="section-title " data-aos="fade-up">
                    <span className="pre-title">Skillset</span>
                    <h3 className="title">Courses Progress</h3>
                  </div>
                </div>
                <div className="edu-progress-bar row g-5 mt-4">
                  <div className="col-lg-6">
                    <div className="single-progress">
                      <div className="title-wrapper d-flex justify-content-between">
                        <h6 className="title">{skills.firstSkill}</h6>
                        <span>{skills.firstProgress}%</span>
                      </div>
                      <Line
                        percent={skills.firstProgress}
                        strokeWidth={2}
                        strokeColor="#525fe1"
                        trailWidth={2}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-progress">
                      <div className="title-wrapper">
                        <h6 className="title">{skills.secondSkill}</h6>
                        <span>{skills.secondProgress}%</span>
                      </div>
                      <Line
                        percent={skills.secondProgress}
                        strokeWidth={2}
                        trailWidth={2}
                        strokeColor="#525fe1"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-progress">
                      <div className="title-wrapper">
                        <h6 className="title">{skills.thirdSkill}</h6>
                        <span>{skills.thirdProgress}%</span>
                      </div>
                      <Line
                        percent={skills.thirdProgress}
                        strokeWidth={2}
                        trailWidth={2}
                        strokeColor="#525fe1"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-progress">
                      <div className="title-wrapper">
                        <h6 className="title">{skills.fourthSkill}</h6>
                        <span>{skills.fourthProgress}%</span>
                      </div>
                      <Line
                        percent={skills.fourthProgress}
                        strokeWidth={2}
                        strokeColor="#525fe1"
                        trailWidth={2}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-statistic-wrapper radius-small mt-5 py-5 text-center">
                <div className="row align-items-center g-5">
                  <div className="col-lg-4 col-md-6 col-12 line-separator">
                    <div className="course-statsitic">
                      <span className="total">{Courses.length}</span>
                      <p>COURSE AUTHOR</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 line-separator">
                    <div className="course-statsitic">
                      <span className="total">{authorInfo.totalrating}</span>
                      <p>TOTAL RATING</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 line-separator">
                    <div className="course-statsitic">
                      <span className="total">{authorInfo.averageRaing}</span>
                      <p>AVE. RATING</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="edu-course-wrapper pt-5">
                <div className="section-title " data-aos="fade-up">
                  <span className="pre-title">Courses</span>
                  <h3 className="title">Course By : {authorInfo.name}</h3>
                </div>
                <div className="instructor-profile-course pt-5">
                  <Slider {...settings}>
                    {Courses.map((course, idx) => (
                      <div>
                        <CourseCard course={course} key={idx} slick="yes" />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InstructoProfile;
