// Create a react component that renders a table with the data from the query:
//
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'

import { columns } from '@/components/columns';
import { trpc } from '@/utils/trpc';

export const BasicTable=()=>{
    const { data, error, isLoading } = trpc.useQuery(['get-mat-metadata']);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    
    // console.log(data?.[0]);
    if (isLoading) {
        return null;
    }
    return (
        <div>
            <table className="table-auto">
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                    <th key={header.id}>
                        {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                        )}
                    </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
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