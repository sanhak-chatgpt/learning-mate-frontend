import { Layout } from '@/components/App';
import '@/styles/Config.css';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import React from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { ModalProvider } from '@/components/UI/Modal/Modal.Context';
import { ModalRegistry } from '@/components/UI/Modal/ModalRegistry';
import { ThemeProvider } from '@/components/UI/Theme/ThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  

  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider>
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
