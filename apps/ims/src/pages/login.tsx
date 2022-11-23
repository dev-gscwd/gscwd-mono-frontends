import { Button, Drawer } from '@frontends/shared-ui';
import { useState } from 'react';

export default function Login() {
  const [open, setOpen] = useState(false);

  // const { notifRef, notify } = useNotification();

  return (
    <>
      <Drawer open={open} setOpen={setOpen} size="sm">
        <Drawer.Body>Body</Drawer.Body>
      </Drawer>

      {/* <NotificationController ref={notifRef} position="top-right" /> */}

      <div className="flex h-full justify-center items-center">
        <Button
          onClick={() => {
            // const notification = notify.custom(
            //   <div className="bg-white p-3 rounded-md">
            //     <p>Notification</p>
            //     <button onClick={() => notify.dismiss(notification.id)}>Close</button>
            //   </div>
            // );

            setOpen(true);
          }}
        >
          Open
        </Button>
      </div>
    </>
  );
}
