import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { searchMovieApi } from "../../API/API";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log(location);

  const searchMovies = (e) => {
    e.preventDefault();
    searchMovieApi(query).then(setMovies);
  };

  const input = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <h1>This is Movies Page</h1>
      <form onSubmit={searchMovies}>
        <input
          onChange={input}
          value={query}
          type="text"
          autoComplete="off"
          placeholder="search..."
        />
        <button type="submit">Search</button>
      </form>

      <br />

      <ul>
        {movies &&
          movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Movies;
