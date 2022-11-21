import { Button, NotificationActions, NotificationController, useNotification } from '@frontends/shared-ui';
import router from 'next/router';
import { createContext, useEffect } from 'react';
import { CompWithNofif1 } from '../components/testings/CompWithNotif1';
import { CompWithNofif2 } from '../components/testings/CompWithNotif2';

type NotificationContextState = {
  notify: NotificationActions;
};

export const NotificationContext = createContext({} as NotificationContextState);

export default function NotifTest() {
  const { notifRef, notify } = useNotification();

  return (
    <div className="h-screen w-screen flex items-center justify-center gap-2">
      <NotificationContext.Provider value={{ notify }}>
        <CompWithNofif1 />
        <CompWithNofif2 />
      </NotificationContext.Provider>

      <NotificationController ref={notifRef} />
    </div>
  );
}
