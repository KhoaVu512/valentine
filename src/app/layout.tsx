import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import favicon from '../../public/static/favicon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Valentine',
  description: 'Will you be my Valentine?',
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
          href={favicon.src}
        />
        <meta
          property="og:image"
          content="https://i.pinimg.com/564x/70/4a/52/704a5205ba5f189d9376f1d1e502be41.jpg"
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
