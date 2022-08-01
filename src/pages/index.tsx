import { trpc } from '@/utils/trpc';
import type { NextPage } from 'next'
import Head from "next/head";
import { number } from 'zod';
import reactStringReplace from 'react-string-replace';

type Material = {
  id: number
  material: string
  natoms: number
  space_group: string
  bandgap: number
  dfh: number
  Eg_fund: number
  Eg_direct: number
  fund: number
  hEg_dir: number
  SOC: number
  dir_SOC: number
}

const Home: NextPage = () => {
  const { data, error, isLoading } = trpc.useQuery(['get-mat-metadata']);
  // console.log(data?.[0]);
  if (isLoading) {
    return null;
  }

  function makeMatName(material: string) {
    return reactStringReplace(material, /(\d+)/g, (match,i)=>(<sub key={i}>{match}</sub>))
  }

  return (
    <div>
      <Head>
        <title>Solar materials vault</title>
      </Head>
      <div> Solar materials vault </div>
      <div className='p-2' />
      <div className="" >
        {data.map((item: Material) => {
          return (
            <div key={item.id}>
              {/* id: {item.id}  */}
              material: {makeMatName(item.material)}
              natoms: {item.natoms}
              bandgap: {item.bandgap.toFixed(4)} eV 
              SOC: {item.SOC ? item.SOC.toFixed(4) : '-'}
              {/* hell<sub>world</sub> */}
              <hr />
            </div>
          );
        })}
      </div>
      <div className='p-2' />
    </div>
  )
}

export default Home
