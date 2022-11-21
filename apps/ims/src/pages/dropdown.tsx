import { faker } from '@faker-js/faker';
import { TooltipAnchor, Dropdown, Tooltip } from '@frontends/shared-ui';
import { menuRenderer, useDropdown } from '@frontends/shared-ui';
import { useTooltip } from '@frontends/shared-ui';
import { FunctionComponent, useState } from 'react';

type MenuWithIcon = {
  item: string;
  icon: JSX.Element;
};

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

  const [ellipsisIconMenu] = useState([
    {
      item: faker.name.fullName(),
      icon: (
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
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
          />
        </svg>
      ),
    },
    {
      item: faker.name.fullName(),
      icon: (
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
            d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
          />
        </svg>
      ),
    },
    {
      item: faker.name.fullName(),
      icon: (
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
            d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
          />
        </svg>
      ),
    },
    {
      item: faker.name.fullName(),
      icon: (
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
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
    },
    {
      item: faker.name.fullName(),
      icon: (
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
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
    },
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

  const ellipsisMenuDef = useDropdown<MenuWithIcon>({
    render: ({ icon, item }, state) => menuRenderer.withIcon({ menuItem: item, state, icon }),
    disable: (item, index) => (index % 2 === 0 ? true : false),
  });

  return (
    <div className="flex pt-5 justify-center">
      <div>
        <div className="flex items-center gap-3 bg-white border border-gray-100 shadow-lg shadow-slate-200 p-1 rounded-lg text-gray-600">
          <>
            <TooltipAnchor state={calendar}>
              <Dropdown
                data={calendarMenuList}
                menuDef={calendarMenu}
                offsetValue={20}
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
                data={ellipsisIconMenu}
                menuDef={ellipsisMenuDef}
                offsetValue={20}
                shiftPaddingValue={20}
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
