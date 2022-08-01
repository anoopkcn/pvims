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
                className="w-16 p-1  text-xs text-center placeholder-gray-400"
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
                className="w-16 p-1  text-xs text-center placeholder-gray-400"
            />
        </div>
    ) : (
        <input
            type="text"
            value={(columnFilterValue ?? '') as string}
            onChange={e => column.setFilterValue(e.target.value)}
            placeholder={`Search`}
            className="w-32 p-1 text-xs text-center placeholder-gray-400"
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

    // console.log(data?.[0]);
    if (isLoading) {
        return null;
    }
    return (
        <div>
            <table className="border w-full text-sm text-center">
                <thead className="text-xs uppercase sticky top-0 ">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="bg-gray-300">
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
                        <tr key={row.id} className="border-b">
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="py-3 px-4">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}