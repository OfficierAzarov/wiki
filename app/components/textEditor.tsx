'use client';

import { useContext, useState } from 'react';
import Tiptap from '../ui/text-editor/tiptap';
import { HTMLContent } from '@tiptap/react';

import { WikiTextContext } from '../context/context';

export default function TextEditor({
  type,
  initialContent,
  isEditorOpen,
  closeEditor,
}: {
  type: 'title' | 'recap' | 'text';
  initialContent: string | TrustedHTML;
  isEditorOpen: boolean;
  closeEditor: Function;
}) {
  const wikiTextContext = useContext(WikiTextContext);

  const [content, setContent] = useState<HTMLContent>('');

  const handleContentChange = (newContent: HTMLContent) => {
    setContent(newContent);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (type === 'title') wikiTextContext?.setWikiTitle(content);
    if (type === 'recap') wikiTextContext?.setWikiRecap(content);
    if (type === 'text') wikiTextContext?.setWikiText(content);
    closeEditor();
  };

  return (
    <>
      {isEditorOpen && (
        <form
          onSubmit={handleSubmit}
          className="border border-gray-500 rounded-t-md"
        >
          <Tiptap
            initialContent={initialContent}
            onChange={(newContent: HTMLContent) =>
              handleContentChange(newContent)
            }
          />
        </form>
      )}
    </>
  );
}
