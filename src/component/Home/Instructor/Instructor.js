import React from "react";
import { Container } from "react-bootstrap";

import { Instructors } from "../../../FakeData";
import "./Instructor.css";

import InstructorCard from "./InstructorCard";
const Instructor = () => {
  return (
    <section className="edu-instructor-area">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center" data-aos="fade-up">
              <span className="pre-title text-white">Team Member</span>
              <h3 className="title">Meet Our Instructor</h3>
            </div>
          </div>
          <div className="row g-5 mt-3">
            {Instructors.map((instructor, idx) => (
              <InstructorCard
                instructor={instructor}
                key={idx}
                data-aos="fade-up"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Instructor;
