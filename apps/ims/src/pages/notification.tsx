import { Button, NotificationController, useNotification } from '@frontends/ui';
import { faker } from '@faker-js/faker';
import { useRouter } from 'next/router';

export default function TestNotification() {
  const { notifRef, notify } = useNotification();

  const showNotification = () => {
    notify.success({ message: '' });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center gap-3">
      <Button onClick={showNotification}>Notify me</Button>
      <Button onClick={() => notify.clearAll()}>Clear all</Button>

      <NotificationController ref={notifRef} position="top-center" />
    </div>
  );
}
