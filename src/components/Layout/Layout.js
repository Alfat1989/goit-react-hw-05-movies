import { NavLink, Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>

      <Outlet />

      <footer>2022</footer>
    </>
  );
};

export default Layout;
