import { FunctionComponent, ReactNode } from 'react';

type NavWrapperProps = {
  children: ReactNode | ReactNode[];
};

export const NavWrapper: FunctionComponent<NavWrapperProps> = ({ children }) => {
  return <nav className="fixed w-[calc(100%-16rem)] bg-white ml-64 h-16 z-10">{children}</nav>;
};
