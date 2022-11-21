import { FunctionComponent, ReactNode } from 'react';

type NavWrapperProps = {
  children: ReactNode | ReactNode[];
};

export const NavWrapper: FunctionComponent<NavWrapperProps> = ({ children }) => {
  return <nav className="fixed w-[calc(100%-20rem)] bg-white ml-80 h-16 z-10 border-b">{children}</nav>;
};
