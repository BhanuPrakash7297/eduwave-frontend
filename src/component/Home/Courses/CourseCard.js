import React from "react";
import { Link } from "react-router-dom";
import { RiTimeLine, RiGroupLine, RiFileList2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import Stars from "./Stars";
import { toast } from "react-toastify";
import { useCart } from "../../../context/cartContext";

const CourseCard = (props) => {
  const {
    title,
    _id,
    description,
    purchases,
    chapters,
    attachments,
    imageUrl,
    price,
  } = props.course;

  const [cart, setCart] = useCart();
  console.log(imageUrl);
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
    <div className="col-12 col-sm-12 col-md-6 col-xl-4 col-lg-4">
      <div className="edu-card card-type-2 radius-small " data-aos="fade-up">
        <div className="inner">
          <div className="thumbnail">
            <Link to={`/courseDetails/${_id}`}>
              <img
                src={`${process.env.REACT_APP_API}${imageUrl}`}
                alt=""
                className="w-100 radius-small"
              />
            </Link>
            <div className="eduvibe-status">
              <span className="status-2">
                <RiTimeLine />
                {5} Hour{" "}
              </span>
            </div>
            <div className="wishlist-top-right">
              <button className="wishlistbtn">
                <FaRegHeart />
              </button>
            </div>
          </div>
          <div className="content">
            <div className="card-top">
              <div className="edu-rating">
                <Stars rating={4} />
              </div>
            </div>
            <h6 className="title">{title}</h6>
            <ul className="edu-meta">
              <li>
                <RiGroupLine />
                {purchases.length} Students
              </li>
              <li>
                <RiFileList2Line />
                {chapters.length} Lessons
              </li>
            </ul>
            <div className="card-bottom">
              <div className="price-list">
                <div className="price current-price">
                  {Number(price) ? `$${price}.00 USD` : `${price}`}
                </div>
                <div className="price old-price"></div>
              </div>
              <div className="buyButton">
                <Link
                  onClick={() => {
                    checkCart();
                  }}
                >
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
