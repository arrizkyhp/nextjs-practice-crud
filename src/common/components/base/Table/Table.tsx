import React from 'react';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';

import { Button } from '~/base/Button';
import { TableProps } from '~/base/Table/Table.type';
import { changeToIDR, convertDateFormat } from '~/utils/.';

import data from '../../../../database/data.json';

const Table = (props: TableProps) => {
  const { setShowForm } = props;

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="py-2 w-12">
            <span className="text-gray-200">No</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Birthday</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data.map((item, index) => (
          <tr key={item.id} className="bg-gray-50 text-center">
            <td className="px-8 py-2 w-12">
              <span>{index + 1}</span>
            </td>
            <td className="py-2 flex flex-row items-center">
              <span className="text-center ml-2 font-semibold">
                {item.name}
              </span>
            </td>
            <td className=" py-2 ">
              <span>{item.email}</span>
            </td>
            <td className=" py-2 ">
              <span>{changeToIDR(Number(item.salary))}</span>
            </td>
            <td className=" py-2 ">
              <span>{convertDateFormat(item.date)}</span>
            </td>
            <td className=" py-2 ">
              {item.status === 'Active' ? (
                <span className="bg-green-500 text-white px-5 py-1 rounded-full">
                  Active
                </span>
              ) : (
                <span className="bg-red-500 text-white px-5 py-1 rounded-full">
                  Inactive
                </span>
              )}
            </td>
            <td className="px-16 py-2 flex justify-around gap-5">
              <Button
                className="cursor"
                onClick={() => {
                  setShowForm({ type: 'update', visible: true });
                }}
              >
                <BiEdit size={25} color="rgb(34,197,94)" />{' '}
              </Button>
              <Button className="cursor">
                <BiTrashAlt size={25} color="rgb(244,63,94)" />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
