import React, { useContext } from "react";
import { Theme } from "./types/shared";
import ThemeContext from "../context/ThemeContext";
import UserContext from "../context/UserContext";

export default function Button({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);
  const { name } = useContext(UserContext);

  return (
    <div
      className={`border-2 rounded border-white w-20 flex justify-center ${
        theme.value === 0
          ? "bg-red-400 text-white hover:bg-red-900"
          : "bg-blue-500 text-base hover:bg-blue-900"
      }`}
    >
      {children}
      {name}
    </div>
  );
}
