import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "pages/Home";
// import Home from "pages/Home";
// import Movies from "../pages/Movies";
// import NotFoindPages from "../pages/NotFoundPages/NotFoundPages";
// import Cast from "./Cast";
// import Layout from "./Layout";
// import MovieDetails from "./MovieDetails";
// import Reviews from "./Reviews";

const Layout = lazy(() => import("./Layout"));
const Home = lazy(() =>
  import("pages/Home" /* webpackChunkName: 'home-page' */)
);
const Movies = lazy(() => import("../pages/Movies"));
const NotFoindPages = lazy(() =>
  import("../pages/NotFoundPages/NotFoundPages")
);
const Cast = lazy(() => import("./Cast"));
const MovieDetails = lazy(() => import("./MovieDetails"));
const Reviews = lazy(() => import("./Reviews"));
const Loading = lazy(() => import("./LOADING"));

function App() {
  return (
    <>
      <div className="App">
        <Suspense fallback={<Loading title={"LoadinG....."} />}>
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
        </Suspense>
      </div>
    </>
  );
}

export default App;
