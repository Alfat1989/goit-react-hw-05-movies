import { Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import Movies from "../views/Movies";
import Home from "../views/Home";
import NotFoundView from "../views/NotFoundView";
import MovieDetailsPage from "./MovieDetailsPage";
import Cast from "./Cast";
import Reviews from "./Reviews";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route index path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
