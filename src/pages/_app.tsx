import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { withTRPC } from '@trpc/next';
import { AppType } from 'next/dist/shared/lib/utils';
import { AppRouter } from '@/pages/api/trpc/[trpc]';

function getBaseUrl() {
  if (process.browser) return ""; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
}


const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      queryClientConfig: { defaultOptions: { queries: { refetchOnMount: false, refetchOnWindowFocus: false, } } },
    };
  },
  ssr: false,
})(MyApp);
