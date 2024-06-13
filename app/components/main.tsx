import Infobox from './infobox';
import Section from './section';
import Title from '../ui/section/title';

import data from '../../mock.js';

export default function Main() {
  return (
    <main className="px-6">
      <header className="col-span-2">
        <Section type="title" text="Achabott Dust" />
      </header>
      <article className={'grid grid-cols-3'}>
        <div className={'col-span-2'}>
          <Section type="text" text="Il était une fois." />
        </div>
        <Infobox />
      </article>
    </main>
  );
}
