import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { withTRPC } from '@trpc/next';
import { AppType } from 'next/dist/shared/lib/utils';
import { AppRouter } from '@/pages/api/trpc/[trpc]';
import Head from "next/head";


function getBaseUrl() {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
}


const MyApp: AppType = ({ Component, pageProps }) => {
  const description =
    "PhotoVoltaic inspired Materials Search. Search for materials in the database and view their metadata and parameters.";
  const title = "PViMS";
  const imageMetaURL = "https://github.com/anoopkcn/pvimsdb/blob/main/images/pvims.png";
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageMetaURL} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
    <Component {...pageProps} />
    </div>
  )
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
