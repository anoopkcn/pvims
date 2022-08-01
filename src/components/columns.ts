import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { number } from 'zod';
// import reactStringReplace from 'react-string-replace';


const columnHelper = createColumnHelper<Material>()

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

// const  MakeMatName = (material: string) => {
//     return reactStringReplace(material, /(\d+)/g, (match, i) => (<sub>{match}</sub>));
// }


export const columns = [
    columnHelper.accessor('id', {
        cell: info => info.getValue(),
        header: 'ID',
    }),
    columnHelper.accessor('material', {
        cell: info => info.getValue(),
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
        header: 'Bandgap',
    }),
    columnHelper.accessor('dfh', {
        cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
        header: 'DFH',
    }),
    columnHelper.accessor('Eg_fund', {
        cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
        header: 'Eg_fund',
    }),
    columnHelper.accessor('Eg_direct', {
        cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
        header: 'Eg_direct',
    }),
    columnHelper.accessor('fund', {
        cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
        header: 'Fund',
    }),
    columnHelper.accessor('hEg_dir', {
        cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
        header: 'hEg_dir',
    }),
    columnHelper.accessor('SOC', {
        cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
        header: 'SOC',
    }),
    columnHelper.accessor('dir_SOC', {
        cell: info => info.getValue() ? info.getValue().toFixed(4) : '-',
        header: 'dir_SOC',
    }),
]
