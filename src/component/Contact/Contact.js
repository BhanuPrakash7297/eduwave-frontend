import React from "react";
import { Container } from "react-bootstrap";
import BreadCrumb from "../Home/BreadCrumb/BreadCrumb";
import contactImg from "../../assets/images/contact-1.jpg";
import { useForm } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";
import "./Contact.css";
import { toast } from "react-toastify";
const Contact = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://edu-vibe-server-eight.vercel.app/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          toast("Thanks for Contact Us");
        }
      });
  };
  return (
    <>
      <BreadCrumb title="Contact Me" currentPage="Contact Me" />
      <section className="edu-contact">
        <Container>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="contact-left">
                <div className="thumbnail">
                  <img src={contactImg} alt="" className="w-100" />
                  <div className="content-overlay">
                    <h4 className="title">
                      Don’t Be Hesitate To <br /> Contact With US
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title text-start" data-aos="fade-up">
                <span className="pre-title">Contact Us</span>
                <h3 className="title">Send Us A Message</h3>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="contact-form row mt-5"
              >
                <div className="col-lg-6">
                  <input
                    {...register("name", { required: true })}
                    placeholder="Name*"
                  />
                  {errors.name && <span>This field is required</span>}
                </div>
                <div className="col-lg-6">
                  <input
                    {...register("email", { required: true })}
                    placeholder="Email*"
                  />
                  {errors.email && <span>This field is required</span>}
                </div>
                <div className="col-lg-12">
                  <input
                    {...register("subject", { required: true })}
                    placeholder="Subject"
                  />
                  {errors.subject && <span>This field is required</span>}
                </div>
                <div className="col-lg-12">
                  <textarea
                    {...register("comment", { required: true })}
                    placeholder="Your Comment"
                  />

                  {errors.comment && <span>This field is required</span>}
                </div>
                <div className="col-lg-12">
                  <button className="contact-btn" type="submit">
                    Submit Now
                    <FiArrowRight className="ms-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
