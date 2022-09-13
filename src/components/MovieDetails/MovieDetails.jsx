import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { searchMovieById } from "../../API/API";

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  console.log(movieId);
  console.log("this is NAVIGATE", navigate);

  const [movie, setMovie] = useState([]);
  const { title, overview, release_date, genres, poster_path } = movie;

  useEffect(() => {
    searchMovieById(movieId)
      // .then(console.log)
      .then(setMovie);
    // .then(console.log(movie))
  }, [movieId]);

  const goBack = () => {
    return navigate(-1);
  };

  return (
    <>
      <h1>Movie Details {movieId}</h1>
      <button type="button" onClick={goBack}>
        Back
      </button>
      <br />
      <br />
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width="150px"
          />
          <h2>{title}</h2>
          <h3>{release_date}</h3>
          <ul>
            Genres:
            {genres &&
              genres.map(({ name, id }) => {
                return (
                  <li key={id}>
                    <p>{name}</p>
                  </li>
                );
              })}
          </ul>
          <p>{overview}</p>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
          <hr />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
