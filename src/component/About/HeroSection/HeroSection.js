import React from "react";
import { Container } from "react-bootstrap";
import eduImg1 from "../../../assets/images/about-image-01.png";
import eduImg2 from "../../../assets/images/about-image-02.png";
import eduImg_blur from "../../../assets/images/about-blur.png";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const HeroSection = () => {
  return (
    <section className="about-hero-section">
      <Container>
        <div className="row">
          <div className="col-lg-6">
            <div className="about-image-gallary">
              <div className="eduvibe-image-1">
                <img src={eduImg1} alt="" className="image-1" />
                <span className="eduvibe-img-blur">
                  <img src={eduImg_blur} alt="" />
                </span>
              </div>
              <div className="circle-img-wrapper">
                <img src={eduImg2} alt="" className="image-2" />
                <div className="circle-imm">
                  <span></span>
                </div>
              </div>
              <div className="finished-session">
                <div className="inner">
                  <div className="text">2.98</div>
                  <span className="finished-title">
                    Finished <br /> Session
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-md-5 mt-sm-5 mt-0">
            <div className="inner">
              <div className="section-title text-start " data-aos="fade-up">
                <span className="pre-title">About Us</span>
                <h3 className="title">
                  Knowledge is power, Information is liberating.
                </h3>
              </div>
              <p className="description mt-5 mt-md-5 mt-sm-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                venenatis dictum et nec. Fringilla dictum tristique cras
                pellentesque consequat.
              </p>
              <h6 className="subtitle">People Love To Learn With Us</h6>
              <div className="about-feature-list">
                <div className="row g-5">
                  <div className="col-lg-6">
                    <div className="feature-style-3">
                      <h6 className="feature-title">90%</h6>
                      <p className="feature-des">
                        90% of students see their course through to completion.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-style-3">
                      <h6 className="feature-title">9/10</h6>
                      <p className="feature-des">
                        9/10 users reported better learning outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-btn">
                <Link to="/about">
                  Learn More <AiOutlineArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
