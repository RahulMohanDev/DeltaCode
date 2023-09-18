import Link from "next/link";
// import { useState } from "react";

export default function AboutLayout({ children }) {
  // const [test, setTest] = useState();
  return (
    <>
      <nav>
        <ol>
          <li>
            <Link href="/about/rahul">Rahul mohan</Link>{" "}
          </li>
          <li>
            <Link href="/about/rohan">Rohan Singh poon</Link>{" "}
          </li>
        </ol>
        {children}
      </nav>
    </>
  );
}
