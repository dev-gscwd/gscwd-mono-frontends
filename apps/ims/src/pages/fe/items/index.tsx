// export default function Index() {
//   return <>Items</>;
// }
import { Button, DataTable, TextField } from '@frontends/shared-ui';
import { createColumnHelper } from '@tanstack/react-table';
import data from '../../../../mock/mock.json';
import { HiChevronRight, HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import router from 'next/router';

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
    header: () => <>Item Code</>,
  }),

  columnHelper.accessor('last_name', {
    cell: (info) => info.getValue(),
    header: () => <>Description</>,
  }),

  columnHelper.accessor('ip_address', {
    cell: (info) => info.getValue(),
    header: () => <>UNIT OF MEASURE</>,
  }),

  columnHelper.accessor('gender', {
    cell: (info) => info.getValue(),
    header: () => <>Classification</>,
  }),
  // () => router.push("users/add-user")
  //  console.log(info.row.original)
  columnHelper.accessor('id', {
    cell: (info) => (
      <Button size="md" onClick={() => router.push(`items/${info.row.original.id}`)} variant="secondary">
        <HiChevronRight style={{ color: 'white' }} />
      </Button>
    ),
    header: () => <>#</>,
    enableSorting: false,
  }),
];

// onRowClick={(info) => console.log(info.original)}

export default function Table() {
  return (
    <div className="w-full h-full">
      {/* <div className="mb-4">
        <div className="flex justify-between">
          <div>1</div>
          <div>
            <Button variant="primary" size="md" className="text-white font-normal">
              + Create New
            </Button>
          </div>
        </div>
      </div> */}
      <div className="bg-white p-5 rounded-md">
        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-gray-700 font-semibold text-lg">Items</h3>
              <span className="text-sm text-gray-400">List of Items</span>
            </div>
            <div>
              <div className="relative w-full">
                <TextField placeholder="Search" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <HiOutlineMagnifyingGlass />
                </div>
              </div>
            </div>
          </div>
        </div>
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
}
