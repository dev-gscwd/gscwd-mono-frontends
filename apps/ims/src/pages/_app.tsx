import '../../styles/tailwind.css';
import '../../styles/custom.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { PageWrapper, MainWrapper, AsideWrapper, NavWrapper } from '@frontends/ui';
import NavbarItems from '../components/Navigation';
import SidebarItems from '../components/Sidebar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome!</title>
      </Head>

      <PageWrapper>
        <NavWrapper>
          <NavbarItems />
        </NavWrapper>
        <AsideWrapper>
          <SidebarItems />
        </AsideWrapper>

        <MainWrapper>
          <Component {...pageProps} />
        </MainWrapper>
      </PageWrapper>
    </>
  );
}
