import { Home } from '@/layout/Home';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next Boilerplate</title>
        <meta
          name="description"
          content="Next App boilerplate, typescript + eslint + prettier + editorconfig + jest + styled-components"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
};

export default HomePage;
