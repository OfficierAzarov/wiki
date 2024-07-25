import { UntrustedHTML } from '../../../types/html';
import DOMPurify from 'dompurify';

export const sanitize = (unsanitizedHtml: UntrustedHTML): string => {
  return DOMPurify.sanitize(unsanitizedHtml);
};
