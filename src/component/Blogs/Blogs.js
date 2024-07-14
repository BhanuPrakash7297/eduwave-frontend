import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BreadCrumb from "../Home/BreadCrumb/BreadCrumb";
import { IoPricetagOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { BlogsPost } from "../../FakeData";
import "./Blogs.css";
import Footer from "../Home/Footer/Footer";
const Blogs = () => {
  return (
    <>
      <BreadCrumb title="Blog Grid" currentPage="Blog Grid"/>
      <section className="edu-blog-page mt">
        <Container>
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="row">
                {BlogsPost.map((blog) => (
                  <div className="col-lg-4 col-md-6 col-12 mt-5">
                    <div className="edu-blog">
                      <div className="inner">
                        <div className="thumbnail">
                          <Link to="blogsDetails">
                            <img src={blog.thumb} alt="" />
                          </Link>
                        </div>
                        <div className="content">
                          <div className="status">
                            <IoPricetagOutline />
                            {blog.category}
                          </div>
                          <h5 className="title">
                            <Link to="blogsDetails">{blog.title}</Link>{" "}
                          </h5>
                          <div className="blog-card-bottom">
                            <div className="blog-meta">
                              <SlCalender />
                              {blog.date}
                            </div>
                            <div className="read-more-btn ">
                              <Link to="blogsDetails">Read More</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Blogs;
