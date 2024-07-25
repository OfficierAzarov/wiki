export const convertHtmlToString = (html: string): string => {
  const regex = /(<([^>]+)>)/gi;
  return html.replace(regex, '');
};
