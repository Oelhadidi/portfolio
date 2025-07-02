import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

export const metadata: Metadata = {
  title: 'Omar ELHADIDI - Développeur Web Full Stack',
  description: 'Portfolio de Omar ELHADIDI, étudiant en M2 Ingénierie du Web en alternance chez Appymakers. Spécialisé en développement web moderne avec React, Next.js, Vue.js, et bien plus.',
  keywords: ['Omar ELHADIDI', 'Développeur Web', 'Full Stack', 'React', 'Next.js', 'Vue.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Omar ELHADIDI' }],
  creator: 'Omar ELHADIDI',
  publisher: 'Omar ELHADIDI',
  metadataBase: new URL('https://omarelhadidi.dev'),
  alternates: {
    canonical: 'https://omarelhadidi.dev',
  },
  openGraph: {
    title: 'Omar ELHADIDI - Développeur Web Full Stack',
    description: 'Portfolio de Omar ELHADIDI, développeur web passionné spécialisé en technologies modernes.',
    url: 'https://omarelhadidi.dev',
    siteName: 'Omar ELHADIDI Portfolio',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar ELHADIDI - Développeur Web Full Stack',
    description: 'Portfolio de Omar ELHADIDI, développeur web passionné spécialisé en technologies modernes.',
    creator: '@omar_elhadidi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
