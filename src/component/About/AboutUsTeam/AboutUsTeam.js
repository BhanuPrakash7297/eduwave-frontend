import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AboutUsTeam.css";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { AllInstructor } from "../../../FakeData";
const AboutUsTeam = () => {
  return (
    <section className="edu-about-team-1">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center" data-aos="fade-up">
              <span className="pre-title">Testimonial</span>
              <h3 className="title">What Our Student Says</h3>
            </div>
          </div>
        </div>
        <div className="row row--20">
          {AllInstructor.map((instructor, idx) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
              <div className="edu-instructor-grid">
                <div className="edu-instructor">
                  <div className="inner">
                    <div className="thumbnail">
                      <Link to='/about'><img src={instructor.profilePic} alt="" /></Link>
                    </div>
                    <div className="team-share-info">
                      <a href="/about">
                        <FaLinkedinIn />
                      </a>
                      <a href="/about">
                        <FaFacebookF />
                      </a>
                      <a href="/about">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="edu-instructor-info-1 mt-5">
                  <h5 className="title">{instructor.name}</h5>
                  <span className="desc">{instructor.degination}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutUsTeam;
