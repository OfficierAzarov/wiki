'use client';

import { useEditor, EditorContent, JSONContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

export default function Tiptap({
  initialContent,
  onChange,
}: {
  initialContent: string;
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
      handleChange(editor.getJSON());
    },
    onBlur: ({ editor }) => {
      handleChange(editor.getJSON());
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
      <EditorContent editor={editor} />
    </>
  );
}
