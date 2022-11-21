// tailwind css and custom css
import '../../styles/tailwind.css';
import '../../styles/custom.css';

import { PageContent, Main, Aside } from '@frontends/shared-ui';
import { AppProps } from 'next/app';
import PageHeader from 'next/head';
import { Sidebar } from '../components/Sidebar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHeader>
        <title>Welcome!</title>
      </PageHeader>

      <PageContent>
        <Aside>
          <Sidebar />
        </Aside>

        <Main>
          <div className="p-2">
            <Component {...pageProps} />
          </div>
        </Main>
      </PageContent>
    </>
  );
}
