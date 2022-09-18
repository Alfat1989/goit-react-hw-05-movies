import {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  Link,
} from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { searchMovieById } from "../../API/API";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  console.log("Location is: ", location);

  const [movie, setMovie] = useState([]);
  const { title, overview, release_date, genres, poster_path } = movie;

  useEffect(() => {
    searchMovieById(movieId)
      // .then(console.log)
      .then(setMovie);
    // .then(console.log(movie))
  }, [movieId]);

  const goBack = location.state?.from || "/";
  // const goBack = location.pathname || "/";

  return (
    <>
      <h1>Movie Details {movieId}</h1>
      <Link to={goBack}>Back</Link>
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
          <NavLink to={"cast"} state={{ from: location.state.from }}>
            Cast
          </NavLink>
          <NavLink to={"reviews"} state={{ from: location.state.from }}>
            Reviews
          </NavLink>
          <hr />
          <Suspense fallback={<h1>Load....</h1>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
