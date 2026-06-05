import type { Metadata } from 'next'
import { Montserrat, Cinzel } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-sans' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Helionyx Research - Premium Scientific Compounds',
  description: 'Luxury scientific e-commerce platform offering research compounds with certificates of analysis and premium quality standards.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cinzel.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className="bg-helionyx-black text-helionyx-platinum font-sans">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
