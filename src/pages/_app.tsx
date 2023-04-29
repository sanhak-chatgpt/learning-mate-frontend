import { Layout } from '@/components/App';
import { DEFAULT_THEME } from '@/styles/Theme';
import '@/styles/Config.css';
import { ThemeProvider } from '@emotion/react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { ModalProvider } from '@/components/UI/Modal/Modal.Context';
import { ModalRegistry } from '@/components/UI/Modal/ModalRegistry';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider theme={DEFAULT_THEME}>
              <ModalProvider
                registry={ModalRegistry}
                defaultOverlayOptions={{ default: { closeDelay: 500 } }}>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ModalProvider>
            </ThemeProvider>
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
