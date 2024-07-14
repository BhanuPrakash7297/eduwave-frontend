import React from "react";
import { Container } from "react-bootstrap";
import {
  AiOutlineArrowRight,
  AiOutlineCalendar,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { BlogsPost } from "../../../FakeData";
import "./BlogHomeSection.css";
import shap13 from "../../../assets/images/shape-04-02.png";
import shap14 from "../../../assets/images/shape-15-02.png";
import shap15 from "../../../assets/images/shape-13-03.png";
import shap16 from "../../../assets/images/shape-17.png";
const BlogHomeSection = () => {
  const topBlogs = BlogsPost.slice(0, 4);
  return (
    <section className="edu-blog-section">
      <Container>
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="section-title text-start" data-aos="fade-up">
              <span className="pre-title">Team Member</span>
              <h3 className="title">Meet Our Instructor</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main-btn text-end" data-aos="fade-up">
              <Link to="/">
                Read More Blogs <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="row g-5 mt-3">
          {topBlogs.map((blog) => (
            <div
              className="col-md-6 col-sm-12"
              key={blog.id}
              data-aos="fade-up"
            >
              <div className="edu-blog-1">
                <div className="inner">
                  <div className="content">
                    <div className="category">
                      <Link to="/">{blog.category}</Link>
                    </div>
                    <h4 className="title">
                      <Link to="/">{blog.title}</Link>
                    </h4>
                    <div className="blog-card-bottom">
                      <ul className="edu-meta">
                        <li>
                          <AiOutlineCalendar />
                          {blog.date}
                        </li>
                        <li>
                          <AiOutlineUser />
                          {blog.author}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="thumbnail">
                    <Link to="/">
                      <img src={blog.thumb} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
      </Container>
    </section>
  );
};

export default BlogHomeSection;
