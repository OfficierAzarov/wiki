'use client';

import { useContext, useState } from 'react';
import TextEditor from '@/app/components/textEditor';
import Button from '../ui/button';
import { WikiTextContext } from '@/app/context/context';
import { SectionType } from '../types/SectionType';

export default function Section({
  type,
  text,
}: {
  type: SectionType;
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

  const chooseText = (type: SectionType): string | TrustedHTML => {
    if (type === 'title') {
      return wikiTextContext?.wikiTitle ? wikiTextContext?.wikiTitle : text;
    }
    if (type === 'text') {
      return wikiTextContext?.wikiText ? wikiTextContext?.wikiText : text;
    }
    return text;
  };

  return (
    <>
      {type === 'title' && (
        <>
          <hgroup
            style={{
              visibility: isEditorOpen ? 'hidden' : 'visible',
            }}
            className="pb-2 mb-4 border-b border-gray-500"
          >
            <div
              className="inline-block"
              dangerouslySetInnerHTML={{
                __html: chooseText(SectionType.Title),
              }}
            ></div>
            <Button text="Edit" action={openEditor} />
          </hgroup>
          <TextEditor
            isEditorOpen={isEditorOpen}
            initialContent={chooseText(SectionType.Title)}
            closeEditor={closeEditor}
            type="title"
          />
        </>
      )}
      {type === 'text' && (
        <>
          <section
            className="grid grid-cols-8"
            style={{
              visibility: isEditorOpen ? 'hidden' : 'visible',
            }}
          >
            <div
              className="inline-block col-span-7 text-justify"
              dangerouslySetInnerHTML={{
                __html: chooseText(SectionType.Text),
              }}
            ></div>
            <Button text="Edit" action={openEditor} />
          </section>
          <TextEditor
            isEditorOpen={isEditorOpen}
            initialContent={chooseText(SectionType.Text)}
            closeEditor={closeEditor}
            type="text"
          />
        </>
      )}
    </>
  );
}
