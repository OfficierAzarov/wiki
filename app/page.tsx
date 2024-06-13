'use client';

import { useState } from 'react';
import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';
import { WikiTextContext } from './context/context';
import { HTMLContent } from '@tiptap/react';

export default function Home() {
  const [wikiTitle, setWikiTitle] = useState<HTMLContent>('');
  const [wikiText, setWikiText] = useState<HTMLContent>('');

  return (
    <>
      <Header />
      <WikiTextContext.Provider
        value={{ wikiTitle, setWikiTitle, wikiText, setWikiText }}
      >
        <div className={'grid grid-cols-5'}>
          <Nav />
          <div className={'col-span-4'}>
            <Main />
          </div>
        </div>
      </WikiTextContext.Provider>
    </>
  );
}
