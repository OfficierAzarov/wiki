export default function SectionTitle({
  text,
  type,
}: {
  text: string;
  type: 'mainSection' | 'section' | 'subSection';
}) {
  if (type === 'mainSection') {
    return (
      <h1 className={`pb-2 mb-4 border-b border-gray-500 text-3xl font-serif`}>
        {text}
        <span className={'ml-2 inline-block align-middle font-sans text-xs'}>
          [Modifier]
        </span>
      </h1>
    );
  }
  if (type === 'section') {
    return (
      <h2 className={`pb-2 border-b border-gray-500 text-2xl font-serif`}>
        {text}
        <span className={'ml-2 inline-block align-middle font-sans text-xs'}>
          [Modifier]
        </span>
      </h2>
    );
  }
  if (type === 'subSection') {
    return (
      <h3 className={`pb-2 mb-4 border-b border-gray-300 text-lg`}>
        {text}
        <span className={'ml-2 inline-block align-middle font-sans text-xs'}>
          [Modifier]
        </span>
      </h3>
    );
  }
}
