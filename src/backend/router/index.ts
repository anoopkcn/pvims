import { MetaAPIResponse } from "@/utils/types";
import * as trpc from "@trpc/server";
import { z } from 'zod';


const metadata_url = `https://api.github.com/repos/anoopkcn/pvimsdb/contents`

export const appRouter = trpc
  .router()
  .query("get-mat-metadata", {
    input: z.object({
      version: z.string(),
    }),
    async resolve({ input }) {
      const response = await fetch(`${metadata_url}/metadata_v${input?.version}.json`, {
        "method": "GET",
        "headers": {
          "Accept": "application/vnd.github.raw+json"
        }
      });
      const result = await response.json() as MetaAPIResponse[];
      return result;

    },
  })


// export type definition of API
export type AppRouter = typeof appRouter;