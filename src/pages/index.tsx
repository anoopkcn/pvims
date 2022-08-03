import type { NextPage } from 'next'
import { trpc } from '@/utils/trpc';
import { MetaAPIResponse } from '@/backend/router';
import React from 'react';

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LoadingPuff } from '@/components/LoadingPuff';

type DataPick = {
  bandgap: MetaAPIResponse['bandgap'],
  dfh: MetaAPIResponse['dfh'],
}

const Home: NextPage = () => {
  const { data, error, isLoading } = trpc.useQuery(['get-mat-metadata']);
  const data_t = data ?? [];

  const dataLoaded = !isLoading && data_t.length > 0;
  // const dataLoaded = false;


  return (
      <div>
        <h1 className='text-2xl text-sky-800 font-bold pb-5'>
          Databse for photovoltaic materials and their properties
        </h1>
        <h2 className='text-xl text-slate-500 pb-3'>
          Fair usage of data
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum voluptate rerum, quam, quis iusto autem nam dolorum a natus fuga laudantium eaque molestias impedit ratione delectus, eos minus esse.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolorum natus sunt commodi tempora totam fugit excepturi beatae magnam a quia tempore impedit consequatur praesentium consequuntur fuga, harum quidem est!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure expedita minima accusantium nisi ipsa, est repudiandae nihil quae sequi, autem reiciendis
        </p>
        {dataLoaded && (
          <div className='flex flex-col items-center pb-5'>
          <ScatterChart
            width={600}
            height={600}
            margin={{ top:10, right:10, bottom:10, left:10, }}
          >
            <XAxis type="number" dataKey="fund" name="x" unit="" />
            <YAxis type="number" dataKey="bandgap" name="y" unit="" hide={true} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="A school" data={data_t} fill="#8884d8" />
          </ScatterChart>
          </div>
        )}
        {!dataLoaded && (
          <LoadingPuff />
        )}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic molestias labore vitae? Accusantium cupiditate autem quisquam maiores inventore, commodi vel iure blanditiis placeat nostrum expedita esse quo amet ea rerum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel facilis repudiandae qui recusandae corrupti similique obcaecati doloribus fugiat ut autem iure porro doloremque, quibusdam facere quam est quia officia.
    </div>
  )
}

export default Home
