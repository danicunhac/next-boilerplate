import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Next Boilerplate</title>
        <meta
          name="description"
          content="Next + Tailwind App boilerplate, typescript + eslint + prettier + editorconfig"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-blue-900 text-8xl">
        ✨ Next + Tailwind Boilerplate ✨
      </h1>
    </div>
  );
}
