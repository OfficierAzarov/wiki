import { HTMLContent } from '@tiptap/react';
import { createContext } from 'react';

interface WikiTextContextType {
  wikiTitle: HTMLContent;
  setWikiTitle: (state: HTMLContent) => void;
  wikiText: HTMLContent;
  setWikiText: (state: HTMLContent) => void;
}

export const WikiTextContext = createContext<WikiTextContextType | undefined>(
  undefined
);
