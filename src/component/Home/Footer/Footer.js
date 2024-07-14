import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo-white.png";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { RiPhoneFill, RiMailOpenLine } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="edu-footer">
      <section className="footer-top">
        <Container>
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="edu-footer-widget">
                <div className="logo">
                  <Link to="/home">
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <p className="description">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum.
                </p>
                <ul className="social-share">
                  <li>
                    <Link to="#">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaPinterestP />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaTwitter />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="edu-footer-widget explore-widget">
                <h5 className="widget-titil">Explore</h5>
                <div className="inner">
                  <ul className="footer-link">
                    <li>
                      <Link to="/home">
                        <FaAngleDoubleRight />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/home">
                        <FaAngleDoubleRight />
                        Upcoming Events
                      </Link>
                    </li>
                    <li>
                      <Link to="/home">
                        <FaAngleDoubleRight />
                        Blog & News
                      </Link>
                    </li>
                    <li>
                      <Link to="/home">
                        <FaAngleDoubleRight />
                        FAQ Question
                      </Link>
                    </li>
                    <li>
                      <Link to="/home">
                        <FaAngleDoubleRight />
                        Testimonial
                      </Link>
                    </li>
                    <li>
                      <Link to="/home">
                        <FaAngleDoubleRight />
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="edu-footer-widget explore-widget">
                <h5 className="widget-titil">Useful Links</h5>
                <div className="inner">
                  <ul className="footer-link">
                    <li>
                      <Link to="/home">
                        <FaAngleDoubleRight />
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/home">
                        <FaAngleDoubleRight />
                        Pricing Plan
                      </Link>
                    </li>
                    <li>
                      <Link to="/home">
                        <FaAngleDoubleRight />
                        Instructor Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/home">
                        <FaAngleDoubleRight />
                        Purchase Guide
                      </Link>
                    </li>
                    <li>
                      <Link to="/home">
                        <FaAngleDoubleRight />
                        Popular Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/home">
                        <FaAngleDoubleRight />
                        Event Details
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="edu-footer-widget">
                <h5 className="widget-titil">Contact Info</h5>
                <div className="inner">
                  <div className="widet-information">
                    <ul className="info-list">
                      <li>
                        <FiMapPin />
                        275 Quadra Street Victoria Road, New York
                      </li>
                      <li>
                        <RiPhoneFill />
                        <a href="tel:+ 1 (237) 382-2839">+ 1 (237) 382-2839</a>
                      </li>
                      <li>
                        <RiPhoneFill />
                        <a href="tel:+ 1 (237) 382-2840">+ 1 (237) 382-2840</a>
                      </li>
                      <li>
                        <RiMailOpenLine />
                        <a href="mailto:yourmailaddress@example.com">
                          yourmail@example.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <div className="copyright-area text-center">
        <p>Copyright 2022 Akib Bhuiyan || All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
