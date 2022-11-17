import { FunctionComponent, ReactNode } from 'react';

type PageWrapperProps = {
  children: ReactNode | ReactNode[];
};

export const PageWrapper: FunctionComponent<PageWrapperProps> = ({ children }) => {
  return <div className="h-screen w-screen overflow-x-hidden bg-slate-50/50">{children}</div>;
};
