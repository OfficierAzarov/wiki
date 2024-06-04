import { Noto_Sans_Elymaic } from 'next/font/google';
import { Merriweather } from 'next/font/google';

export const noto = Noto_Sans_Elymaic({
  weight: ['400'],
  subsets: ['latin'],
});

export const merriweather = Merriweather({
  weight: ['400'],
  subsets: ['latin'],
});
