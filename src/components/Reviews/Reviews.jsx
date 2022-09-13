import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchReviewsMovie } from "../../API/API";

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    searchReviewsMovie(movieId).then(setReview);
  }, [movieId]);

  console.log(movieId);

  return (
    <>
      <h2>This is Reviews</h2>
      <ul>
        {review &&
          review.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Reviews;
