import Infobox from './infobox';
import Section from './section';
import SectionTitle from '../ui/section/sectionTitle';
import Tiptap from './tiptap';

import data from '../../mock.js';
import TextEditor from './textEditor';

export default function Main() {
  return (
    <main>
      <header className={'col-span-2 p-4'}>
        <SectionTitle text="Achabott Dust" type="mainSection" />
      </header>
      <article className={'grid grid-cols-3'}>
        <div className={'col-span-2'}>
          <TextEditor />
          <Section text={data.infobox} type="section" />
          <Section title="Biographie" type="section" />
          <Section
            title="Enfance"
            text={data.biography.youth}
            type="subSection"
          />
        </div>
        <Infobox />
      </article>
    </main>
  );
}
