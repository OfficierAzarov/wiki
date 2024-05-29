import Recap from './recap';

export default function Main() {
  return (
    <main>
      <header className={'col-span-2'}>
        <h1 className={'border-b border-gray-400 text-2xl font-serif'}>
          Achabott Dust
        </h1>
      </header>
      <article className={'grid grid-cols-3'}>
        <section className={'col-span-2'}>blablabla</section>
        <Recap />
      </article>
    </main>
  );
}
