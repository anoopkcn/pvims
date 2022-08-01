// Create a react component that renders a table with the data from the query:
//
import {
    Column,
    Table as ReactTable,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    useReactTable,
} from '@tanstack/react-table'

import { columns } from '@/components/columns';
import { trpc } from '@/utils/trpc';

function Filter({
    column,
    table,
}: {
    column: Column<any, any>
    table: ReactTable<any>
}) {
    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id)

    const columnFilterValue = column.getFilterValue()

    return typeof firstValue === 'number' ? (
        <div className="space-x-2">
            <input
                type="number"
                value={(columnFilterValue as [number, number])?.[0] ?? ''}
                onChange={e =>
                    column.setFilterValue((old: [number, number]) => [
                        e.target.value,
                        old?.[1],
                    ])
                }
                placeholder={`Min`}
                className="w-16 p-1 font-light text-center text-slate-600 placeholder:italic placeholder-slate-400
                focus:outline-none focus:border-slate-800 focus:ring-slate-800 focus:ring-1"
            />
            <input
                type="number"
                value={(columnFilterValue as [number, number])?.[1] ?? ''}
                onChange={e =>
                    column.setFilterValue((old: [number, number]) => [
                        old?.[0],
                        e.target.value,
                    ])
                }
                placeholder={`Max`}
                className="w-16 p-1 font-light text-center text-slate-600 placeholder:italic placeholder-slate-400
                focus:outline-none focus:border-slate-800 focus:ring-slate-800 focus:ring-1"
            />
        </div>
    ) : (
        <input
            type="text"
            value={(columnFilterValue ?? '') as string}
            onChange={e => column.setFilterValue(e.target.value)}
            placeholder={`Search`}
            className="w-32 p-1 font-light text-center text-slate-600 placeholder:italic placeholder:text-slate-400 
            focus:outline-none focus:border-slate-800 focus:ring-slate-800 focus:ring-1"
        />
    )
}


export const BasicTable = () => {
    const { data, error, isLoading } = trpc.useQuery(['get-mat-metadata']);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    })

    if (isLoading) {
        return null;
    }
    return (
        <div>
            <table className="border-collapse border border-slate-400 w-full text-sm text-center">
                <thead className="text-xs uppercase sticky top-0">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="bg-slate-400 text-white">
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className="py-3 px-4">
                                    <div>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        {header.column.getCanFilter() ? (
                                            <div className="py-2">
                                                <Filter column={header.column} table={table} />
                                            </div>
                                        ) : null}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className="border">
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="py-3 px-4">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot className="border border-slate-400 text-base sticky bottom-0 bg-slate-300 p-2">
                    <tr>
                        <td><span className='text-left'><sup>1</sup>Details</span></td>
                        {/* console.log(table.getHeaderGroups().rows.length); */}
                        {[...Array(columns.length - 2)].map((e, i) => <td key={i}></td>)}
                        <td> <span className='font-bold'>{table.getRowModel().rows.length}</span> rows </td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}
