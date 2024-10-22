import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TradeStreak',
  description: 'Track your trading progress and compete with others',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen w-full flex-col bg-[#0f0f0f] text-[rgba(229,231,235,1)]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}