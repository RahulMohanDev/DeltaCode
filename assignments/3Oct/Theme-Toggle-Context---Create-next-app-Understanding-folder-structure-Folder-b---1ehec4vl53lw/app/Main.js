"use client";
import React, { useContext } from "react";
import { LocalThemedBox } from "./components/LocalThemedBox";
import { ThemeContext } from "./components/ThemeProvider";

const Main = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div
      className={`container ${"bg-" + (theme.isLight ? "light" : "dark")}`}
      id="themed-page"
    >
      <p
        id="themed-text-container"
        className={`${"txt-" + (theme.isLight ? "light" : "dark")}`}
      >
        lorem ipsum dolor iterit n stuff
      </p>
      <button
        className={`btn ${"btn-" + (theme.isLight ? "light" : "dark")}`}
        id="themed-button"
      >
        Themed Button
      </button>
      <LocalThemedBox />
    </div>
  );
};

export { Main };
