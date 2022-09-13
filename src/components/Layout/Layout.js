import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.scss";

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={styles.link}>
            Movies
          </NavLink>
        </nav>
      </header>

      <hr />

      <main>
        <Outlet />
      </main>

      <hr />

      <footer>
        <div>
          <h4>2022</h4>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
