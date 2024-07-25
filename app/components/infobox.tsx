import { useContext } from 'react';
import Image from 'next/image';
import picture from '../../public/images/achab.jpg';
import { WikiTextContext } from '../context/context';
import { convertHtmlToString } from '../lib/helpers/htmlToText';

export default function Infobox() {
  const wikiTextContext = useContext(WikiTextContext);

  return (
    <aside className="ml-10 bg-slate-50 border border-gray-300 px-3">
      <div className="flex flex-col justify-center items-center border-b border-wiki-blue-light py-2 my-2">
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
      <table className="">
        <tbody>
          <tr>
            <th className="font-bold">Nom de naissance</th>
            <td className="ml-5">Achabott Dust</td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}
