import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { resolve } from 'path';
import { z } from 'zod';

const metadata_url = `https://api.github.com/repos/anoopkcn/pvimsdb/contents/metadata.json`
const about_url = `https://api.github.com/repos/anoopkcn/pvimsdb/contents/pvims_about.md`
const headers = { 'Accept': 'application/vnd.github.raw+json' }

export const appRouter = trpc
  .router()
  .query("get-mat-metadata", {
    async resolve({}){
      const response = await fetch(metadata_url, { headers })
      const json = response.json()
      return json
    },
  })
  .query("get-mat-about", {
    async resolve({}){
      const response = await fetch(about_url, { headers })
      const about = response.text()
      return about
    },
  })


// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});