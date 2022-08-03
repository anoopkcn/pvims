import * as trpc from "@trpc/server";

// import { resolve } from 'path';
import { z } from 'zod';
const metadata_url = `https://api.github.com/repos/anoopkcn/pvimsdb/contents/metadata.json`
const headers = { 'Accept': 'application/vnd.github.raw+json' }

export type MetaAPIResponse = {
  Eg_direct: number;
  Eg_fund: number;
  SOC: number | null;
  bandgap: number;
  dfh: number;
  dir_SOC: number | null;
  fund: number | null;
  hEg_dir: number | null;
  id: number;
  material: string;
  natoms: number;
  space_group: string;
}


export const appRouter = trpc
  .router()
  .query("get-mat-metadata", {
    async resolve({ }) {
      // const response = await fetch(metadata_url, { headers: headers }).then(res => res.json());
      // return response;

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