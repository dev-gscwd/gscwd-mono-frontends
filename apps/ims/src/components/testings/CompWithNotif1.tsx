import { Button } from '@frontends/ui';
import { FunctionComponent, useContext } from 'react';
import { NotificationContext } from '../../pages/notif-test';

export const CompWithNofif1: FunctionComponent = () => {
  const { notify } = useContext(NotificationContext);

  const showNotif = () => {
    notify.custom(<Comp />);
  };

  return (
    <div>
      <Button onClick={showNotif}>Open notif 1</Button>
    </div>
  );
};

const Comp = () => {
  return (
    <div className="bg-green-50 border-2 border-green-200 text-green-700 p-5 text-sm rounded-md">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sint?
    </div>
  );
};
