import React from "react";
import { Container } from "react-bootstrap";
import aboutGallaryImg1 from "../../../assets/images/about-image-01.jpg";
import aboutGallaryImg2 from "../../../assets/images/about-image-02.jpg";
import badgeImg from "../../../assets/images/badge.png";
import shapeImg from "../../../assets/images/shape-04-01.png";
import shape7 from "../../../assets/images/shape-07.png";
import { FiBookOpen, FiHome } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./AboutUsSection.css";
const AboutUsSection = () => {
  return (
    <section className="edu-aboutus" id="eduabout">
      <Container>
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="about-image-gallary">
              <img src={aboutGallaryImg1} alt="" className="image1" />
              <img src={aboutGallaryImg2} alt="" className="image2" />
              <div className="badge_inner">
                <img src={badgeImg} alt="" className="image3" />
              </div>
              <div className="shape-img shape-Img-1">
                <img src={shapeImg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="inner pt-md-5 pt-sm-5 pt-0">
              <div className="section-title " data-aos="fade-up">
                <span className="pre-title">About us</span>
                <h3 className="title" data-aos="fade-up">
                  Creating A Community Of Life Long Learners
                </h3>
              </div>
              <p className="description" data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nunc null liobortis nibh porttitor. Facilisi arcu, nibh vel
                risus, morbi pharetra.
              </p>
              <div className="about-us-Feature">
                <div className="ourfeature " data-aos="fade-up">
                  <div className="icon">
                    <FiBookOpen />
                  </div>
                  <div className="feature-content">
                    <h6 className="feature-title">Flexible Classes</h6>
                    <p className="feature-description">
                      It is a long established fact that a reader will be
                      distracted by this on readable content of when looking at
                      its layout.
                    </p>
                  </div>
                </div>
                <div className="ourfeature" data-aos="fade-up">
                  <div className="icon">
                    <FiHome />
                  </div>
                  <div className="feature-content">
                    <h6 className="feature-title">Learn From Anywhere</h6>
                    <p className="feature-description">
                      It is a long established fact that a reader will be
                      distracted by this on readable content of when looking at
                      its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="main-btn" data-aos="fade-up">
                <a href="/home">
                  Know About Us
                  <AiOutlineArrowRight />
                </a>
              </div>
              <div className="about-paralax-2 d-xl-block d-none">
                <img src={shape7} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;
