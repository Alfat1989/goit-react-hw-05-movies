import { useParams, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchMovieById } from "../../API/API";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    searchMovieById(movieId).then(setMovie);
  }, [movieId]);

  useEffect(() => {
    console.log(movie);
  }, [movie, movieId]);

  const { original_title, overview, genres, poster_path } = movie;
  const firstImgUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      {movie && (
        <div>
          <div>
            <img
              src={`${firstImgUrl}${poster_path}`}
              alt={original_title}
              width="150px"
            />
          </div>
          <div>
            <h2>{original_title}</h2>
            <p>{overview}</p>
          </div>
        </div>
      )}
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Review</NavLink>
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
