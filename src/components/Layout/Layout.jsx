import { Link, Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

export const Layout = () => {
  return (
    <>
      <nav className={css.navbar}>
        <Link to="/" className={css.link}>
          Home
        </Link>
        <Link to="/europe" className={css.link}>
          Europe
        </Link>
        <Link to="/forecast" className={css.link}>
          Forecast
        </Link>
      </nav>
      <div className={css.theme}>
        <ThemeSwitcher />
      </div>
      <main className={css.mainContent}>
        <Outlet />
      </main>
    </>
  );
};
