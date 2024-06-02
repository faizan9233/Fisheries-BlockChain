import React from 'react';
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Table({ data, actions }) {
  const columns = Object.keys(data[0] || {});

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200 text-black">
          <tr>
            {columns.map((col) => (
              <th key={col} className="w-auto text-left py-3 px-4 uppercase font-semibold text-sm">
                {capitalizeFirstLetter(col)}
              </th>
            ))}
            <th className="w-auto text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex !== data.length - 1 ? 'border-b' : ''}>
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="w-auto text-left py-3 px-4">{row[col]}</td>
              ))}
              <td className="w-auto text-left py-3 px-4 flex">
                {actions.map((action, actionIndex) => (
                  <button
                    key={actionIndex}
                    className={`mr-2 ${action.color ? `text-${action.color}-500 hover:text-${action.color}-700` : 'text-blue-500 hover:text-blue-700'}`}
                    onClick={() => action.onClick(row)}
                  >
                    {action.name === "View" && <EyeIcon className="h-5 w-5" />}
                    {action.name === "Edit" && <PencilIcon className="h-5 w-5" />}
                    {action.name === "Delete" && <TrashIcon className="h-5 w-5" />}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
