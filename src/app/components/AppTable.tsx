"use client";

import { OrderData } from "@/lib/types";
import { Table as TanstackTable, flexRender } from "@tanstack/react-table";

export default function AppTable({
  table,
}: {
  table: TanstackTable<OrderData>;
}) {
  return (
    <div className="rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <table className="min-w-full border-collapse text-left rtl:text-right text-gray-800">
        <thead className=" bg-[#F9FAFB]">
          {table.getHeaderGroups()?.map((headerGroup) => (
            <tr key={headerGroup.id} className="">
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    scope="col"
                    className={`text-sm text-primaryLight font-normal p-4 border-b border-gray-200 w=[${
                      header.getSize() + "px"
                    }]`}
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4 text-base relative">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
