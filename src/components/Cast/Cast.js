import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchCreditsMovie, searchMovieById } from "../../API/API";

const Cast = () => {
  const [cast, useCast] = useState("");
  const { movieId } = useParams();
  console.log("Params: ", movieId);

  useEffect(() => {
    // if (cast === "") {
    //   return;
    // }
    searchCreditsMovie(movieId).then(useCast);
    console.log("Cast is: ", cast);
  }, [movieId]);

  console.log("This is cast: ", cast);

  return (
    <ul>
      {cast &&
        cast.map(({ profile_path, character, original_name }) => {
          return (
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={original_name}
                width="150px"
              />
              <p>Name: {original_name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
