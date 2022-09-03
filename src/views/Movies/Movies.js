import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { searchMovieApi, searchMovieById } from "../../API/API";

const Movies = ({ onSubmit }) => {
  const match = useLocation();
  const [inputValue, setInputValue] = useState("");
  const [moviesArr, setMoviesArr] = useState([]);

  console.log(match);

  const onSearchMovie = (e) => {
    e.preventDefault();
    console.log(inputValue);
    searchMovieApi(inputValue)
      .then((res) => res.data.results)
      .then(setMoviesArr);
    // .then(console.log);
    console.log(moviesArr);
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const firstImgUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <form onSubmit={onSearchMovie}>
        <input type="text" onChange={onInputChange} />
        <button type="submit">Search</button>
      </form>

      <ul>
        {moviesArr &&
          moviesArr.map(({ title, id, original_title, poster_path }) => {
            return (
              <li key={id}>
                <Link to={`${id}`}>
                  <img
                    src={`${firstImgUrl}${poster_path}`}
                    alt={original_title}
                    width="150"
                  />
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
