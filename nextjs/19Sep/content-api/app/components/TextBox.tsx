import { useContext } from "react";
import Button from "./Button";
import { Theme } from "./types/shared";
import ThemeContext from "../context/ThemeContext";

export default function TextBox({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme.value === 0 ? "bg-white text-black" : "bg-black text-white"
      }
    >
      {children}
      <Button>Ok</Button>
    </div>
  );
}
