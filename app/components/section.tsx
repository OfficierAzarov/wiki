'use client';

import { useContext, useState } from 'react';
import TextEditor from '@/app/components/textEditor';
import Button from '../ui/button';
import { WikiTextContext } from '@/app/context/context';

export default function Section({
  type,
  text,
}: {
  type: 'title' | 'recap' | 'text';
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
            <div
              className={`w-full`}
              dangerouslySetInnerHTML={{
                __html: wikiTextContext?.wikiTitle
                  ? wikiTextContext?.wikiTitle
                  : text,
              }}
            ></div>
            <Button text="Edit" action={openEditor} />
          </hgroup>
          <TextEditor
            isEditorOpen={isEditorOpen}
            initialContent={
              wikiTextContext?.wikiTitle ? wikiTextContext?.wikiTitle : text
            }
            closeEditor={closeEditor}
            type="title"
          />
        </>
      )}
      {type === 'recap' && (
        <>
          <section
            className="flex"
            style={{
              visibility: isEditorOpen ? 'hidden' : 'visible',
            }}
          >
            <p
              className="w-full"
              dangerouslySetInnerHTML={{
                __html: wikiTextContext?.wikiRecap
                  ? wikiTextContext?.wikiRecap
                  : text,
              }}
            ></p>
            <Button text="Edit" action={openEditor} />
          </section>
          <TextEditor
            isEditorOpen={isEditorOpen}
            initialContent={
              wikiTextContext?.wikiRecap ? wikiTextContext?.wikiRecap : text
            }
            closeEditor={closeEditor}
            type="recap"
          />
        </>
      )}
      {type === 'text' && (
        <>
          <section
            className="flex"
            style={{
              visibility: isEditorOpen ? 'hidden' : 'visible',
            }}
          >
            <div
              className="w-full"
              dangerouslySetInnerHTML={{
                __html: wikiTextContext?.wikiText
                  ? wikiTextContext?.wikiText
                  : text,
              }}
            ></div>
            <Button text="Edit" action={openEditor} />
          </section>
          <TextEditor
            isEditorOpen={isEditorOpen}
            initialContent={
              wikiTextContext?.wikiText ? wikiTextContext?.wikiText : text
            }
            closeEditor={closeEditor}
            type="text"
          />
        </>
      )}
    </>
  );
}
