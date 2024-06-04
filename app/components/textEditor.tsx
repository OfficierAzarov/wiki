'use client';

import { useState } from 'react';
import Tiptap from './tiptap';
import { JSONContent } from '@tiptap/react';

export default function TextEditor() {
  const [content, setContent] = useState<JSONContent>({});

  const handleContentChange = (newContent: JSONContent) => {
    setContent(newContent);
    console.log(content);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      //   id: uuidv4(),
      content: content,
    };
    console.log(data);
    // const existingDataString = localStorage.getItem('myData');
    // const existingData = existingDataString
    //   ? JSON.parse(existingDataString)
    //   : [];
    // const updatedData = [...existingData, data];
    // localStorage.setItem('myData', JSON.stringify(updatedData));
    // setContent('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <Tiptap
        // content={content}
        onChange={(newContent: JSONContent) => handleContentChange(newContent)}
      />
    </form>
  );
}
