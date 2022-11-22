import { DataTable } from '@frontends/shared-ui';
import { createColumnHelper } from '@tanstack/react-table';
import data from '../../mock/mock.json';

type Person = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
};

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('first_name', {
    cell: (info) => info.getValue(),
    header: () => <>First Name</>,
  }),

  columnHelper.accessor('last_name', {
    cell: (info) => info.getValue(),
    header: () => <>Last Name</>,
  }),

  columnHelper.accessor('email', {
    cell: (info) => info.getValue(),
    header: () => <>Email Address</>,
  }),

  columnHelper.accessor('ip_address', {
    cell: (info) => info.getValue(),
    header: () => <>IP Address</>,
  }),
];

export default function Table() {
  return (
    <div className="w-full h-full">
      <div className="bg-white p-5 rounded-md">
        <div className="mb-8">
          <h3 className="text-gray-700 font-semibold text-lg">Default Datatable</h3>
          <span className="text-sm text-gray-400">
            DataTables has most features enabled by default, so all you need to do to use it with your own tables is to
            call the construction function: $().DataTable();.
          </span>
        </div>
        <DataTable data={data} columns={columns} onRowClick={(info) => console.log(info.original)} />
      </div>
    </div>
  );
}
