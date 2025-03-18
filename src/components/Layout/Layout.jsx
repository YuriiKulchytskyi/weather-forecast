import { Link, Outlet } from "react-router-dom";
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <>
      <nav className={css.navbar}>
        <Link to="/" className={css.link}>
          Home
        </Link>
        <Link to="/forecast" className={css.link}>
          Forecast
        </Link>
      </nav>
      <main className={css.mainContent}>
        <Outlet />
      </main>
    </>
  );
};
