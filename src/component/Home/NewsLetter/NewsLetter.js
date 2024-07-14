import React from "react";
import { Container } from "react-bootstrap";
import { HiMailOpen } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <section className="edu-newsletter-area">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <div className="section-title">
                <span className="pre-title text-white">
                  Subscribe Newsletter
                </span>
                <h3 className="title">Get Every Latest News</h3>
              </div>
              <div className="newsletter-from">
                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your mail address"
                  />
                  <div className="mail-icon">
                    <HiMailOpen />
                  </div>
                  <button className="send-btn">
                    <FiSend />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetter;
