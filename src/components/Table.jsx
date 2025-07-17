import { useState } from "react";

const Table = ({ columns, data, className = "" }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  return (
    <div className={`${className}`}>
      <div className="overflow-x-auto bg-white rounded-lg border border-neutral shadow-sm">
        <table className="min-w-full divide-y divide-neutral">
          <thead className="bg-neutral/40">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-semibold text-slate-black whitespace-nowrap uppercase tracking-wider cursor-pointer"
                  onClick={() =>
                    column.sortable !== false && handleSort(column.key)
                  }
                >
                  <div className="flex items-center">
                    {column.label}
                    {sortConfig.key === column.key && (
                      <span className="ml-1">
                        {sortConfig.direction === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-neutral">
            {sortedData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-neutral/40">
                {columns.map((column) => (
                  <td
                    key={`${rowIndex}-${column.key}`}
                    className="px-6 py-4 text-slate-black whitespace-nowrap"
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-slate-black mt-5 flex flex-col lg:flex-row w-full items-start lg:items-center gap-y-5 justify-between rounded-lg border border-neutral shadow-sm bg-white px-6 py-3 text-base">
        <h3 className="text-body-color text-sm font-normal">
          Showing data 1 to {data.length} of {data.length} entries
        </h3>

        <div className="flex items-center justify-center gap-2">
          <h4 className="bg-primary flex h-10 w-10 items-center justify-center rounded-sm text-sm font-medium text-white">
            1
          </h4>
          <h4 className="text-body-colour flex h-10 w-10 items-center justify-center rounded-sm text-sm font-medium">
            2
          </h4>
          <h4 className="text-body-colour flex h-10 w-10 items-center justify-center rounded-sm text-sm font-medium">
            3
          </h4>
          <h4 className="text-body-colour flex h-10 w-10 items-center justify-center rounded-sm text-sm font-medium">
            ...
          </h4>
          <h4 className="text-body-colour flex h-10 w-10 items-center justify-center rounded-sm text-sm font-medium">
            8
          </h4>
          <h4 className="text-body-colour flex h-10 w-10 items-center justify-center rounded-sm text-sm font-medium">
            9
          </h4>
          <h4 className="text-body-colour flex h-10 w-10 items-center justify-center rounded-sm text-sm font-medium">
            10
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Table;
