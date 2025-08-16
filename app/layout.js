// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nebras Al Arab Printer - مطابع نبراس العرب',
  description: 'Professional printing services including brochures, logos, banners, restaurant menus, t-shirts, and mugs. Expert printing solutions in Saudi Arabia.',
  keywords: 'printing, brochures, logos, banners, restaurant menus, t-shirt printing, mug printing, Saudi Arabia, مطابع',
  author: 'Nebras Al Arab Printer',
  openGraph: {
    title: 'Nebras Al Arab Printer - مطابع نبراس العرب',
    description: 'Professional printing services for all your business needs',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}