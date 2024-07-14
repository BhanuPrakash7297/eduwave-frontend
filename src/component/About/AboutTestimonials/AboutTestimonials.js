import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Stars from "../../Home/Courses/Stars";
import { AboutComment } from "./../../../FakeData";
import "./AboutTestimonials.css";
const AboutTestimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="edu-about-testimonials-section">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center" data-aos="fade-up">
              <span className="pre-title">Testimonial</span>
              <h3 className="title">Our Lovely Students Feedback</h3>
            </div>
          </div>
          <div className="edu-testimonial-slick">
            <Slider {...settings}>
              {AboutComment.map((comment, idx) => (
                <div className="testimonials-card-box">
                  <div className="inner">
                    <div className="client-info">
                      <div className="thumbnail">
                        <img src={comment.img} alt="" />
                      </div>
                      <div className="content">
                        <h6 className="title">{comment.name}</h6>
                        <span className="designation">{comment.degi}</span>
                      </div>
                    </div>
                    <p className="description">" {comment.comment} "</p>
                    <Stars rating={comment.star} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutTestimonials;
