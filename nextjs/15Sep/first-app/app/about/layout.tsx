import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
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
        <div>{children}</div>
      </nav>
    </>
  );
}
