import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const InstructorCard = ({ instructor }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-12 p-3" data-aos="fade-up">
      <div className="edu-instructor">
        <div className="inner">
          <div className="thumbnail">
            <Link to={`/author/${instructor.name}`}>
              <img src={instructor.profilePic} alt="" />
            </Link>
          </div>
          <div className="edu-instructor-info">
            <h5 className="title">
              <a href="/">{instructor.name}</a>
            </h5>
            <span className="decs">{instructor.degination}</span>
            <div className="team-share-info">
              <Link to="/">
                <FaLinkedinIn />
              </Link>
              <Link to="/">
                <FaFacebookF />
              </Link>
              <Link to="/">
                <FaTwitter />
              </Link>
              <Link to="/">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
