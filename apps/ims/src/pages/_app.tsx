// tailwind css and custom css
import '../../styles/tailwind.css';
import '../../styles/custom.css';

// library imports
import { PageContent, Main, Aside } from '@frontends/shared-ui';
import { AppProps } from 'next/app';
import { SideNavigation } from '@frontends/ims-ui';
import PageHeader from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHeader>
        <title>Welcome!</title>
      </PageHeader>

      <PageContent>
        <Aside>
          <SideNavigation />
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
