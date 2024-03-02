import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Johnnny A',
  description: "John Aagaard's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 w-full h-screen mx-auto">{children}</body>
    </html>
  )
}
