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
    cell: (info) => (
      <>
        <h3>
          {info.row.original.first_name} {info.row.original.last_name}
        </h3>
        <p className="text-gray-400 text-sm">{info.row.original.email}</p>
      </>
    ),
    header: (info) => <>First Name</>,
  }),

  // columnHelper.accessor('last_name', {
  //   cell: (info) => info.getValue(),
  //   header: () => <>Last Name</>,
  // }),

  // columnHelper.accessor('email', {
  //   cell: (info) => info.getValue(),
  //   header: () => <>Email Address</>,
  // }),

  // columnHelper.accessor('ip_address', {
  //   cell: (info) => info.getValue(),
  //   header: () => <>IP Address</>,
  // }),
];

export default function Table() {
  return <DataTable data={data} columns={columns} onRowClick={(info) => console.log(info.original)} />;
}
