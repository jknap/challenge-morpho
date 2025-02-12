import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/app/components/navbar';
import { Providers } from '@/app/providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Optional, for CSS variables
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Morpho Challenge',
  description: 'A repository for the Morpho Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <body className={`${inter.variable} antialiased font-inter h-full`}>
        <Providers>
          <div className='flex flex-col min-h-screen bg-morpho-bg-base'>
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
