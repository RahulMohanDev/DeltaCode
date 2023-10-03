"use client";
import React, { useState } from "react";

const initialTheme = { isLight: true };
// this is called a hoc
const ThemeContext = React.createContext(initialTheme);
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
