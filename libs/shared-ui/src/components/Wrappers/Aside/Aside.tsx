import { createContext, FunctionComponent, ReactNode, useState } from 'react';

type AsideContextState = {
  collapsed: boolean;
  setCollapsed: (state: boolean) => void;
};

type AsideProps = {
  children: ReactNode | ReactNode[];
};

export const AsideContext = createContext({} as AsideContextState);

export const Aside: FunctionComponent<AsideProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <AsideContext.Provider value={{ collapsed, setCollapsed }}>
      <aside
        className={`${
          collapsed ? 'w-16' : 'w-64'
        } z-10 shrink-0 h-screen overflow-x-hidden overflow-y-auto transition-all duration-500 ease-in-out`}
      >
        {children}
      </aside>
    </AsideContext.Provider>
  );
};
