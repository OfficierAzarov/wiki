import Link from 'next/link';
import Image from 'next/image';
import { merriweather } from '@/app/ui/fonts';
import logo from '../../public/images/logo.png';

export default function Header() {
  return (
    <header className="flex">
      <Link href="/">
        <Image
          src={logo}
          alt="Achabott Dust in Malebolge."
          className="mr-5 pb-10 pt-1"
          width={40}
          height={40}
        ></Image>
      </Link>
      <hgroup>
        <span className={`block text-lg ${merriweather.className}`}>
          Wikify
        </span>
        <span className="block text-xs">Digital introspector</span>
      </hgroup>
    </header>
  );
}
