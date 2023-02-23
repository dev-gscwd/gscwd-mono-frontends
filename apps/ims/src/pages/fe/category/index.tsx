import { Button, DataTable, ListDef, Modal, Select, TextField } from '@frontends/shared-ui';
import { createColumnHelper } from '@tanstack/react-table';
// import data from '../../../../mock/mock.json';
import { HiChevronRight, HiOutlineMagnifyingGlass, HiPlus } from 'react-icons/hi2';
import router from 'next/router';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useState } from 'react';
import { Close } from 'libs/shared-ui/src/components/Close';

type Item = {
  code: string;
  createdAt: string;
  deletedAt: string;
  description: string;
  id: string;
  name: string;
  updatedAt: string;
};

const columnHelper = createColumnHelper<Item>();

const columns = [
  columnHelper.accessor('code', {
    cell: (info) => info.getValue(),
    header: () => <>Code</>,
  }),

  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => <>Name</>,
  }),

  columnHelper.accessor('description', {
    cell: (info) => info.getValue(),
    header: () => <>Description</>,
  }),
  columnHelper.accessor('id', {
    cell: (info) => (
      <Button size="md" variant="secondary">
        <HiChevronRight style={{ color: 'white' }} />
      </Button>
    ),
    header: () => <>#</>,
    enableSorting: false,
  }),
];

//Characteristics
type CharacteristicList = {
  id: number;
  desc: string;
};
export default function Items({ categories }) {
  const [open, setOpen] = useState(false);
  const list: ListDef<CharacteristicList> = {
    key: 'desc',
    render: (listItem, { active, selected }) => (
      <div className={active ? 'text-indigo-700' : 'text-black'}>{listItem.desc}</div>
    ),
  };

  const data = [
    { id: 1, desc: 'Ballpen, Black' },
    { id: 2, desc: 'Ballpen, Red' },
    { id: 3, desc: 'Ballpen, Blue' },
    { id: 4, desc: 'Bond Paper, A4' },
    { id: 5, desc: 'Bond Paper, Short' },
    { id: 6, desc: 'Pipe, 1/2' },
  ];

  // console.log(categories.items);

  return (
    <div className="">
      <div className="bg-white p-5 rounded-md">
        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-gray-700 font-semibold text-lg">Categories</h3>
              <span className="text-sm text-gray-400">Sample List</span>
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

        {/* <DataTable data={categories.items} columns={columns} /> */}
      </div>
      <Button
        variant="secondary"
        className="fixed z-90 bottom-10 right-8 w-14 h-14 rounded-full flex text-white items-center"
        onClick={(row) => {
          setOpen(true);
        }}
      >
        <HiPlus size={30} />
      </Button>
      <Modal open={open} setOpen={setOpen} size="sm" fixedHeight={false}>
        <Modal.Header>
          <div className="flex justify-between">
            <>IMS - Add Category</>
            <>
              <Close onClick={() => setOpen(false)} />
            </>
          </div>
        </Modal.Header>
        <Modal.Body>
          <form action="" className="w-full space-y-2">
            <div className="flex">
              <div className="w-full px-1">
                <label>Classification</label>
                <Select className="w-full" data={data} listDef={list} onSelect={(item) => console.log(item.desc)} />
              </div>
            </div>
            <div className="flex">
              <div className="w-full px-1">
                <label>Name</label>
                <TextField className="w-full"></TextField>
              </div>
            </div>
            <div className="flex">
              <div className="w-full px-1">
                <label>Description</label>
                <TextField className="w-full"></TextField>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="float-right">
            <Button variant="primary" size="md">
              Add
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const baseUrl = process.env.NEXT_PUBLIC_URL;

//   const category = await axios.get(`${baseUrl}/items/info/categories`, {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json',
//     },
//   });

//   return { props: { categories: category.data } };
// };
