"use client";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <button
      className={`btn ${"btn-" + (theme.isLight ? "light" : "dark")}`}
      onClick={() => {
        setTheme((old) => {
          return { isLight: !old.isLight };
        });
      }}
    >
      Switch to {theme.isLight ? "dark" : "light"} theme
    </button>
  );
};
export { ThemeToggleButton };
