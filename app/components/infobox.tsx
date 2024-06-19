import { useContext } from 'react';
import Image from 'next/image';
import picture from '../../public/images/achab.jpg';
import { WikiTextContext } from '../context/context';
import { convertHtmlToString } from '../lib/helpers/htmlToText';

export default function Infobox() {
  const wikiTextContext = useContext(WikiTextContext);

  return (
    <aside className={'ml-10 bg-slate-50 border border-gray-300'}>
      <div className={'flex flex-col justify-center items-center'}>
        <div className={'w-full p-2 bg-wiki-blue text-center text-white'}>
          {convertHtmlToString(wikiTextContext?.wikiTitle)}
        </div>
        <Image
          src={picture}
          alt="Achabott Dust in Malebolge."
          className="p-2"
          width={200}
          height={200}
        ></Image>
        <figcaption className={'text-xs'}>
          Achabott Dust à Malebolge.
        </figcaption>
      </div>
      <div className={'bg-cyan-300'}>Achabott Dust</div>
      <div className={'bg-cyan-700'}>Achabott Dust</div>
    </aside>
  );
}
