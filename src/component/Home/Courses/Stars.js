import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Stars = ({ rating,reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, idx) => {
    let number = idx + 0.5;
    return (
      <span key={idx}>
        {rating >= idx + 1 ? (
          <FaStar className="icon" />
        ) : rating >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon outline" />
        )}
      </span>
    );
  });
  return (
    <div className="rating-icon">
      {ratingStar} <div className="rating-count"> ({reviews? `${reviews} Review` : rating})</div>
    </div>
  );
};

export default Stars;
