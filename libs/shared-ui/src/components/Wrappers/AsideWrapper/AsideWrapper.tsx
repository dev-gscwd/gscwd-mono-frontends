import { FunctionComponent, ReactNode } from 'react';

type AsideProps = {
  children: ReactNode | ReactNode[];
};

export const Aside: FunctionComponent<AsideProps> = ({ children }) => {
  return (
    <aside className="w-64 z-10 shrink-0 h-screen overflow-x-hidden overflow-y-auto bg-white border-r transition-all">
      {children}
    </aside>
  );
};
