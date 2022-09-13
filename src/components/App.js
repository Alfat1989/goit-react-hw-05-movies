import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import NotFoindPages from "../pages/NotFoundPages/NotFoundPages";
import Cast from "./Cast";
import Layout from "./Layout";
import MovieDetails from "./MovieDetails";
import Reviews from "./Reviews";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoindPages />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
