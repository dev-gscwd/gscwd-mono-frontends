import { FunctionComponent, ReactNode } from 'react';

type MainProps = {
  children: ReactNode | ReactNode[];
};

export const Main: FunctionComponent<MainProps> = ({ children }) => {
  return <main className="h-full w-full flex-1 overflow-y-auto bg-transparent">{children}</main>;
};