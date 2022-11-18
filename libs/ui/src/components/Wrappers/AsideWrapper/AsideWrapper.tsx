import { FunctionComponent, ReactNode } from 'react';

type AsideWrapperProps = {
  children: ReactNode | ReactNode[];
};

export const AsideWrapper: FunctionComponent<AsideWrapperProps> = ({ children }) => {
  return (
    <aside className="w-64 fixed top-0 left-0 z-10 shrink-0 h-screen overflow-x-hidden overflow-y-auto bg-white border-r">
      {children}
    </aside>
  );
};
