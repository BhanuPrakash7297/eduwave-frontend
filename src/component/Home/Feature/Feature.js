import React from "react";
import { Container } from "react-bootstrap";
import { featureClass } from "../../../FakeData";
import { FaPlay } from "react-icons/fa";
import chooseUsImg from "../../../assets/images/choose-us-image-01.jpg";
import "./Feature.css";
const Feature = () => {
  return (
    <section className="edu-feature-area">
      <Container>
        <div className="row">
          <div className="col-lg-5 col-12 order-2 order-lg-1">
            <div className="inner mt-md-5 mt-lg-0">
              <div className="section-title" data-aos="fade-up">
                <span className="pre-title">Why Choose US</span>
                <h3 className="title">Our Core Features</h3>
              </div>
              <div className="feature-list-wrapper">
                {featureClass.map((feature, idx) => {
                  return (
                    <div className="feature-list" key={idx} data-aos="fade-up">
                      <div className="icon">
                        <feature.icon />
                      </div>
                      <div className="content">
                        <h5 className="title">{feature.title} </h5>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12 order-1 order-lg-2">
            <div className="feature-thumbnail" data-aos="fade-up">
              <div className="main-image video-popup-wraper">
                <img src={chooseUsImg} alt="" />

                <button className="video-play-btn">
                  <FaPlay />
                </button>
              </div>
              <div className="circle-image">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Feature;
