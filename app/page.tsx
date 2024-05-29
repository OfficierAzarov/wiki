import Main from './ui/main';
import Nav from './ui/nav';

export default function Home() {
  return (
    <div className={'grid grid-cols-4 gap-4'}>
      <Nav />
      <div className={'col-span-3'}>
        <Main />
      </div>
    </div>
  );
}
