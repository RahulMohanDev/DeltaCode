

import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>
          <div>
            <Link href="/">home</Link>
          </div>
          <div>
            <Link href="/about">about</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
