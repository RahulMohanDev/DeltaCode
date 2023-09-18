"use client";

import "./test.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <nav>
        <ol>
          <li>
            <Link
              href="/about/rahul"
              className={pathname === "/about/rahul" ? "active" : "inactive"}
            >
              Rahul mohan
            </Link>{" "}
          </li>
          <li>
            <Link
              href="/about/rohan"
              className={pathname === "/about/rohan" ? "active" : "inactive"}
            >
              Rohan Singh poon
            </Link>{" "}
          </li>
        </ol>
        <div>{children}</div>
      </nav>
    </>
  );
}
