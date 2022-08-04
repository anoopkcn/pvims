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

import Link from 'next/link';
import Image from 'next/image'
import { MetaAPIResponse } from '@/backend/router';

import { LoadingPuff } from '@/components/LoadingPuff';


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
  const numberClass = `w-16 p-1 rounded text-center font-sans text-slate-900
    placeholder:font-light placeholder-slate-400 
    focus:outline-none focus:border-slate-200 focus:ring-slate-200 focus:ring-2`
  const textClass = `w-32 p-1 rounded text-center font-sans text-slate-900 
    placeholder:font-light placeholder:text-slate-400 
    focus:outline-none focus:border-slate-200 focus:ring-slate-200 focus:ring-2`

  return typeof firstValue === 'number' ? (
    <div className="space-x-1 space-y-1">
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
        className={numberClass}
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
        className={numberClass}
      />
    </div>
  ) : (
    <input
      type="text"
      value={(columnFilterValue ?? '') as string}
      onChange={e => column.setFilterValue(e.target.value)}
      placeholder={`Search`}
      className={textClass}
    />
  )
}


export const BasicTable: React.FC<{ data: MetaAPIResponse[] | undefined; isLoading: boolean }> = (props) => {

  const data = props.data ?? [];
  const isLoading = props.isLoading ?? false;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const dataLoaded = !isLoading && data.length > 0;

  // const dataLoaded = false;
  return (
    <div className="overflow-x-auto border rounded-sm border-slate-600 border-opacity-20 max-h-[75vh]" >
      <table className="isolate w-full text-sm text-center border-separate border-spacing-0">
        <thead className="sticky top-0 text-xs uppercase">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="bg-cyan-800 text-white">
              {headerGroup.headers.map(header => (
                <th key={header.id} className="py-3 px-4 z-10 border-b border-gray-300" scope='col'>
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
        {dataLoaded && (
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-slate-200">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="py-3 px-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
        {!dataLoaded && (
          <tbody>
            <tr>
              <td colSpan={columns.length}>
                <LoadingPuff />
              </td>
            </tr>
          </tbody>
        )}
        <tfoot className="sticky bottom-0 border text-base">
          <tr>
            {/* <td><span className='text-left'><sup>1</sup><Link href="/about">Details</Link></span></td> */}
            {[...Array(columns.length - 1)].map((e, i) => <td key={i}></td>)}
            <td className='text-white bg-cyan-800/80 rounded-sm'> <span className='font-bold'>{table.getRowModel().rows.length}</span> entries </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
