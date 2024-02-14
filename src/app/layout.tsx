import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Valentine',
  description: 'Will you be my Valentine?',
  openGraph: {
    images: 'static/meta-img.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="heart icon"
          href="static/favicon.ico"
        />

        <Script
          type="text/javascript"
          src="static/script.js"
        ></Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
