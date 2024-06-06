'use client';

import { useContext, useState } from 'react';
import Tiptap from './tiptap';
import { JSONContent } from '@tiptap/react';

import { saveEdits } from '../lib/buttonActions';
import Button from '../ui/button';
import { DisplayContext, WikiTextContext } from '../context/context';

export default function TextEditor({
  initialContent,
  isShown = false,
}: {
  initialContent: string | undefined;
  isShown: boolean | undefined;
}) {
  const wikiTextContext = useContext(WikiTextContext);

  const [content, setContent] = useState<JSONContent>({});

  const displayContext = useContext(DisplayContext);

  const closeEditor = (): void => {
    displayContext?.setIsEditorOpen(false);
  };

  const handleContentChange = (newContent: JSONContent) => {
    setContent(newContent);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    wikiTextContext?.setWikiText(content);
    closeEditor();
  };

  return (
    <>
      {isShown && (
        <form onSubmit={handleSubmit} className="border border-gray-500">
          <Tiptap
            initialContent={initialContent}
            onChange={(newContent: JSONContent) =>
              handleContentChange(newContent)
            }
          />
          <Button text="Save" action={saveEdits} isSubmitButton />
        </form>
      )}
    </>
  );
}
