import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/forecast">Forecast</Link>
      </nav>
      <Outlet />
    </>
  );
};
