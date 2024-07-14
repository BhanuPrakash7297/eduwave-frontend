import React from "react";
import { Container } from "react-bootstrap";
import chooseImg from "../../../assets/images/About/choose-us-image-01.png";
import "./ChooseUs.css";
import {
  RiAwardFill,
  RiVideoUploadFill,
  RiUserFill,
  RiFlagFill,
} from "react-icons/ri";
import {AiOutlineArrowRight} from "react-icons/ai";
import { Link } from "react-router-dom";
const ChooseUs = () => {
  const feature2 = [
    {
      desc: "2000+ Verified Course",
      icon: <RiAwardFill />,
    },
    {
      desc: "256+ Free Videos",
      icon: <RiVideoUploadFill />,
    },
    {
      desc: "Expert Instructors",
      icon: <RiUserFill />,
    },
    {
      desc: "Big Student Community",
      icon: <RiFlagFill />,
    },
  ];
  return (
    <section className="edu-chooseusArea">
      <Container>
        <div className="row">
          <div className="col-lg-6">
            <div className="thumbnail">
              <img src={chooseImg} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="inner mt-md-5 mt-sm-5">
              <div className="section-title" data-aos="fade-up">
                <span className="pre-title">Why You Will Choose Guidence</span>
                <h3 className="title">
                  Creating A Community Of Life Long Learners
                </h3>
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat
              </p>
              <div className="feature-style-2">
                {feature2.map((feature, idx) => (
                  <div className="single-feature">
                    <div className="icon">{feature.icon}</div>
                    <div className="content">
                      <h6 className="feature-title">{feature.desc}</h6>
                    </div>
                  </div>
                ))}
              </div>
              <div className="main-btn mt-5">
                <Link to='/about'>Explore Courses <AiOutlineArrowRight /></Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChooseUs;
