import Infobox from './infobox';
import Section from './section';

import data from '../../mock.js';

export default function Main() {
  return (
    <main className="px-6">
      <header className="col-span-2">
        <Section type="title" text="What's your name, handsome?" />
      </header>
      <article className={'grid grid-cols-3'}>
        <div className={'col-span-2'}>
          <Section type="recap" text="A few lines to recap..." />
        </div>
        <div className={'col-span-2'}>
          <Section type="text" text="Start writing..." />
        </div>
        <Infobox />
      </article>
    </main>
  );
}
