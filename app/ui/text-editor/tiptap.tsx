'use client';

import { useEditor, EditorContent, JSONContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';
import Toolbar from './toolbar';
import Link from '@tiptap/extension-link';

export default function Tiptap({
  initialContent,
  onChange,
}: {
  initialContent: string | TrustedHTML;
  onChange: Function;
}) {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
    ],
    editorProps: {
      attributes: {
        class: 'p-4',
      },
    },
    onUpdate: ({ editor }) => {
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
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
}
