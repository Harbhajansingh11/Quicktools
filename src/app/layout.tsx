import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/common/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'QuickTools — Simple Tools. Powerful Results.',
  description:
    'Fast and easy online tools for PDFs, images, documents, QR codes, and everyday tasks. 100% private, client-side first, and no account required.',
  keywords: [
    'online tools',
    'quick tools',
    'compress pdf',
    'merge pdf',
    'split pdf',
    'image resizer',
    'image compressor',
    'qr code generator',
    'jpg to png',
    'jpg to pdf',
    'free utilities',
  ],
  authors: [{ name: 'QuickTools Team' }],
  metadataBase: new URL('https://quicktools.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quicktools.dev',
    siteName: 'QuickTools',
    title: 'QuickTools — Simple Tools. Powerful Results.',
    description:
      'Fast and easy online tools for PDFs, images, documents, QR codes, and everyday tasks.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QuickTools — Simple Tools. Powerful Results.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickTools — Simple Tools. Powerful Results.',
    description:
      'Fast and easy online tools for PDFs, images, documents, QR codes, and everyday tasks.',
    creator: '@quicktools',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#090d16' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbfcfd] dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-150">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
