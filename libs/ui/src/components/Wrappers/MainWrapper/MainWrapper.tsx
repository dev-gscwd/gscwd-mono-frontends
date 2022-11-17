import { FunctionComponent, ReactNode } from 'react';

type MainWrapperProps = {
  children: ReactNode | ReactNode[];
};

export const MainWrapper: FunctionComponent<MainWrapperProps> = ({ children }) => {
  return <main className="pl-64 h-full w-full overflow-y-auto bg-transparent pt-16">{children}</main>;
};
