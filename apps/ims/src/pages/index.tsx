import { PopoverMenu } from '@frontends/shared-ui';

export default function Index() {
  return (
    <>
      <PopoverMenu
        size="sm"
        display={
          <div className="h-10 w-10 rounded hover:bg-gray-200 p-2 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        }
        placement="bottom-start"
      >
        <PopoverMenu.Header className="bg-white">
          <div className="flex items-center justify-between">
            <span>Notifications</span>
            <span className="text-xs">View all</span>
          </div>
        </PopoverMenu.Header>

        <PopoverMenu.Content className="bg-white">
          <ul className="">
            <li className="flex items-center gap-5 hover:bg-gray-100 px-4 py-3 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 shrink-0 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              <div>
                <h3 className="font-medium text-gray-700">Computer</h3>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, placeat.
                </p>
              </div>
            </li>

            <li className="flex items-center gap-5 hover:bg-gray-100 px-4 py-3 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 shrink-0 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                />
              </svg>

              <div>
                <h3 className="font-medium text-gray-700">CPU Chip</h3>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, placeat.
                </p>
              </div>
            </li>

            <li className="flex items-center gap-5 hover:bg-gray-100 px-4 py-3 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 shrink-0 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>

              <div>
                <h3 className="font-medium text-gray-700">Credit Card</h3>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, placeat.
                </p>
              </div>
            </li>

            <li className="flex items-center gap-5 hover:bg-gray-100 px-4 py-3 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 shrink-0 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <div>
                <h3 className="font-medium text-gray-600">Envelope</h3>
                <p className="text-xs text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, placeat.
                </p>
              </div>
            </li>
          </ul>
        </PopoverMenu.Content>

        <PopoverMenu.Footer className="bg-white border-t">
          <div className="flex items-center justify-center">
            <span>View More</span>
          </div>
        </PopoverMenu.Footer>
      </PopoverMenu>
    </>
  );
}
