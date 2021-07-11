import { Title } from '@/common';
import Head from 'next/head';

export const Home = () => {
  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
        <meta
          name="description"
          content="Next App boilerplate, typescript + eslint + prettier + editorconfig + jest + styled-components"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title text="Next Boilerplate with Architecture" />
    </>
  );
};
