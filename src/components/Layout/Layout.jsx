import { Link, Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import star from "./Star.module.css";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import comet from "./Comet.module.css";

export const Layout = () => {
  const theme = useSelector((state) => state.theme.theme);

  const stars = useMemo(() => {
    const arr = [];
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      arr.push({ left: x, top: y });
    }
    return arr;
  }, []);



  const comets = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      const delay = Math.random() * 20 // затримка між появами
      arr.push({ delay });
    }
    return arr;
  }, []);

  function getAnimationDelay() {
    const delay = Math.random() * 5;
    return `${delay.toFixed(2)}s`;
  }



  return (
    <div className={css.layout}>
      {theme === "dark" && (
        <div className={star.starContainer}>
          {stars.map(({ left, top }, index) => (
            <div
              key={index}
              className={star.starWrapper}
              style={{
                left: `${left}px`,
                top: `${top}px`,
                animationDelay: getAnimationDelay(),
              }}
            >
              <div className={star.star}></div>
            </div>
          ))}
          <div className={css.cometWrapper}>
            {comets.map(({ delay }, index) => (
              <div
                key={index}
                className={comet.comet}
                style={{
                  top: `${Math.random() * window.innerHeight}px`,
                  left: `${Math.random() * window.innerWidth}px`,
                  marginLeft: `${Math.random() * window.innerWidth}px`,
                  animationDelay: `${delay}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      )}

      <div className={css.mainLayoutElements}>
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
      </div>
    </div>
  );
};
