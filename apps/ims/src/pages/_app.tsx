import '../../styles/tailwind.css';
import '../../styles/custom.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome!</title>
      </Head>
      <main className="overflow-x-hidden">
        <Component {...pageProps} />
      </main>
    </>
  );
}
