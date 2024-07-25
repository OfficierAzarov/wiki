'use client';

import { useContext, useState, useEffect } from 'react';
import TextEditor from '@/app/components/textEditor';
import Button from '../ui/button';
import { WikiTextContext } from '@/app/context/context';
import { SectionType } from '../types/domain';
import { sanitize } from '../lib/helpers/html-processing/sanitize';

export default function Section({
  type,
  text,
}: {
  type: SectionType;
  text: string;
}) {
  const wikiTextContext = useContext(WikiTextContext);

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [initialContent, setInitialContent] = useState(text);

  const openEditor = (): void => {
    setIsEditorOpen(true);
  };

  const closeEditor = (): void => {
    setIsEditorOpen(false);
  };

  useEffect(() => {
    if (type === 'title' && wikiTextContext?.wikiTitle) {
      setInitialContent(wikiTextContext.wikiTitle);
    } else if (type === 'text' && wikiTextContext?.wikiText) {
      setInitialContent(wikiTextContext.wikiText);
    }
  }, [type, wikiTextContext]);

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
                __html: sanitize(initialContent),
              }}
            ></div>
            <Button text="Edit" action={openEditor} />
          </hgroup>
          <TextEditor
            isEditorOpen={isEditorOpen}
            initialContent={initialContent}
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
                __html: sanitize(initialContent),
              }}
            ></div>
            <Button text="Edit" action={openEditor} />
          </section>
          <TextEditor
            isEditorOpen={isEditorOpen}
            initialContent={initialContent}
            closeEditor={closeEditor}
            type="text"
          />
        </>
      )}
    </>
  );
}
