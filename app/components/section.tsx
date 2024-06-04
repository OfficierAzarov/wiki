import SectionTitle from '../ui/section/sectionTitle';

export default function Section({
  type,
  title,
  text,
}: {
  type: 'mainSection' | 'section' | 'subSection';
  title?: string;
  text?: string;
}) {
  return (
    <section className="p-4">
      {title ? <SectionTitle text={title} type={type} /> : null}
      {text ? <p>{text}</p> : null}
    </section>
  );
}
