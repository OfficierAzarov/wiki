'use client';

import React, { useCallback } from 'react';
import { type Editor } from '@tiptap/react';
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Link,
  Undo,
  Redo,
} from 'lucide-react';
import Button from '../button';
import { saveEdits } from '@/app/lib/buttonActions';

export default function Toolbar({ editor }: { editor: Editor | null }) {
  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl ?? '');

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url })
      .run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div
      className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
    gap-5 w-full flex-wrap border-b border-gray-700"
    >
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap ">
        <button
          onClick={e => {
            e.preventDefault();
            editor?.chain().focus().undo().run();
          }}
          className={
            editor?.isActive('undo')
              ? 'bg-gray-700 text-white p-2 rounded-lg'
              : 'text-gray-700 hover:bg-gray-700 hover:text-white p-1 hover:rounded-lg'
          }
        >
          <Undo className="w-5 h-5" />
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            editor?.chain().focus().redo().run();
          }}
          className={
            editor?.isActive('redo')
              ? 'bg-gray-700 text-white p-2 rounded-lg'
              : 'text-gray-700 hover:bg-gray-700 hover:text-white p-1 hover:rounded-lg'
          }
        >
          <Redo className="w-5 h-5" />
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            editor?.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor?.isActive('heading', { level: 2 })
              ? 'bg-gray-700 text-white p-2 rounded-lg'
              : 'text-gray-700 hover:bg-gray-700 hover:text-white p-1 hover:rounded-lg'
          }
        >
          Titre
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            editor?.chain().focus().toggleBold().run();
          }}
          className={
            editor?.isActive('bold')
              ? 'bg-gray-700 text-white p-2 rounded-lg'
              : 'text-gray-700 hover:bg-gray-700 hover:text-white p-1 hover:rounded-lg'
          }
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            editor?.chain().focus().toggleItalic().run();
          }}
          className={
            editor?.isActive('italic')
              ? 'bg-gray-700 text-white p-2 rounded-lg'
              : 'text-gray-700 hover:bg-gray-700 hover:text-white p-1 hover:rounded-lg'
          }
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            editor?.chain().focus().toggleBulletList().run();
          }}
          className={
            editor?.isActive('bulletList')
              ? 'bg-gray-700 text-white p-2 rounded-lg'
              : 'text-gray-700 hover:bg-gray-700 hover:text-white p-1 hover:rounded-lg'
          }
        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            editor?.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor?.isActive('orderedList')
              ? 'bg-gray-700 text-white p-2 rounded-lg'
              : 'text-gray-700 hover:bg-gray-700 hover:text-white p-1 hover:rounded-lg'
          }
        >
          <ListOrdered className="w-5 h-5" />
        </button>
        <button
          onClick={setLink}
          className={
            editor?.isActive('orderedList')
              ? 'bg-gray-700 text-white p-2 rounded-lg'
              : 'text-gray-700 hover:bg-gray-700 hover:text-white p-1 hover:rounded-lg'
          }
        >
          <Link className="w-5 h-5" />
        </button>
      </div>
      <Button text="Save" action={saveEdits} isSubmitButton />
    </div>
  );
}
