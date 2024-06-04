import Header from './ui/header';
import Main from './ui/main';
import Nav from './ui/nav';

export default function Home() {
  return (
    <>
      <Header />
      <div className={'grid grid-cols-5'}>
        <Nav />
        <div className={'col-span-4'}>
          <Main />
        </div>
      </div>
    </>
  );
}
