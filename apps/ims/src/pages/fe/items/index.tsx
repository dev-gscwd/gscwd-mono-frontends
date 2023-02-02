// export default function Index() {
//   return <>Items</>;
// }
import { Button, DataTable, ListDef, Modal, Select, TextField } from '@frontends/shared-ui';
import { createColumnHelper } from '@tanstack/react-table';
// import data from '../../../../mock/mock.json';
import { HiChevronLeft, HiChevronRight, HiOutlineMagnifyingGlass, HiPlus } from 'react-icons/hi2';
import router from 'next/router';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useState } from 'react';
import { Close } from 'libs/shared-ui/src/components/Close';

type Item = {
  id: string;
  code: string;
  item: string;
  details: string;
  description: string;
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

  columnHelper.accessor('item', {
    cell: (info) => info.getValue(),
    header: () => <>Item</>,
  }),

  columnHelper.accessor('details', {
    cell: (info) => info.getValue(),
    header: () => <>Details</>,
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
export default function Items({ items }) {
  const [open, setOpen] = useState(false);
  // const [formWizardPage, setformWizardPage] = useState(1);
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

  console.log(items);
  return (
    <div className="">
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

        <DataTable data={items.items} columns={columns} />
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
      <Modal open={open} setOpen={setOpen} size="md">
        <Modal.Header>
          <div className="flex justify-between">
            <>IMS - Add Item</>
            <>
              <Close onClick={() => setOpen(false)} />
            </>
          </div>
        </Modal.Header>
        <Modal.Body>
          {/* <div className="w-full h-full"> */}
          <div className="flex w-full h-full">
            <form action="">
              <div className="px-2 py-2">
                <div className="space-y-1">
                  <label>Characteristics</label>
                  <TextField></TextField>
                </div>
                <div className="space-y-1">
                  <label>Classifications</label>
                  <TextField></TextField>
                </div>
                <div className="space-y-1">
                  <label>Categories</label>
                  <TextField></TextField>
                </div>
                <div className="space-y-1">
                  <label>Specifications</label>
                  <Select
                    className="flex w-full"
                    data={data}
                    listDef={list}
                    onSelect={(item) => console.log(item.desc)}
                  />
                </div>
              </div>
            </form>
            {/* <div className="flex items-center">
              <HiChevronLeft size={30} onClick={() => setformWizardPage(formWizardPage - 1)} />
            </div>
            <div className="flex flex-col w-full">
              <div>
                <div className="flex justify-between px-2 py-2">
                  <div className="flex flex-col">
                    <div>Step {formWizardPage} of 5</div>
                    {formWizardPage === 1 && <PageOneDescription />}
                    {formWizardPage === 2 && <PageTwoDescription />}
                    {formWizardPage === 3 && <PageThreeDescription />}
                    {formWizardPage === 4 && <PageFourDescription />}
                  </div>
                  <div></div>
                </div>
              </div>
              {formWizardPage === 1 && <PageOne />}
              {formWizardPage === 2 && <PageTwo />}
              {formWizardPage === 3 && <PageThree />}
              {formWizardPage === 4 && <PageFour />}
            </div>
            <div className="flex items-center">
              <HiChevronRight size={30} onClick={() => setformWizardPage(formWizardPage + 1)} />
            </div> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <div className="flex justify-end">
            <Button variant="primary" size="md">
              Add
            </Button>
          </div> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

// const PageOne = () => {
//   return (
//     <div className="flex flex-col h-full items-center justify-center space-y-10">
//       <div>PPE</div>
//       <div>Others</div>
//     </div>
//   );
// };

// const PageOneDescription = () => {
//   return <div className="text-bold">Please select a classification.</div>;
// };

// const PageTwo = () => {
//   return (
//     <div className="flex flex-col h-full items-center justify-center space-y-10">
//       <div>Physical</div>
//       <div>Non-Physical</div>
//     </div>
//   );
// };

// const PageTwoDescription = () => {
//   return <div className="text-bold">Please select a characteristics.</div>;
// };

// const PageThree = () => {
//   return (
//     <div className="flex flex-col h-full items-center justify-center space-y-10">
//       <div>Office Supplies</div>
//       <div>Inventory Materials</div>
//       <div>ICT Equipments</div>
//     </div>
//   );
// };

// const PageThreeDescription = () => {
//   return <div className="text-bold">Please select a category.</div>;
// };

// const PageFour = () => {
//   const list: ListDef<CharacteristicList> = {
//     key: 'desc',
//     render: (listItem, { active, selected }) => (
//       <div className={active ? 'text-indigo-700' : 'text-black'}>{listItem.desc}</div>
//     ),
//   };

//   const data = [
//     { id: 1, desc: 'Ballpen, Black' },
//     { id: 2, desc: 'Ballpen, Red' },
//     { id: 3, desc: 'Ballpen, Blue' },
//     { id: 4, desc: 'Bond Paper, A4' },
//     { id: 5, desc: 'Bond Paper, Short' },
//     { id: 6, desc: 'Pipe, 1/2' },
//   ];

//   return (
//     <div className="flex flex-col h-full items-center justify-center space-y-10">
//       <Select className="flex w-full" data={data} listDef={list} onSelect={(item) => console.log(item.desc)} />
//     </div>
//   );
// };

// const PageFourDescription = () => {
//   return <div className="text-bold">Please select a specification.</div>;
// };

export const getServerSideProps: GetServerSideProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_URL;

  const item = await axios.get(`${baseUrl}/items`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });

  return { props: { items: item.data } };
};
