import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Stars from "../../Home/Courses/Stars";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import {
  RiDraftLine,
  RiLockPasswordLine,
  RiTimeLine,
  RiBarChart2Line,
  RiTranslate,
  RiArtboardLine,
  RiAwardLine,
  RiPercentLine,
  RiCalendar2Line,
  RiUser2Line,
} from "react-icons/ri";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaPlay,
} from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import "./DetailsContent.css";
import EnrollForm from "./EnrollForm";
import { User } from "lucide-react";
import { useCart } from "../../../context/cartContext";
import { toast } from "react-toastify";
const DetailsContent = ({ details }) => {
  console.log(details);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [cart, setCart] = useCart();

  const checkCart = async (_id) => {
    try {
      const myCart = [...cart];
      let check = -1;
      if (myCart) {
        check = myCart.findIndex((item) => item._id === _id);
      }

      if (check === -1) {
        setCart((prevCart) => {
          const updatedCart = [...prevCart, details];

          // Update local storage with the new cart data
          localStorage.setItem("cart", JSON.stringify(updatedCart));

          // Return updated cart state
          return updatedCart;
        });

        toast.success("Product added in cart successfully");
      } else {
        toast.error("Product is already in cart go and check");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="edu-course-details">
      <Container>
        <div className="row g-5">
          <div className="col-lg-12">
            <div className="main-image-thumbnail">
              <img
                className="object-cover"
                alt={details?.title}
                src={`${process.env.REACT_APP_API}${details?.imageUrl}`}
              />
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="course-details-content">
              <div className="content-top">
                <div className="author-meta">
                  {" "}
                  <Link to="/">
                    <User />
                    <span className="author-title">By Bhanu Prakash</span>
                  </Link>
                </div>
                <Stars rating={4} reviews={4} />
              </div>
              <h3 className="title">{details?.title}</h3>
              <Tabs
                defaultActiveKey="overview"
                id="justify-tab-example"
                className="mb-3"
                justify
              >
                <Tab eventKey="overview" title="Overview">
                  <div className="course-tab-content">
                    <h5>Course Description</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <h5>What You’ll Learn From This Course</h5>
                    <ul>
                      <li>
                        Neque sodales ut etiam sit amet nisl purus non tellus
                        orci ac auctor
                      </li>
                      <li>
                        Tristique nulla aliquet enim tortor at auctor urna. Sit
                        amet aliquam id diam maer
                      </li>
                      <li>
                        Nam libero justo laoreet sit amet. Lacus sed viverra
                        tellus in hac
                      </li>
                      <li>
                        Tempus imperdiet nulla malesuada pellentesque elit eget
                        gravida cum sociis
                      </li>
                    </ul>
                    <h5>Certification</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="curriculum" title="Curriculum">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>The First Steps</Accordion.Header>
                      <Accordion.Body className="edu-accordination-body">
                        <ul>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Introduction
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Course Overview
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Local Development Environment Tools
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Course Excercise
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Embedding PHP in HTML
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Using Dynamic Data
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Data Types and More</Accordion.Header>
                      <Accordion.Body className="edu-accordination-body">
                        <ul>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Introduction
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Course Overview
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Local Development Environment Tools
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Course Excercise
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Embedding PHP in HTML
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Using Dynamic Data
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Control Structure</Accordion.Header>
                      <Accordion.Body className="edu-accordination-body">
                        <ul>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Introduction
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Course Overview
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Local Development Environment Tools
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Course Excercise
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Embedding PHP in HTML
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                          <li>
                            <div className="text">
                              <RiDraftLine />
                              Using Dynamic Data
                            </div>
                            <div className="icon">
                              <RiLockPasswordLine />
                            </div>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Tab>
                <Tab eventKey="instructor" title="Instructor">
                  <div className="course-tab-content">
                    <div className="course-author-wrapper">
                      <div className="author-content">
                        <h6 className="title">bhanu praksh sen</h6>
                        {/* <span className="subtitle">{author?.degination}</span>
                        <p>{author?.about}</p> */}
                        <div className="team-share-info">
                          <a href="/about">
                            <FaLinkedinIn />
                          </a>
                          <a href="/about">
                            <FaFacebookF />
                          </a>
                          <a href="/about">
                            <FaPinterestP />
                          </a>
                          <a href="/about">
                            <FaTwitter />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="edu-sidebar">
              <div className="inner">
                <div className="eduvibe-widget">
                  <div className="video-area">
                    <div className="video-popup-wraper">
                      <img
                        className="object-cover"
                        alt={details?.title}
                        src={`${process.env.REACT_APP_API}${details?.imageUrl}`}
                      />

                      <button className="video-play-btn">
                        <FaPlay />
                      </button>
                    </div>
                  </div>
                  <div className="eduvibe-widget-details">
                    <ul>
                      <li>
                        <span>
                          <RiTimeLine /> Duration
                        </span>
                      </li>
                      <li>
                        <span>
                          <ImUsers /> Enrolled
                        </span>
                        <span>{details?.purchases?.length}</span>
                      </li>
                      <li>
                        <span>
                          <RiDraftLine /> Lectures
                        </span>
                        <span>{details?.chapters?.length}</span>
                      </li>
                      <li>
                        <span>
                          <RiBarChart2Line /> Skill Level
                        </span>
                        {/* <span>{skill}</span> */}
                      </li>
                      <li>
                        <span>
                          <RiTranslate /> Language
                        </span>
                        {/* <span>{language}</span> */}
                      </li>
                      <li>
                        <span>
                          <RiArtboardLine /> Quizzes
                        </span>
                        {/* <span>{quizz}</span> */}
                      </li>
                      <li>
                        <span>
                          <RiAwardLine /> Certificate
                        </span>
                        {/* <span>{certificate}</span> */}
                      </li>
                      <li>
                        <span>
                          <RiPercentLine /> Pass Percentage
                        </span>
                        <span>{2}%</span>
                      </li>
                      <li>
                        <span>
                          <RiCalendar2Line /> Deadline
                        </span>
                        <span>{2}</span>
                      </li>
                      <li>
                        <span>
                          <RiUser2Line /> Instructor
                        </span>
                        {/* <span>{author?.name}</span> */}
                      </li>
                    </ul>
                    <div className="read-more-btn mt-5">
                      <a href="/" className="edu-btn bg-alt">
                        Price: {details?.price}.00
                      </a>
                    </div>
                    <div className="main-btn  mt-3">
                      <button
                        className="edu-btn w-100 text-center"
                        onClick={()=>checkCart(details?._id)}
                      >
                        Add to cart
                      </button>
                    </div>
                    <div className="eduvibe-post-share mt-3 text-center ">
                      <span>Share:</span>
                      <a href="/about">
                        <FaLinkedinIn />
                      </a>
                      <a href="/about">
                        <FaFacebookF />
                      </a>
                      <a href="/about">
                        <FaPinterestP />
                      </a>
                      <a href="/about">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DetailsContent;
