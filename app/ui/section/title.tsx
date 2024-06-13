// 'use client';

// import { useContext, useState } from 'react';
// import TextEditor from '@/app/components/textEditor';
// import Button from '../button';
// import { WikiTextContext } from '@/app/context/context';

// export default function Title({ text }: { text: string }) {
//   const wikiTextContext = useContext(WikiTextContext);

//   const [isEditorOpen, setIsEditorOpen] = useState(false);

//   const openEditor = (): void => {
//     setIsEditorOpen(true);
//   };

//   const closeEditor = (): void => {
//     setIsEditorOpen(false);
//   };

//   return (
//     <>
//       <hgroup
//         style={{
//           visibility: isEditorOpen ? 'hidden' : 'visible',
//         }}
//       >
//         <h1
//           className={`pb-2 mb-4 border-b border-gray-500 text-3xl font-serif`}
//         >
//           {wikiTextContext?.wikiTitle ? wikiTextContext?.wikiTitle : text}
//           <Button text="Edit" action={openEditor} />
//         </h1>
//       </hgroup>
//       <TextEditor
//         isEditorOpen={isEditorOpen}
//         initialContent={
//           wikiTextContext?.wikiText
//             ? wikiTextContext?.wikiText
//             : 'Commencez à écrire ici...'
//         }
//         closeEditor={closeEditor}
//         type="title"
//       />
//     </>
//   );
// }
