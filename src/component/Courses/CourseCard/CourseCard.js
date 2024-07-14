import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
import Stars from "./../../Home/Courses/Stars";
import "./CourseCard.css";
import { useState } from "react";
import { User } from "lucide-react";
import { useCart } from "../../../context/cartContext";
import { toast } from "react-toastify";

const CourseCard = (props) => {
  const { _id, title, price, imageUrl, categoryId, chapters } = props.course;
  const slick = props.slick;
  const [clicked, setClicekd] = useState(false);
  const handleLove = () => {
    setClicekd(!clicked);
  };
  const [cart, setCart] = useCart();

  const checkCart = async () => {
    try {
      const myCart = [...cart];
      let check = -1;
      if (myCart) {
        check = myCart.findIndex((item) => item._id === _id);
      }

      if (check === -1) {
        setCart((prevCart) => {
          const updatedCart = [...prevCart, props.course];

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
    <div className={slick === "yes" ? "slick" : "col-lg-4 col-sm-6 col-12"}>
      <div className="edu-card-2 radius-small">
        <div className="inner">
          <div className="thumbnail">
            <Link to={`/courseDetails/${_id}`}>
              <img
                src={`${process.env.REACT_APP_API}${imageUrl}`}
                alt=""
                className="w-100 radius-small"
              />
            </Link>
            <div className="wishlist-top-right">
              <button
                className={clicked ? "wishlist-btn love" : "wishlist-btn"}
              >
                <FaHeart />
              </button>
            </div>
            <div className="status-group">
              <a href="/">{categoryId?.name}</a>
            </div>
          </div>
          <div className="content">
            <div className="card-top">
              <div className="author-meta">
                <User />
                <span className="author-title">bhanu prakash</span>
              </div>
              <div className="edu-meta">
                <li>
                  <RiFileList3Line />
                  {chapters?.length} Lessons
                </li>
              </div>
            </div>
            <h6 className="title">{title}</h6>
            <div className="card-bottom">
              <div className="price-list">
                <div className="current-pice">
                  {Number(price) ? `$${price}.00` : `${price}`}
                </div>
                <div className="old-price"></div>
              </div>
              <Stars rating={4} />
            </div>
          </div>
        </div>
        {/* Hover */}
        <div className="card-hover-action">
          <div className="hover-content g-5">
            <div className="content-top">
              <div className="top-status-bar">
                <a href="/">{categoryId?.name}</a>
              </div>
              <div className="top-wishlist-bar">
                <button
                  className={clicked ? "wishlist-btn love" : "wishlist-btn"}
                  onClick={handleLove}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
            <Link to={`/courseDetails/${_id}`}>
              <h6 className="title">{title}</h6>
            </Link>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since ...
            </p>
            <div className="price-list">
              <div className="current-pice">
                {Number(price) ? `$${price}.00` : `${price}`}
              </div>
              <div className="old-price"></div>
            </div>
            <div className="hover-bottom-content">
              <div className="author-meta">
                <Link to={`/author`}>
                  <User />
                  <span className="author-title">bhanu prakash</span>
                </Link>
              </div>
              <div className="edu-meta">
                <li>
                  <RiFileList3Line />
                  {chapters?.length} Lessons
                </li>
              </div>
            </div>
            <div className="read-more-btn">
              <Link
                onClick={() => {
                  checkCart();
                }}
              >
                Add to Cart <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
