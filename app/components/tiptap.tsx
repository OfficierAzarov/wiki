'use client';

import { useEditor, EditorContent, JSONContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function Tiptap({ onChange }: { onChange: Function }) {
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
  });

  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
}
