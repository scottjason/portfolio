import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { NavbarMobile } from './components/NavbarMobile';
import { NavbarDesktop } from './components/NavbarDesktop';

import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Scott Jason',
  description: 'Scott Jason Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={`${lato.className} min-h-full bg-gradient-to-b from-gray-950 to-gray-900 tracking-wide`}
      >
        <div className='hidden lg:block'>
          <NavbarDesktop />
        </div>
        <div className='block lg:hidden'>
          <NavbarMobile />
        </div>
        <div className='flex min-h-full flex-col'>{children}</div>
      </body>
    </html>
  );
}
