import { createColumnHelper } from '@tanstack/react-table'
import reactStringReplace from 'react-string-replace';
import { MetaAPIResponse } from '@/backend/router';


const columnHelper = createColumnHelper<MetaAPIResponse>()


const MakeMatName = (material: string) => {
  return reactStringReplace(material, /(\d+)/g, (match, i) => (<sub key={i}>{match}</sub>));
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
    cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
    header: () => <span>Bandgap<sup>1</sup></span>,
  }),
  columnHelper.accessor('dfh', {
    cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
    header: () => <span>DFH<sup>1</sup></span>,
  }),
  // columnHelper.accessor('Eg_fund', {
  //     cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
  //     header: 'Eg_fund',
  // }),
  // columnHelper.accessor('Eg_direct', {
  //     cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
  //     header: 'Eg_direct',
  // }),
  // columnHelper.accessor('fund', {
  //     cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
  //     header: 'Fund',
  // }),
  // columnHelper.accessor('hEg_dir', {
  //     cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
  //     header: 'hEg_dir',
  // }),
  // columnHelper.accessor('SOC', {
  //     cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
  //     header: 'SOC',
  // }),
  // columnHelper.accessor('dir_SOC', {
  //     cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
  //     header: 'dir_SOC',
  // }),
]
