import type { Metadata } from 'next';
import { noto } from '@/app/ui/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Achabott Dust — Wikify',
  description: 'A private wikipedia to reflect',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`p-8 h-screen bg-white ${noto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
