import Infobox from './infobox';
import Section from './section';
import SectionTitle from '../ui/section/sectionTitle';

import data from '../../mock.js';

export default function Main() {
  return (
    <main className="px-6">
      <header className="col-span-2">
        <SectionTitle text="Achabott Dust" type="mainSection" />
      </header>
      {/* <article className={'grid grid-cols-3'}>
        <div className={'col-span-2'}>
          <Section text={data.infobox} type="section" />
          <Section title="Biographie" type="section" />
          <Section
            title="Enfance"
            text={data.biography.youth}
            type="subSection"
          />
        </div>
        <Infobox />
      </article> */}
    </main>
  );
}
