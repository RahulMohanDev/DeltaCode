"use client";

import { ReactNode, useEffect, useState } from "react";

export default function Template({ children }: { children: ReactNode }) {
  // page view
  // loading screen

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return loading ? <div>loading</div> : <div>{children}</div>;
}
