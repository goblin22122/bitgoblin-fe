
import './globals.css'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'
import Head from 'next/head';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BitGoblin',

}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
