import { Button, DataTable, ListDef, Modal, Select, TextField } from '@frontends/shared-ui';
import { createColumnHelper } from '@tanstack/react-table';
import { HiChevronRight, HiOutlineMagnifyingGlass, HiPlus } from 'react-icons/hi2';
import router from 'next/router';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useState } from 'react';
import { Close } from 'libs/shared-ui/src/components/Close';

//Items
type Item = {
  id: string;
  code: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

//Characteristics
type CharacteristicList = {
  id: number;
  desc: string;
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
      <Button size="md" variant="secondary" onClick={() => router.push(`items/${info.row.original.id}`)}>
        <HiChevronRight style={{ color: 'white' }} />
      </Button>
    ),
    header: () => <>#</>,
    enableSorting: false,
  }),
];

export default function Items({ classifications }) {
  //for open/close modal
  const [open, setOpen] = useState(false);

  //log classification data
  console.log(classifications.items);

  const list: ListDef<CharacteristicList> = {
    key: 'desc',
    render: (listItem, { active, selected }) => (
      <div className={active ? 'text-indigo-700' : 'text-black'}>{listItem.desc}</div>
    ),
  };

  const data = [
    { id: 1, desc: 'Physical' },
    { id: 2, desc: 'Non-Physical' },
  ];

  return (
    <div className="">
      <div className="bg-white p-5 rounded-md">
        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-gray-700 font-semibold text-lg">Classification</h3>
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
        <DataTable data={classifications.items} columns={columns} />
      </div>

      {/*Add button, show add classification modal*/}
      <Button
        variant="secondary"
        className="fixed z-90 bottom-10 right-8 w-14 h-14 rounded-full flex text-white items-center"
        onClick={(row) => {
          setOpen(true);
        }}
      >
        <HiPlus size={30} />
      </Button>

      {/* Add classification modal */}
      <Modal open={open} setOpen={setOpen} size="sm" fixedHeight={false}>
        <Modal.Header>
          <div className="flex justify-between">
            <>IMS - Add Classification</>
            <>
              <Close onClick={() => setOpen(false)} />
            </>
          </div>
        </Modal.Header>
        <Modal.Body>
          <form action="" className="w-full space-y-2">
            <div className="flex">
              <div className="w-full px-1 mb-2">
                <label>Characteristics</label>
                <Select className="w-full" data={data} listDef={list} onSelect={(item) => console.log(item.desc)} />
              </div>
            </div>
            <div className="flex flex-wrap ">
              <div className="w-full md:w-1/4 px-1 mb-2">
                <label>Code</label>
                <TextField className="w-full"></TextField>
              </div>
              <div className="w-full md:w-3/4 pl-2 pr-1">
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
          <div className="flex justify-end">
            <Button variant="primary" size="md">
              Add
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_URL;

  const classification = await axios.get(`${baseUrl}/items/info/classifications`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });

  return { props: { classifications: classification.data } };
};
