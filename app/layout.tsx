import type { Metadata } from 'next';
import { Syne, Space_Mono } from 'next/font/google';
import './globals.css';
import Noise from '@/components/ui/Noise';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio | Mochammad Fauzan',
  description: "Crafting Digital Experiences • Building Tomorrow's Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={`${syne.variable} ${spaceMono.variable} dark`}
      suppressHydrationWarning>
      <body
        className='bg-[#050505] text-[#e0e0e0] antialiased selection:bg-[#ccff00] selection:text-black'
        suppressHydrationWarning>
        <Noise />
        {children}
      </body>
    </html>
  );
}
