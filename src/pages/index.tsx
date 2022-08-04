import type { NextPage } from 'next'
import { trpc } from '@/utils/trpc';
import { TooltipProps } from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/src/component/DefaultTooltipContent';

import _ from 'lodash';


import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LoadingPuff } from '@/components/LoadingPuff';
import { getDomain, makeDataFrom, makeDataSubset } from '@/utils/helpers';
import { METADATA_VERSION } from '@/utils/constants';
import { PlotDataType } from '@/utils/types';


const Home: NextPage = () => {
  const { data, error, isLoading } = trpc.useQuery(['get-mat-metadata', { version: METADATA_VERSION }]);

  const data_t = data ?? [];

  const dataLoaded = !isLoading && data_t.length > 0;
  // const dataLoaded = false;

  const dataSubset = makeDataSubset(data_t, [0.5, 3], 'bandgap')
  // console.log(dataSubset);

  const randomSeries = makeDataFrom(dataSubset.length, false);
  const plotdata: PlotDataType[] = [
    ...dataSubset.map((item, i) => ({
      ...item,
      ...randomSeries[i],
      'rad': Math.floor(Number(item.dfh) * 1000)
    })),
  ];

  // matches property if deformation_potential is grater than zero
  const pdprime = _.filter(plotdata, (item) => {
    if (item.deformation_potential !== null && Number(item.deformation_potential) > 0) {
      return item;
    }
  }
  );
  const ndprime = _.filter(plotdata, (item) => {
    if (item.deformation_potential !== null && Number(item.deformation_potential) <= 0) {
      return item;
    }
  }
  );

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<ValueType, NameType>) => {
    if (active) {
      return (
        <div>
          <p className="label">{`${payload?.[0].dataKey}`}</p>
          <p className="desc">test</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <h1 className='text-2xl text-sky-800 font-bold pb-5'>
        Database for photovoltaic materials and their properties
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
        <div className='flex flex-col items-center p-20'>
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart
              width={600}
              height={400}
              margin={{ top: 10, right: 10, bottom: 10, left: 10, }}
            >
              <XAxis type="number" dataKey="density" name="x" unit="" hide={true} domain={getDomain(plotdata, 'density')} />
              <YAxis type="number" dataKey="bandgap" name="y" unit="" hide={true} domain={getDomain(plotdata, 'bandgap')} />
              <ZAxis type="number" dataKey="rad" range={[0, 400]} scale="pow" />
              <Scatter name="stability" data={pdprime} fill="#ea580c" opacity={0.7} />
              <Scatter name="stability" data={ndprime} fill="#0e7490" opacity={0.7} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
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

