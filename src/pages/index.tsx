import type { NextPage } from 'next'
import { trpc } from '@/utils/trpc';
import React from 'react';

import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LoadingPuff } from '@/components/LoadingPuff';
import { makeDataFrom } from '@/utils/helpers';

const Home: NextPage = () => {
  const { data, error, isLoading } = trpc.useQuery(['get-mat-metadata']);
  const data_t = data ?? [];

  const dataLoaded = !isLoading && data_t.length > 0; 
  // const dataLoaded = false;

  const series = makeDataFrom(data_t.length, false);
  series.forEach((s, i) => {
    s.radius = Math.floor(Number(data_t[i].dfh)*1000);
  });

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
          <ResponsiveContainer width="100%" height={400}>
          <ScatterChart
            width={800}
            height={400}
            margin={{ top:10, right:10, bottom:10, left:10, }}
          >
            <XAxis type="number" dataKey="primary" name="x" unit=""  hide={true}/>
            <YAxis type="number" dataKey="secondary" name="y" unit="" hide={true} />
            <ZAxis type="number" dataKey="radius" range={[0,400]} scale="pow"/>
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="stability" data={series} fill="#0e7490" opacity={0.7} />
          </ScatterChart>
          </ResponsiveContainer>
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
