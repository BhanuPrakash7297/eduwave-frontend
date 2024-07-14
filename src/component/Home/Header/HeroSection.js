import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import { RiFileList3Line, RiTimeLine } from "react-icons/ri";
import thumnail from "../../../assets/images/banner-course.jpg";
import workshopThumb from "../../../assets/images/workshop.png";
import videoThumb from "../../../assets/images/video-image.png";
import shape1 from "../../../assets/images/shape-01.png";
import shape2 from "../../../assets/images/shape-02.png";
import shape3 from "../../../assets/images/shape-03.png";
import shape4 from "../../../assets/images/shape-04.png";
import shape5 from "../../../assets/images/shape-05.png";
import shape6 from "../../../assets/images/shape-05-05.png";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <section className="banner-area">
      <Container className="">
        <div className="row">
          <div className="col-lg-6 col-md-12 order-2 order-xl-1 align-items-center">
            <div className="banner-content-left">
              <span className="pre-title">Excellence in Education</span>
              <h1 className="title animate__animated animate__fadeInUp">
                Start Better Learning Future From Here
              </h1>
              <p className="description animate__animated animate__fadeInUp">
                Learning is a life-long journey that in fact we never find the
                terminate stop. Stop searching, enjoy the process
              </p>
              <div className="main-btn animate__animated animate__fadeInUp">
                <Link to="/home">
                  Get Started Today <AiOutlineArrowRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-1 order-xl-2 banner-right-content">
            <div className="row g-5">
              <div className="col-md-6 col-sm-12">
                <div className="edu-card radius-small animate__animated animate__fadeInUp">
                  <div className="thumbnail ">
                    <Link href="/courseDetails2">
                      <img src={thumnail} alt="" className="w-100" />
                    </Link>
                    <div className="status-group">
                      <span className="edu-status">UI Design</span>
                    </div>
                  </div>
                  <div className="content">
                    <ul className="edumeta">
                      <li>
                        <RiFileList3Line />
                        39 Lessons
                      </li>
                      <li>
                        <RiTimeLine />8 Hours 28 min
                      </li>
                    </ul>
                    <h6 className="title">
                      Learning How To Write As A Professional Author
                    </h6>
                    <div className="card-bottom">
                      <p>
                        Nunc laoreet, lectue dapibus maximus sapien and
                        tincidunted nequed for an finibu euarcu.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="workShop animate__animated animate__fadeInUp">
                  <div className="thumbnail">
                    <img src={workshopThumb} alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">Design Workshop</h6>
                    <span className="time">Today at 6:00 am</span>
                    <div className="small-btn">
                      <Link to="/">
                        Join Now <AiOutlineArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="eduvi-hero-video animate__animated animate__fadeInUp">
                  <div className="thumbnail">
                    <img src={videoThumb} alt="" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="shap-dot-wraper">
              <div className="shape shape-1">
                <img src={shape1} alt="" />
              </div>
              <div className="shape shape-2">
                <img src={shape2} alt="" />
              </div>
              <div className="shape shape-3">
                <img src={shape3} alt="" />
              </div>
              <div className="shape shape-4">
                <img src={shape4} alt="" />
              </div>
              <div className="shape shape-5">
                <img src={shape5} alt="" />
              </div>
              <div className="shape shape-6">
                <img src={shape6} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-down-btn">
          <a href="#eduabout">
            <SlArrowDown />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
