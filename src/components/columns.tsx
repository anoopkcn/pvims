import { createColumnHelper } from '@tanstack/react-table'
import reactStringReplace from 'react-string-replace';
import { MetaAPIResponse } from '@/backend/router';


const columnHelper = createColumnHelper<MetaAPIResponse>()


const MakeMatName = (material: string) => {
  return reactStringReplace(material, /(\d+)/g, (match, i) => (<sub key={i}>{match}</sub>));
}
const fixPrecision = (num: number | null | undefined) => {
  if (num == null) return '-';
  return num.toFixed(4);
}


export const columns = [
  columnHelper.accessor('id', {
    cell: info => info.getValue(),
    header: 'ID',
  }),
  columnHelper.accessor('material', {
    cell: info => MakeMatName(info.getValue()),
    header: 'Material',
  }),
  columnHelper.accessor('natoms', {
    cell: info => info.getValue(),
    header: 'Atoms',
  }),
  columnHelper.accessor('space_group', {
    cell: info => info.getValue(),
    header: 'Space Group',
  }),
  columnHelper.accessor('bandgap', {
    // if value is not null or undefined, then  get the value
    cell: info => fixPrecision(info.getValue()),
    header: () => <span>Bandgap<sup>1</sup></span>,
  }),
  // columnHelper.accessor('Eg_fund', {
  //   cell: info => fixPrecision(info.getValue()),
  //   header: () => <span>Bandgap_fund<sup>1</sup></span>,
  // }),
  columnHelper.accessor('dfh', {
    cell: info => fixPrecision(info.getValue()),
    header: () => <span>DFH<sup>1</sup></span>,
  }),

  // columnHelper.accessor('Eg_direct', {
  //     cell: info => fixPrecision(info.getValue()),
  //     header: 'Eg_direct',
  // }),
  // columnHelper.accessor('fund', {
  //     cell: info => fixPrecision(info.getValue()),
  //     header: 'Fund',
  // }),
  // columnHelper.accessor('hEg_dir', {
  //     cell: info => fixPrecision(info.getValue()),
  //     header: 'hEg_dir',
  // }),
  // columnHelper.accessor('SOC', {
  //     cell: info => fixPrecision(info.getValue()),
  //     header: 'SOC',
  // }),
  // columnHelper.accessor('dir_SOC', {
  //     cell: info => fixPrecision(info.getValue()),
  //     header: 'dir_SOC',
  // }),
]
