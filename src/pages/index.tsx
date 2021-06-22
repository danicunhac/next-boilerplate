import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Boilerplate</title>
        <meta
          name="description"
          content="Next App boilerplate, typescript + eslint + prettier + editorconfig"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
