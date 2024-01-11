import { useState } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";
const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

  function handleMouseLeave() {
    setHover(rating)
  }

  function handleMouseEnter(index) {
    setHover(index);
  }
  return (
    <div className="star_rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            size={40}
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave(index);
            }}
            onMouseEnter={() => {
              handleMouseEnter(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
