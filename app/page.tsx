import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';

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
