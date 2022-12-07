import { Button, TextField } from '@frontends/shared-ui';
import { url } from 'inspector';
import { useState } from 'react';
import { HiEllipsisVertical } from 'react-icons/hi2';

// const [classification, setClassification] = useState();

export default function ItemDetails() {
  return (
    <div className="w-full h-full">
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
              <div>
                <p className="text-2xl">Hammer, Ball Hammer Heavy Duty</p>
              </div>
              <div>04-277-001</div>
              <div className="pt-10">
                <div>
                  <p>Available Quantity: 50</p>
                </div>
                <div>Average Cost: 290.00</div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-end">
              <div>
                <HiEllipsisVertical size={28} />
              </div>
              <div className="mt-14">
                <p className="text-sm italic">Date Created: 09/25/2014</p>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="my-4" /> */}
        <div className="mb-4 border-b border-gray-200 dark:border-gray -700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 rounded-t-lg border-b-2"
                id="details-tab"
                data-tabs-target="#details"
                type="button"
                role="tab"
                aria-controls="details"
                aria-selected="false"
              >
                Details
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Bin Card
                {/* (Warehouse) */}
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Stock Card
                {/* (Accounting) */}
              </button>
            </li>
          </ul>
        </div>
        {/* <div>
          <div className="grid grid-cols-2 gap-6">
            <div className="">
              <label>Classification</label>
              <TextField className="w-full pointer-events-none" defaultValue={'Expense'} disabled />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
