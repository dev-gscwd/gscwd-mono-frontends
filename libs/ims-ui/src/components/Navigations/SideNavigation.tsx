import { FunctionComponent, useContext } from 'react';
import { Accordion, AsideContext, Sidebar } from '@frontends/shared-ui';
import {
  OutlineCalendar,
  OutlineChevronRight,
  OutlineCommandLine,
  OutlineCube,
  OutlineDocument,
  OutlineHome,
} from '@frontends/heroicons-v2';
import { useRouter } from 'next/router';
import { HiQueueList, HiRectangleStack, HiOutlineCog6Tooth } from 'react-icons/hi2';

// set paths for this app
const paths = [
  '/fe',
  '/fe/items',
  '/fe/characteristics',
  '/fe/classification',
  '/fe/category',
  '/fe/specification',
  '/login',
];

export const SideNavigation: FunctionComponent = () => {
  // access context from aside to control its collapse state
  const { collapsed, setCollapsed } = useContext(AsideContext);

  // initialize router
  const router = useRouter();

  return (
    <Sidebar className="text-white">
      <Sidebar.Header className="p-5">
        <button onClick={() => setCollapsed(!collapsed)}>
          <OutlineChevronRight className={`${collapsed ? 'rotate-180' : 'rotate-0'} transition-all`} />
        </button>
      </Sidebar.Header>
      <Sidebar.Content>
        <ul className="text-sm">
          <Sidebar.Item
            selected={router.pathname === paths[0] ? true : false}
            display="Dashboard"
            path={paths[0]}
            icon={<OutlineHome />}
          />
          <Sidebar.Item
            selected={router.pathname === paths[1] ? true : false}
            display="Items"
            path={paths[1]}
            icon={<HiRectangleStack className="h-[20px] w-[20px]" />}
          />
          <Sidebar.Item
            selected={router.pathname === paths[2] ? true : false}
            display="Characteristics"
            path={paths[2]}
            icon={<HiRectangleStack className="h-[20px] w-[20px]" />}
          />
          <Sidebar.Item
            selected={router.pathname === paths[3] ? true : false}
            display="Classification"
            path={paths[3]}
            icon={<HiRectangleStack className="h-[20px] w-[20px]" />}
          />
          <Sidebar.Item
            selected={router.pathname === paths[4] ? true : false}
            display="Categories"
            path={paths[4]}
            icon={<HiRectangleStack className="h-[20px] w-[20px]" />}
          />
          <Sidebar.Item
            selected={router.pathname === paths[5] ? true : false}
            display="Specifications"
            path={paths[5]}
            icon={<HiRectangleStack className="h-[20px] w-[20px]" />}
          />
          {/* <Sidebar.Item
            selected={router.pathname === paths[2] ? true : false}
            display="Items"
            path={paths[2]}
            icon={<HiQueueList className="h-[20px] w-[20px]" />}
          />
          <Sidebar.Item
            selected={router.pathname === paths[3] ? true : false}
            display="Classification"
            path={paths[3]}
            icon={<HiQueueList className="h-[20px] w-[20px]" />}
          />

          <Sidebar.Item
            selected={router.pathname === paths[4] ? true : false}
            display="Category"
            path={paths[4]}
            icon={<HiQueueList className="h-[20px] w-[20px]" />}
          /> */}

          {/* <Sidebar.Item
            selected={router.pathname === paths[6] ? true : false}
            display="Settings"
            path={paths[6]}
            icon={<HiOutlineCog6Tooth className="h-[20px] w-[20px]" />}
          /> */}

          {/* <Sidebar.Content className="pl-5">
            <Accordion className="overflow-none">
              <Accordion.Button>Settings</Accordion.Button>
              <Accordion.Body>
                <Sidebar.Item
                  selected={router.pathname === paths[3] ? true : false}
                  display="Settings"
                  path={paths[3]}
                  icon={<HiOutlineCog6Tooth className="h-[20px] w-[20px]" />}
                />

                <Sidebar.Item
                  selected={router.pathname === paths[3] ? true : false}
                  display="Settings"
                  path={paths[3]}
                  icon={<HiOutlineCog6Tooth className="h-[20px] w-[20px]" />}
                />

                <Sidebar.Item
                  selected={router.pathname === paths[3] ? true : false}
                  display="Settings"
                  path={paths[3]}
                  icon={<HiOutlineCog6Tooth className="h-[20px] w-[20px]" />}
                />

                <Sidebar.Item
                  selected={router.pathname === paths[3] ? true : false}
                  display="Settings"
                  path={paths[3]}
                  icon={<HiOutlineCog6Tooth className="h-[20px] w-[20px]" />}
                />
              </Accordion.Body>
            </Accordion>
          </Sidebar.Content> */}

          {/* <Sidebar.Item
            selected={router.pathname === paths[3] ? true : false}
            display="Classification"
            path={paths[3]}
            icon={<HiOutlineCog6Tooth className="h-[20px] w-[20px]" />}
          /> */}

          {/* <Sidebar.Item
            selected={router.pathname === paths[0] ? true : false}
            display="Dashboard"
            path={paths[0]}
            icon={<OutlineHome />}
          />

          <Sidebar.Item
            selected={router.pathname === paths[1] ? true : false}
            display="Schedule"
            path={paths[1]}
            icon={<OutlineCalendar />}
          />

          <Sidebar.Item
            selected={router.pathname === paths[2] ? true : false}
            display="Documents"
            path={paths[2]}
            icon={<OutlineDocument />}
          />

          <Sidebar.Item
            selected={router.pathname === paths[3] ? true : false}
            display="Terminal"
            path={paths[3]}
            icon={<OutlineCommandLine />}
          />

          <Sidebar.Item
            selected={router.pathname === paths[4] ? true : false}
            display="Packages"
            path={paths[4]}
            icon={<OutlineCube />}..
          /> */}
        </ul>
      </Sidebar.Content>
      {/* <Sidebar.Footer className="p-5">footer</Sidebar.Footer> */}
    </Sidebar>
  );
};
