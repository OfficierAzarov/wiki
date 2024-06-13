'use client';

import { useContext, useState } from 'react';
import TextEditor from '@/app/components/textEditor';
import Button from '../ui/button';
import { WikiTextContext } from '@/app/context/context';

export default function Section({
  type,
  text,
}: {
  type: 'title' | 'text';
  text: string;
}) {
  const wikiTextContext = useContext(WikiTextContext);

  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const openEditor = (): void => {
    setIsEditorOpen(true);
  };

  const closeEditor = (): void => {
    setIsEditorOpen(false);
  };

  return (
    <>
      {type === 'title' && (
        <>
          <hgroup
            style={{
              visibility: isEditorOpen ? 'hidden' : 'visible',
            }}
            className="flex pb-2 mb-4 border-b border-gray-500"
          >
            <h1
              className={`text-3xl font-serif`}
              dangerouslySetInnerHTML={{
                __html: wikiTextContext?.wikiTitle
                  ? wikiTextContext?.wikiTitle
                  : text,
              }}
            ></h1>
            <Button text="Edit" action={openEditor} />
          </hgroup>
          <TextEditor
            isEditorOpen={isEditorOpen}
            initialContent={
              wikiTextContext?.wikiTitle
                ? wikiTextContext?.wikiTitle
                : 'Commencez à écrire ici...'
            }
            closeEditor={closeEditor}
            type="title"
          />
        </>
      )}
      {type === 'text' && (
        <>
          <section
            className="flex pb-2 mb-4  border-b border-gray-500"
            style={{
              visibility: isEditorOpen ? 'hidden' : 'visible',
            }}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: wikiTextContext?.wikiText
                  ? wikiTextContext?.wikiText
                  : text,
              }}
            ></p>
            <Button text="Edit" action={openEditor} />
          </section>
          <TextEditor
            isEditorOpen={isEditorOpen}
            initialContent={
              wikiTextContext?.wikiText
                ? wikiTextContext?.wikiText
                : 'Commencez à écrire ici...'
            }
            closeEditor={closeEditor}
            type="text"
          />
        </>
      )}
    </>
  );
}
