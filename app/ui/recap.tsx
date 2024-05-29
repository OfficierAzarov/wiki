import Image from 'next/image';
import picture from '../../public/images/achab.jpg';

export default function Recap() {
  return (
    <aside className={'p-1 bg-slate-50 border border-gray-300'}>
      <div className={'flex flex-col justify-center items-center'}>
        <div className={'w-full p-2 bg-wiki-blue text-center text-white'}>
          Achabott Dust
        </div>
        <Image
          src={picture}
          alt="Achabott Dust in Malebolge."
          className="p-2"
        ></Image>
        <figcaption className={'text-vsm'}>
          Achabott Dust à Malebolge
        </figcaption>
      </div>
      <div className={'bg-cyan-300'}>Achabott Dust</div>
      <div className={'bg-cyan-700'}>Achabott Dust</div>
    </aside>
  );
}
