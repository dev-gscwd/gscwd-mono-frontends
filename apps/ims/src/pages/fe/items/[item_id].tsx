import { Button, TextField } from '@frontends/shared-ui';
import { url } from 'inspector';
import { useState } from 'react';
import {
  HiEllipsisVertical,
  HiOutlineMagnifyingGlass,
  HiOutlineChevronRight,
  HiOutlineChevronLeft,
} from 'react-icons/hi2';
import { Tab } from '@headlessui/react';

// const [classification, setClassification] = useState();

export default function ItemDetails() {
  return (
    <div className="w-full h-full">
      {/* <div className="relative w-full"> */}
      <div className="flex justify-between">
        <div></div>
        {/* <div className="flex flex-row items-center">
          <HiOutlineChevronLeft size={28} />
          <HiOutlineChevronRight size={28} />
        </div> */}
        <div>
          {/* <Button> */}
          {/* <TextField placeholder="Search Items" size={40} className="rounded-2xl" /> */}

          {/* </Button> */}
          {/* <HiOutlineChevronLeft />
          <HiOutlineChevronRight /> */}
        </div>
        {/* <TextField placeholder="Search" className="mr-0" /> */}
      </div>
      {/* <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <HiOutlineMagnifyingGlass />
        </div> */}
      {/* </div> */}
      <div className="bg-white p-5 rounded-md">
        <div className="flex justify-between">
          <div className="flex">
            <div>
              <img
                src="https://st2.depositphotos.com/47577860/46775/v/600/depositphotos_467754414-stock-illustration-ball-hammer-peen-icon-flat.jpg"
                className="w-36 h-36 rounded-lg border-solid border-2"
                alt=""
              />
            </div>
            <div className="ml-6">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <p className="text-2xl">Hammer, Ball Hammer Heavy Duty</p>
                  <div>04-277-001</div>
                </div>
                <div>
                  <p>Available Quantity: 50</p>
                  <div>Average Cost: 290.00</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-end h-full justify-between">
              <div>
                <HiEllipsisVertical size={28} className="hover:fill-gray-500" />
              </div>
              <div>
                <p className="text-sm italic">Date Created: 09/25/2014</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Tab.Group>
            <Tab.List className={'mb-4 border-b border-gray-200'}>
              <Tab className={'pr-2 py-4 hover:text-gray-500'}>Details</Tab>
              <Tab className={'px-2 py-4 hover:text-gray-500'}>Bin Card</Tab>
              <Tab className={'px-2 py-4 hover:text-gray-500'}>Stock Card</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="flex">
                  <div className="">Characteristics:</div>
                  <div>Physical</div>
                </div>
                <div className="flex">
                  <div className="">Classification:</div>
                  <div>Expense</div>
                </div>
                <div className="flex">
                  <div className="">Category:</div>
                  <div>Gutter</div>
                </div>
                <div className="flex">
                  <div className="">Specification:</div>
                  <div>0.400mmx0.915x2.4m</div>
                </div>
                <div className="flex">
                  <div className="">UOM:</div>
                  <div>PC</div>
                </div>
                <div className="flex">
                  <div className="">Reorder Point:</div>
                  <div>0</div>
                </div>
                <div className="flex">
                  <div className="">Reorder Quantity:</div>
                  <div>0</div>
                </div>
                <div className="flex">
                  <div className="">On Order:</div>
                  <div>0</div>
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
