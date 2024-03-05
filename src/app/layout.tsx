import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: "CLD2 – an ECAI'24 Workshop",
    default: 'CLD2 - Classifier Learning from Difficult Data',
  },
  description:
    'Classifier Learning from Difficult Data. – The workshop on Classifier Learning from Difficult Data is organized during the 27TH EUROPEAN CONFERENCE ON ARTIFICIAL INTELLIGENCE in Santiago de Compostella.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
