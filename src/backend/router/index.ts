import * as trpc from "@trpc/server";
import { z } from 'zod';
 
 
const metaValidator = z.object({
  B_abundance_rank:      z.number().nullable().optional(),
  Eg_direct:             z.number().nullable().optional(),
  Eg_fund:               z.number().nullable().optional(),
  SOC:                   z.number().nullable().optional(),
  X_abundance_rank:      z.number().nullable().optional(),
  anion_cation_distance: z.number().nullable().optional(),
  bandgap:               z.number().nullable().optional(),
  deformation_potential: z.number().nullable().optional(),
  density:               z.number().nullable().optional(),
  dfh:                   z.number().nullable().optional(),
  dir_SOC:               z.number().nullable().optional(),

  dirgap_wSOC:           z.number().nullable().optional(),
  dirgap_woSOC:          z.number().nullable().optional(),
  eff_mass:              z.number().nullable().optional(),
  eform_hEg:             z.number().nullable().optional(),
  emass:                 z.number().nullable().optional(),
  equilibrium_volume:    z.number().nullable().optional(),
  fund:                  z.number().nullable().optional(),
  gap_wSOC:              z.number().nullable().optional(),
  gap_woSOC:             z.number().nullable().optional(),
  hEg_dir:               z.number().nullable().optional(),
  hmass:                 z.number().nullable().optional(),
  in_DB:                 z.string().nullable().optional(),
  magmom:                z.number().nullable().optional(),
  material:              z.string(),
  natoms:                z.number().nullable().optional(),
  space_group:           z.string().nullable().optional(),
  id:                    z.string(),
})

export type MetaAPIResponse = z.infer<typeof metaValidator>


const metadata_url = `https://api.github.com/repos/anoopkcn/pvimsdb/contents`

export const appRouter = trpc
  .router()
  .query("get-mat-metadata", {
    input: z.object({
      version: z.string(),
    }),
    async resolve({input}) {
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