import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchCreditsMovie } from "../../API/API";
import styles from "./Cast.scss";

const Cast = () => {
  const [cast, useCast] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    searchCreditsMovie(movieId).then(useCast);
    console.log(cast);
  }, [movieId]);

  return (
    <>
      <ul >
        {cast &&
          cast.map(({ profile_path, name, character }) => {
            return (
                <>
                <li className={styles.cast__item}>
                <div className='image-container'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                    width="150px"
                  />
                </div>
                <div>
                  <h2>{name}</h2>
                  <h3>{character}</h3>
                    </div>
                    
                    </li>
                    <hr/>
                </>
                
            );
          })}
      </ul>
    </>
  );
};

export default Cast;
