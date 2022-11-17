import '../../styles/tailwind.css';
import '../../styles/custom.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { PageWrapper, MainWrapper, AsideWrapper, NavWrapper } from '@frontends/ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome!</title>
      </Head>

      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </>
  );
}
