import { JSONContent } from '@tiptap/react';
import { createContext } from 'react';

interface WikiTextContextType {
  wikiText: JSONContent;
  setWikiText: (state: JSONContent) => void;
}

export const WikiTextContext = createContext<WikiTextContextType | undefined>(
  undefined
);

interface DisplayContextType {
  isEditorOpen: boolean;
  setIsEditorOpen: (isEditorOpen: boolean) => void;
}

export const DisplayContext = createContext<DisplayContextType | undefined>(
  undefined
);
