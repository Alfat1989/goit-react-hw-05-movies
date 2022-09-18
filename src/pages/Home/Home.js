import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { trendingMovieFetch } from "../../API/API";
import styles from "./Home.scss";

const Home = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    trendingMovieFetch()
      // .then(console.log);
      .then(setTrends);
  }, []);

  return (
    <>
      <h1>This is Home page</h1>
      <ul className={styles.movie__list}>
        {trends &&
          trends.map(({ original_title, id }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location, state: 5 }}>
                  {original_title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Home;
