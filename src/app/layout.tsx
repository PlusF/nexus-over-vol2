import type { Metadata } from 'next';
import { Zen_Antique } from 'next/font/google';

import './globals.css';
import { ConditionalFooter } from '@/components/ConditionalFooter';

const zenAntique = Zen_Antique({
  variable: '--font-zen-antique',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Nexus Over vol.2',
  description: 'Nexus Over vol.2',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${zenAntique.variable}`}>
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}
