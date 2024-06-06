'use client';

import { useState } from 'react';
import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';
import { DisplayContext, WikiTextContext } from './context/context';
import { JSONContent } from '@tiptap/react';

export default function Home() {
  const [wikiText, setWikiText] = useState<JSONContent>({});
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);

  return (
    <WikiTextContext.Provider value={{ wikiText, setWikiText }}>
      <DisplayContext.Provider value={{ isEditorOpen, setIsEditorOpen }}>
        <Header />
        <div className={'grid grid-cols-5'}>
          <Nav />
          <div className={'col-span-4'}>
            <Main />
          </div>
        </div>
      </DisplayContext.Provider>
    </WikiTextContext.Provider>
  );
}
