import type { NextPage } from 'next'
import { trpc } from '@/utils/trpc';
import { Funnel, FunnelChart, LabelList, Legend, ReferenceArea, TooltipProps } from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/src/component/DefaultTooltipContent';

import _ from 'lodash';

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { LoadingPuff } from "@/components/LoadingPuff";
import {
  DataLoaded,
  getDomain,
  makeDataFrom,
  makeDataSubset,
  MakeMatName,
} from "@/utils/helpers";
import { METADATA_VERSION } from "@/utils/constants";
import { PlotDataType } from "@/utils/types";

const Home: NextPage = () => {
  const { data, error, isLoading } = trpc.useQuery([
    "get-mat-metadata",
    { version: METADATA_VERSION },
  ]);

  const data_t = data ?? [];

  const dataLoaded = DataLoaded(data_t, isLoading);

  const dataSubset = makeDataSubset(data_t, [1.1, 3.5], "bandgap");

  const randomSeries = makeDataFrom(dataSubset.length, false);
  const plotdata: PlotDataType[] = [
    ...dataSubset.map((item, i) => ({
      ...item,
      ...randomSeries[i],
      rad: Math.floor(Number(item.natoms) * 1000),
    })),
  ];

  // matches property if dprime is grater than zero
  const pdprime = _.filter(plotdata, (item) => {
    if (item.dprime !== null && Number(item.dprime) > 0) {
      return item;
    }
  });
  const ndprime = _.filter(plotdata, (item) => {
    if (item.dprime !== null && Number(item.dprime) <= 0) {
      return item;
    }
  });

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<ValueType, NameType>) => {
    if (active) {
      const activeData = payload?.[0].payload;
      return (
        <div className="bg-emerald-700/90 border border-emerald-800 py-2 px-3 rounded-md text-white">
          <p>Material = {MakeMatName(activeData.material)}</p>
          <p>Space Group = {activeData.space_group}</p>
          <p>Number of Atoms = {activeData.natoms}</p>
          <p>
            Bond Length = {Number(activeData.anion_cation_distance).toFixed(2)}{" "}
            &#8491;
          </p>
          <p>Bandgap = {Number(activeData.bandgap).toFixed(2)} eV</p>
          <p>
            SOC ={" "}
            {activeData.SOC
              ? `${Number(activeData.SOC).toFixed(2)} eV`
              : "null"}
          </p>
          <p>
            Effective Mass ={" "}
            {activeData.eff_mass
              ? Number(activeData.eff_mass).toFixed(2)
              : "null"}
          </p>
          <p>
            Stability = {(Number(activeData.dfh) * 1000).toFixed(2)} meV/atom
          </p>
          <p>dPrime = {Number(activeData.dprime).toFixed(2)}</p>
          <p>Volume = {Number(activeData.equilibrium_volume).toFixed(2)}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <h1 className="text-2xl text-sky-800 font-bold pb-5">
        Database for photovoltaic materials and their properties
      </h1>
      <h2 className="text-xl text-slate-500 pb-3">Fair usage of data</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum
        voluptate rerum, quam, quis iusto autem nam dolorum a natus fuga
        laudantium eaque molestias impedit ratione delectus, Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Iure, dolorum natus sunt commodi
        tempora totam fugit excepturi beatae magnam a quia tempore impedit
        consequatur praesentium consequuntur fuga, harum quidem est! Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Iure expedita minima
        accusantium nisi ipsa, est repudiandae nihil quae sequi, autem
        reiciendis
      </p>
      {dataLoaded && (
        <div className="flex flex-col font-sans items-center py-10">
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart
              width={600}
              height={400}
              margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
            >
              <CartesianGrid strokeDasharray="4" />
              <XAxis
                type="number"
                dataKey="dfh"
                name="x"
                unit=""
                domain={getDomain(plotdata, "dfh")}
                tickFormatter={(value: number) => (value * 1000).toFixed(0)}
                label={{
                  value: "Stability (meV/atom)",
                  position: "insideBottomRight",
                  offset: -15,
                  fill: "rgba(0, 0, 0, 0.6)",
                }}
              />
              <YAxis
                type="number"
                dataKey="bandgap"
                name="y"
                unit=""
                domain={getDomain(plotdata, "bandgap")}
                tickFormatter={(value: number) => value.toFixed(1)}
                label={{
                  value: "Bandgap (eV)",
                  position: "insideLeft",
                  angle: -90,
                  fill: "rgba(0, 0, 0, 0.6)",
                }}
              />
              <Legend verticalAlign="bottom" />
              <ZAxis type="number" dataKey="rad" range={[0, 400]} scale="pow" />
              <Scatter name="+d'" data={pdprime} fill="#ea580c" opacity={0.7} />
              <Scatter name="-d'" data={ndprime} fill="#0e7490" opacity={0.7} />
              <Tooltip
                cursor={{
                  strokeDasharray: "4 4",
                  stroke: "green",
                  strokeWidth: 1,
                }}
                content={<CustomTooltip />}
              />
              {/* <ReferenceArea x1={0.048} x2={0.10} y1={1.2} y2={2.99} stroke="#be123c" strokeOpacity={0.3} label="Ideal" /> */}
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      )}
      {!dataLoaded && <LoadingPuff />}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic molestias
        labore vitae? Accusantium cupiditate autem quisquam maiores inventore,
        commodi vel iure blanditiis placeat nostrum expedita esse quo amet ea
      </p>
      <p>
        rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel
        facilis repudiandae qui recusandae corrupti similique obcaecati
        doloribus fugiat ut autem iure porro doloremque, quibusdam facere quam
        est quia officia.
      </p>
    </div>
  );
};

export default Home

