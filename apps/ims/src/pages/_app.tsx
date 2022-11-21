import '../../styles/tailwind.css';
import '../../styles/custom.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { PageContent, Main, Aside, NavWrapper } from '@frontends/shared-ui';
import SidebarTest from './sidebar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome!</title>
      </Head>

      <PageContent>
        <Aside>This is sidebar</Aside>
        <Main>
          <Component {...pageProps} />
        </Main>
      </PageContent>
    </>
  );
}
