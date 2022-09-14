import TableLoader from "components/molecules/table-loader";
import React, { memo } from "react";
import { useTable, useFlexLayout, useResizeColumns } from "react-table";

function Table(props) {
  // Hooks
  // Variable
  const { columns, data, loader } = props;

  const tableInstance = useTable(
    { columns, data },
    useFlexLayout,
    useResizeColumns
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  // Functions
  // Effects
  return (
    <div className="w-full">
      <div className="w-full h-[65vh] mt-4 overflow-auto rounded-md ">
        <table className="w-full align-middle px-4 " {...getTableProps()}>
          <thead className="bg-info-original sticky top-0 rounded-md">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="py-2 text-sm text-left px-4 font-medium text-info-normal"
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {loader ? (
            <div className="w-full h-[65vh] overflow-auto">
              <TableLoader />
            </div>
          ) : (
            <tbody className="align-middle" {...getTableBodyProps()}>
              {
                // Loop over the table rows
                rows.map((row, i) => {
                  // Prepare the row for display
                  prepareRow(row);
                  return (
                    // Apply the row props
                    <tr
                      className={`align-middle ${
                        i % 2 === 0 ? undefined : "bg-gray-50"
                      }`}
                      {...row.getRowProps()}
                    >
                      {
                        // Loop over the rows cells
                        row.cells.map((cell, k) => {
                          // Apply the cell props
                          return (
                            <td
                              className="align-middle flex items-center justify-start py-4 text-xs font-medium text-gray-900 px-4"
                              {...cell.getCellProps()}
                            >
                              {
                                // Render the cell contents
                                <span className="align-middle">
                                  {cell.render("Cell")}
                                </span>
                              }
                            </td>
                          );
                        })
                      }
                    </tr>
                  );
                })
              }
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
export default memo(Table);
