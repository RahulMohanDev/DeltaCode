"use client";
import Image from "next/image";
import Header from "./components/Header";
import { createContext, useState } from "react";
import TextBox from "./components/TextBox";
import { Theme } from "./components/types/shared";
import ThemeContext from "./context/ThemeContext";
import UserContext from "./context/UserContext";

export default function Home() {
  const [theme, setTheme] = useState({ value: 0, type: "light" });
  return (
    <UserContext.Provider value={{ name: "Rahul" }}>
      <ThemeContext.Provider value={{ theme: theme }}>
        <div>
          <div>
            <Header
              toggleTheme={() => {
                setTheme((oldTheme) => {
                  const newTheme = { ...oldTheme };
                  newTheme.type = newTheme.type === "light" ? "dark" : "light";
                  newTheme.value = newTheme.value === 0 ? 1 : 0;
                  return newTheme;
                });
              }}
            ></Header>
            <TextBox>This is now working</TextBox>
          </div>
          <div></div>
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
