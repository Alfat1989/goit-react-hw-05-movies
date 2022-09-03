import React from "react";
import { Link } from "react-router-dom";
const firstImgUrl = "https://image.tmdb.org/t/p/w500";

const Markup = ({ obj }) => {
  return (
    <>
      {obj.map(({ id, title, poster_path, original_title }) => {
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
    </>
  );
};

export { Markup };
