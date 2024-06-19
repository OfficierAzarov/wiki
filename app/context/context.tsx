import { HTMLContent } from '@tiptap/react';
import { createContext } from 'react';

interface WikiTextContextType {
  wikiTitle: HTMLContent;
  setWikiTitle: (state: HTMLContent) => void;
  wikiRecap: HTMLContent;
  setWikiRecap: (state: HTMLContent) => void;
  wikiText: HTMLContent;
  setWikiText: (state: HTMLContent) => void;
}

const defaultContextValue: WikiTextContextType = {
  wikiTitle: '',
  setWikiTitle: () => {},
  wikiRecap: '',
  setWikiRecap: () => {},
  wikiText: '',
  setWikiText: () => {},
};

export const WikiTextContext =
  createContext<WikiTextContextType>(defaultContextValue);
