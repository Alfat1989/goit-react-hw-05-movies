import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchReviewsMovie } from "../../API/API";

const Review = () => {
  const [review, setReview] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    searchReviewsMovie(movieId).then(setReview);
  }, [movieId]);

  return (
    <ul>
      {review &&
        review.map(({ author, content }) => {
          return (
            <li>
              <h3>author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Review;
