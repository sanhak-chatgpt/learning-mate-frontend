import { Layout } from '@/components/App';
import { AppContent } from '@/components/App/AppContent';
import { AppHeader } from '@/components/App/AppHeader';
import { DEFAULT_THEME } from '@/styles/Theme';
import '@/styles/globals.css';
import { ThemeProvider } from '@emotion/react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={DEFAULT_THEME}>
            <Layout>
              <AppHeader></AppHeader>
              <AppContent>
                <Component {...pageProps} />
              </AppContent>
            </Layout>
          </ThemeProvider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
