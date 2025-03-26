import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';

import Footer from '@/components/footer';

const ibmSans = IBM_Plex_Sans({weight:"400", preload: true, subsets: ["latin", "greek", "latin-ext"]});

export const metadata: Metadata = {
  title: 'EasyExpenses',
  description: 'An Expense Tracker app built with react',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibmSans.className}>{children}
        <Footer />
      </body>
    </html>
  );
}
