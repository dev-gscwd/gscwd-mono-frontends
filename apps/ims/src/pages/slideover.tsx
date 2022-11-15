import { useState } from 'react';
import { Button, Drawer, NotificationController, useNotification } from '@frontends/ui';
import { useRouter } from 'next/router';

export default function MyDialog() {
  let [openDrawer, setOpenDrawer] = useState(false);

  const { notifRef, notify } = useNotification();

  const router = useRouter();

  return (
    <>
      <Drawer open={openDrawer} setOpen={setOpenDrawer}>
        {/* <Drawer.Header>Header</Drawer.Header>
        <Drawer.Body>Body</Drawer.Body>
        <Drawer.Footer>Footer</Drawer.Footer> */}
      </Drawer>

      <NotificationController ref={notifRef} position="bottom-right" />

      <div className="h-screen w-screen flex items-center justify-center gap-3">
        <Button onClick={() => setOpenDrawer(true)}>Open Drawer</Button>
      </div>
    </>
  );
}
