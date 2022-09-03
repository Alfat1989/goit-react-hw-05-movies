import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trendingMovieFetch } from "../../API/API";

const Home = () => {
  const [trends, setTrends] = useState([]);
  const firstImgUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    trendingMovieFetch().then(setTrends);
  }, []);

  return (
    <>
      <h2>Main</h2>
      <p>This is Main page</p>

      <ul>
        {trends &&
          trends.map(({ poster_path, id, title, original_title }) => {
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

export default Home;
