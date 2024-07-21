import Infobox from './infobox';
import Section from './section';

export default function Main() {
  return (
    <main className="px-6">
      <header className="col-span-2">
        <Section type="title" text="What's your name, handsome?" />
      </header>
      <article className={'grid grid-cols-3'}>
        <div className={'col-span-2'}>
          <Section type="recap" text="A few lines to recap..." />
          <Section type="text" text="<h2>Start writing...</h2>" />
        </div>
        <Infobox />
      </article>
    </main>
  );
}
