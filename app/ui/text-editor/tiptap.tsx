'use client';

import { useEditor, EditorContent, JSONContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';
import Toolbar from './toolbar';

export default function Tiptap({
  initialContent,
  onChange,
}: {
  initialContent: string | undefined;
  onChange: Function;
}) {
  const handleChange = (newContent: JSONContent) => {
    onChange(newContent);
  };

  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: 'p-4',
      },
    },
    onUpdate: ({ editor }) => {
      // handleChange(editor.getJSON());
      handleChange(editor.getHTML());
    },
    onBlur: ({ editor }) => {
      handleChange(editor.getHTML());
    },
    content: initialContent,
  });

  useEffect(() => {
    if (editor) {
      editor.commands.focus('end');
    }
  }, [editor]);

  return (
    <>
      <Toolbar editor={editor} content={initialContent} />
      <EditorContent editor={editor} />
    </>
  );
}
