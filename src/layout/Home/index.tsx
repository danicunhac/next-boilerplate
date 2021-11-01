import { Title } from '@/common';
import Head from 'next/head';
import { FaGithub } from 'react-icons/fa';
import { Wrapper } from './styles';

export const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>Next.js Boilerplate</title>
        <meta
          name="description"
          content="Next App boilerplate, typescript + eslint + prettier + editorconfig + jest + styled-components"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title text="Next.js Boilerplate w/ Common Layout Design" />
      <a href="https://github.com/danicunhac/next-boilerplate">
        <FaGithub size={32} color="#000" style={{ marginTop: 32 }} />
      </a>
    </Wrapper>
  );
};
