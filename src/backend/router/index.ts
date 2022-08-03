import * as trpc from "@trpc/server";
import { z } from 'zod';

const metaValidator = z.object({
  Eg_direct: z.number().nullable().optional(),
  Eg_fund: z.number().nullable().optional(),
  SOC: z.number().nullable().optional(),
  dir_SOC: z.number().nullable().optional(),
  fund: z.number().nullable().optional(),
  hEg_dir: z.number().nullable().optional(),
  bandgap: z.number().nullable(),
  dfh: z.number().nullable(),
  id: z.number(),
  material: z.string(),
  natoms: z.number().nullable(),
  space_group: z.string().nullable(),
})

export type MetaAPIResponse = z.infer<typeof metaValidator>


const metadata_url = `https://api.github.com/repos/anoopkcn/pvimsdb/contents/metadata.json`

export const appRouter = trpc
  .router()
  .query("get-mat-metadata", {
    async resolve({ }) {
      const response = await fetch(metadata_url, {
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