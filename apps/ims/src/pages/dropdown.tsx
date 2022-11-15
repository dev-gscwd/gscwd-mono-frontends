import { faker } from '@faker-js/faker';
import { Dropdown, Tooltip, TooltipAnchor } from '@frontends/ui';
import { menuRenderer, useDropdown } from 'libs/ui/src/components/Dropdown/useDropdown';
import { useTooltip } from 'libs/ui/src/components/Tooltip/useTooltip';
import { FunctionComponent, useState } from 'react';

export default function DropdownTest() {
  const [calendarMenuList] = useState<Array<string>>([
    `${faker.random.word()}`,
    `${faker.random.word()}`,
    `${faker.random.word()}`,
    `${faker.random.word()}`,
  ]);

  const [archiveMenuList] = useState<Array<string>>([
    `${faker.random.word()}`,
    `${faker.random.word()}`,
    `${faker.random.word()}`,
    `${faker.random.word()}`,
  ]);

  const [codeMenuList] = useState<Array<string>>([
    `${faker.random.word()}`,
    `${faker.random.word()}`,
    `${faker.random.word()}`,
    `${faker.random.word()}`,
  ]);

  const [stackMenuList] = useState<Array<string>>([
    `${faker.random.word()}`,
    `${faker.random.word()}`,
    `${faker.random.word()}`,
    `${faker.random.word()}`,
  ]);

  const [ellipsisMenuList] = useState<Array<string>>([
    `${faker.random.word()}`,
    `${faker.random.word()}`,
    `${faker.random.word()}`,
    `${faker.random.word()}`,
  ]);

  const calendarMenu = useDropdown<string>({ render: (menuItem, state) => menuRenderer.simple({ menuItem, state }) });

  const archiveMenu = useDropdown<string>({ render: (menuItem, state) => menuRenderer.simple({ menuItem, state }) });

  const codeMenu = useDropdown<string>({ render: (menuItem, state) => menuRenderer.simple({ menuItem, state }) });

  const stackMenu = useDropdown<string>({ render: (menuItem, state) => menuRenderer.simple({ menuItem, state }) });

  const ellipsisMenu = useDropdown<string>({ render: (menuItem, state) => menuRenderer.simple({ menuItem, state }) });

  const calendar = useTooltip({ placement: 'top', hover: true, dismissOnPress: true, showDelay: 700 });

  const archive = useTooltip({ placement: 'top', hover: true, dismissOnPress: true, showDelay: 700 });

  const code = useTooltip({ placement: 'top', hover: true, dismissOnPress: true, showDelay: 700 });

  const stack = useTooltip({ placement: 'top', hover: true, dismissOnPress: true, showDelay: 700 });

  const ellipsis = useTooltip({ placement: 'top', hover: true, dismissOnPress: true, showDelay: 700 });

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex items-center gap-3 bg-white border border-gray-100 shadow-lg shadow-slate-200 p-2 rounded-lg text-gray-600">
        <>
          <TooltipAnchor state={calendar}>
            <Dropdown
              data={calendarMenuList}
              menuDef={calendarMenu}
              offsetValue={0}
              placement="bottom-end"
              className="h-10 w-10 p-2 hover:bg-gray-100 rounded-md"
            >
              <Calendar />
            </Dropdown>
          </TooltipAnchor>
          <Tooltip state={calendar}>
            <div className="bg-black bg-opacity-70 text-white p-2 text-xs rounded">show calendar options</div>
          </Tooltip>
        </>

        <>
          <TooltipAnchor state={archive}>
            <Dropdown
              data={archiveMenuList}
              menuDef={archiveMenu}
              offsetValue={20}
              placement="bottom"
              className="h-10 w-10 p-2 hover:bg-gray-100 rounded-md"
            >
              <Archive />
            </Dropdown>
          </TooltipAnchor>
          <Tooltip state={archive}>
            <div className="bg-black bg-opacity-70 text-white p-2 text-xs rounded">show archive options</div>
          </Tooltip>
        </>

        <>
          <TooltipAnchor state={code}>
            <Dropdown
              data={codeMenuList}
              menuDef={codeMenu}
              offsetValue={20}
              placement="bottom"
              className="h-10 w-10 p-2 hover:bg-gray-100 rounded-md"
            >
              <Code />
            </Dropdown>
          </TooltipAnchor>

          <Tooltip state={code}>
            <div className="bg-black bg-opacity-70 text-white p-2 text-xs rounded">show code options</div>
          </Tooltip>
        </>

        <>
          <TooltipAnchor state={stack}>
            <Dropdown
              data={stackMenuList}
              menuDef={stackMenu}
              offsetValue={20}
              placement="bottom"
              className="h-10 w-10 p-2 hover:bg-gray-100 rounded-md"
            >
              <Stack />
            </Dropdown>

            <Tooltip state={stack}>
              <div className="bg-black bg-opacity-70 text-white p-2 text-xs rounded">show stack options</div>
            </Tooltip>
          </TooltipAnchor>
        </>

        <>
          <TooltipAnchor state={ellipsis}>
            <Dropdown
              data={ellipsisMenuList}
              menuDef={ellipsisMenu}
              offsetValue={20}
              placement="bottom-start"
              className="h-10 w-10 p-2 hover:bg-gray-100 rounded-md"
            >
              <Ellipsis />
            </Dropdown>
            <Tooltip state={ellipsis}>
              <div className="bg-black bg-opacity-70 text-white p-2 text-xs rounded">show ellipsis options</div>
            </Tooltip>
          </TooltipAnchor>
        </>
      </div>
    </div>
  );
}

const Calendar: FunctionComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    </svg>
  );
};

const Archive: FunctionComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
      />
    </svg>
  );
};

const Code: FunctionComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
      />
    </svg>
  );
};

const Stack: FunctionComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
      />
    </svg>
  );
};

const Ellipsis: FunctionComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-full h-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
};
