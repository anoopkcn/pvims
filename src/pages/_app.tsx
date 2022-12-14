import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { withTRPC } from '@trpc/next';
import { AppType } from 'next/dist/shared/lib/utils';
import { AppRouter } from "@/server/router";
import Head from "next/head";
import { Layout } from '@/components/Layout';

// function getBaseUrl() {
//   if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
//   return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
// }

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production")
    return "https://pvims.vercel.app";
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview")
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  return "http://localhost:3000";
};

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
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageMetaURL} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <div className="p-10"/>
      </Layout>
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
