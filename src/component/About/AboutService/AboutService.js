import React from "react";
import { Container } from "react-bootstrap";
import shape1 from "../../../assets/images/About/feature-icon-01.png";
import shape2 from "../../../assets/images/About/feature-icon-02.png";
import shape3 from "../../../assets/images/About/feature-icon-03.png";
import { Service2 } from "../../../FakeData";
import "./AboutService.css";
const AboutService = () => {
  return (
    <section className="eduvibe-aboutus-section">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center " data-aos="fade-up">
              <span className="pre-title">What We Offer</span>
              <h3 className="title">
                Learn New Skills When And <br />
                Where You Like
              </h3>
            </div>
          </div>
        </div>
        <div className="row gy-5 mt-5">
          {Service2.map((service, idx) => (
            <div className="col-lg-3 col-md-6 col-12" key={idx}>
              <div className="service-card-2 text-center">
                <div className="inner">
                  <div className="icon">
                    <a href="/">
                      {" "}
                      <img src={service.icon} alt="" />
                    </a>
                    <div className="shape-list">
                      <img src={shape1} alt="" className="shape shape-1" />
                      <img src={shape2} alt="" className="shape shape-2" />
                      <img src={shape3} alt="" className="shape shape-3" />
                    </div>
                  </div>
                  <div className="content">
                    <h6 className="title">{service.title}</h6>
                    <p className="description">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutService;
