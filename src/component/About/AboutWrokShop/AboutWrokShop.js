import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'
import videoPopupbg2 from '../../../assets/images/video-popup-bg-02.jpg'
import './AboutWrokShop.css'
import shap15 from '../../../assets/images/shape-04-05.png'
const AboutWrokShop = () => {
  return (
    <section className="edu-workshop-area">
      <Container>
        <div className="row gy-lg-0 gy-5 align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="workshop-inner">
              <div className="section-title text-start " data-aos="fade-up">
                <span className="pre-title text-white">What We Offer</span>
                <h3 className="title">
                  Learn New Skills When And <br />
                  Where You Like
                </h3>
              </div>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consect adipi scing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
            <div className="main-btn">
              <Link to='/about' className="bg-light text-dark">More Upcomming Workshop <AiOutlineArrowRight /></Link>
            </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail video-popup-wrapper">
              <img src={videoPopupbg2} alt="" />
              <button className="video-play-btn">     <FaPlay /></button>
            </div>
          </div>
        </div>

        <div className="shape-wrapper d-xl-block d-none">
           
            <div className="shap-image shape-image-3">
              <img src={shap15} alt="" />
            </div>
       
          </div>
      </Container>
    </section>
  );
};

export default AboutWrokShop;
