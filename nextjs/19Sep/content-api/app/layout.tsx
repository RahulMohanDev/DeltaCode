import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learning context api',
  description: 'simple example to learn context API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
