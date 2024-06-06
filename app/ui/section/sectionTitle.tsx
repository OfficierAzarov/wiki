'use client';

import { useContext, useState } from 'react';
import TextEditor from '@/app/components/textEditor';
import Button from '../button';
import { DisplayContext, WikiTextContext } from '@/app/context/context';

export default function SectionTitle({
  text,
  type,
}: {
  text: string;
  type: 'mainSection' | 'section' | 'subSection';
}) {
  const wikiTextContext = useContext(WikiTextContext);
  const displayContext = useContext(DisplayContext);

  const openEditor = (): void => {
    displayContext?.setIsEditorOpen(true);
  };

  return (
    <>
      {type === 'mainSection' && (
        <>
          <hgroup
            style={{
              visibility: displayContext?.isEditorOpen ? 'hidden' : 'visible',
            }}
          >
            <h1
              className={`pb-2 mb-4 border-b border-gray-500 text-3xl font-serif`}
            >
              {wikiTextContext?.wikiText.content
                ? wikiTextContext?.wikiText.content[0]?.content[0]?.text
                : 'placeholder'}
              {/* : wikiTextContext?.wikiText.content[0]?.content[0]?.text} */}
              <Button text="Edit" action={openEditor} />
            </h1>
          </hgroup>
          <TextEditor
            isShown={displayContext?.isEditorOpen}
            // initialContent={'bla'}
            initialContent={
              wikiTextContext?.wikiText.content
                ? wikiTextContext?.wikiText.content[0]?.content[0]?.text
                : 'placeholder'
            }
          />
        </>
      )}

      {type === 'section' && (
        <>
          <h2 className={`pb-2 border-b border-gray-500 text-2xl font-serif`}>
            {text}
            <Button text="Edit" action={openEditor} />
          </h2>
          <TextEditor isShown={isEditorOpen} initialContent={text} />
        </>
      )}
      {type === 'subSection' && (
        <>
          <h3 className={`pb-2 mb-4 border-b border-gray-300 text-lg`}>
            {text}
            <Button text="Edit" action={openEditor} />
            <TextEditor isShown={isEditorOpen} initialContent={text} />
          </h3>
        </>
      )}
    </>
  );
}
