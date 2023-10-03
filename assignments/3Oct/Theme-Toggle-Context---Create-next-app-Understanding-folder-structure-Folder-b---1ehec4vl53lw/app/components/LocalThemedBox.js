"use client";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
  const [theme] = useContext(ThemeContext);
  const [innerTheme, setInnerTheme] = useState(theme);
  useEffect(() => {
    setInnerTheme(theme);
  }, [theme]);
  return (
    <div
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
      className={`container ${"bg-" + (innerTheme.isLight ? "light" : "dark")}`}
      id="local-themed-box"
    >
      {/* Write code below this line */}
      <p
        id="themed-text-container"
        className={`${"txt-" + (innerTheme.isLight ? "light" : "dark")}`}
      >
        Hiiii
      </p>
      <button
        className={`btn ${"btn-" + (innerTheme.isLight ? "light" : "dark")}`}
        onClick={() => {
          setInnerTheme((old) => {
            return { isLight: !old.isLight };
          });
        }}
      >
        toggle local theme to {theme.isLight ? "dark" : "light"}
      </button>
    </div>
  );
};

export { LocalThemedBox };
