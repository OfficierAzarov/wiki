import { UntrustedHTML } from '../../../types/html';
import DOMPurify from 'isomorphic-dompurify';

export const sanitize = (unsanitizedHtml: UntrustedHTML): string => {
  return DOMPurify.sanitize(unsanitizedHtml);
};
