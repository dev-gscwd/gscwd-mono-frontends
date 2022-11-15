import { Button } from '@frontends/ui';
import { FunctionComponent, useContext } from 'react';
import { NotificationContext } from '../../pages/notif-test';

export const CompWithNofif2: FunctionComponent = () => {
  const { notify } = useContext(NotificationContext);

  const showNotif = () => {
    notify.custom(
      <div className="bg-red-50 border-2 border-red-100 p-5 text-sm text-red-500 rounded-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sint?
      </div>
    );
  };

  return (
    <div>
      <Button onClick={showNotif}>Open notif 2</Button>
    </div>
  );
};
