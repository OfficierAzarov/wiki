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
      <body
        className={`py-5 px-20 h-screen bg-white ${noto.className} antialiased text-base`}
      >
        {children}
      </body>
    </html>
  );
}
