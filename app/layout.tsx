import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import GlobalErrorHandler from '@/components/GlobalErrorHandler'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Techila Services - IT Solutions & Services',
  description: 'Professional IT services and solutions for your business needs',
  keywords: 'IT services, technology solutions, business IT, digital transformation',
  authors: [{ name: 'Techila Services' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalErrorHandler />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
