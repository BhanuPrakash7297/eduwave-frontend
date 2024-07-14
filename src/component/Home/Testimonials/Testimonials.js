import React from "react";
import { Container } from "react-bootstrap";
import "./Testimonials.css";
import testimonialthumb from "../../../assets/images/testimonial-01.jpg";
import trophyIcon from "../../../assets/images/trophy.png";
import qoute from "../../../assets/images/quote.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { comments } from "../../../FakeData";
import shap13 from "../../../assets/images/shape-13.png";
import shap14 from "../../../assets/images/shape-13-01.png";
import shap15 from "../../../assets/images/shape-04.png";
import shap16 from "../../../assets/images/shape-02-01.png";
const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 20000,
    pauseOnHover: true,
  };
  return (
    <section className="testimonials">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center" data-aos="fade-up">
              <span className="pre-title">Testimonial</span>
              <h3 className="title">What Our Student Says</h3>
            </div>
          </div>
          <div className="row mt-5 pt-3">
            <div className="col-lg-6 col-12">
              <div className="setisfied-learner">
                <div className="thumbnail">
                  <img src={testimonialthumb} alt="" />
                </div>
                <div className="trophy-content">
                  <div className="icon">
                    <img src={trophyIcon} alt="" />
                  </div>
                  <div className="content">
                    <h6 className="text">50K+</h6>
                    <span>Satisfied Learners</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 g-5">
              <Slider {...settings}>
                {comments.map((comment, idx) => (
                  <div key={idx} data-aos="fade-up">
                    <div className="single-testimonials">
                      <div className="inner">
                        <div className="qoute-sign">
                          <img src={qoute} alt="" />
                        </div>
                        <p className="description">{comment.clientcomment}</p>
                        <div className="client-info">
                          <div className="thumb">
                            <img src={comment.clientPP} alt="" />
                          </div>
                          <div className="info">
                            <h5 className="title">{comment.clientName}</h5>
                            <span className="degignation">
                              {comment.clientdegi}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="shape-wrapper d-xl-block d-none">
            <div className="shap-image shape-image-1">
              <img src={shap13} alt="" />
            </div>
            <div className="shap-image shape-image-2">
              <img src={shap14} alt="" />
            </div>
            <div className="shap-image shape-image-3">
              <img src={shap15} alt="" />
            </div>
            <div className="shap-image shape-image-4">
              <img src={shap16} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
