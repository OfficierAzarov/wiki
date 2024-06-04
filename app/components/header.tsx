import Link from 'next/link';
import Image from 'next/image';
import { merriweather } from '@/app/ui/fonts';
import { Tooltip } from '@nextui-org/tooltip';
import logo from '../../public/images/logo.png';

export default function Header() {
  return (
    <header className="grid grid-cols-5">
      <hgroup className="flex">
        <Link href="/">
          <Image
            src={logo}
            alt="Achabott Dust in Malebolge."
            className="mr-5 pb-10 pt-1"
            width={40}
            height={40}
          ></Image>
        </Link>
        <div>
          <span
            className={`block first-letter:text-2xl ${merriweather.className}`}
          >
            WIKIFY
          </span>
          <span className="block text-sm font-serif">
            Electronic introspector
          </span>
        </div>
      </hgroup>
      <div className="col-start-5 text-sm">
        <Tooltip content="Available soon!">
          <Link href="/save" className="mr-6">
            Save locally&nbsp;💾
          </Link>
        </Tooltip>
        <Tooltip content="Available soon!">
          <Link href="/save">Save as PDF&nbsp;📖</Link>
        </Tooltip>
      </div>
    </header>
  );
}
