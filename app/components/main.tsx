import Infobox from './infobox';
import Section from './section';
import dynamic from 'next/dynamic';

import { SectionType } from '../types/domain';

export default function Main() {
  return (
    <main className="px-6">
      <header className="col-span-2">
        <Section
          type={SectionType.Title}
          text="<h1>What's your name, handsome?</h1>"
        />
      </header>
      <article className={'grid grid-cols-3'}>
        <div className={'col-span-2'}>
          <Section
            type={SectionType.Text}
            text="<p>A few lines to recap...</p><h2>Section title</h2><p>Start writing about you...</p>"
          />
        </div>
        <Infobox />
      </article>
    </main>
  );
}
