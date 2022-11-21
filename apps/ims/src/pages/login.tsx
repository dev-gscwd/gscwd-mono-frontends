import { Button, Modal } from '@frontends/shared-ui';
import { useState } from 'react';

export default function Login() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal open={open} setOpen={setOpen} steady>
        <Modal.Header>Header</Modal.Header>
        <Modal.Body>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ea praesentium neque? Ullam sint quo,
            sequi saepe maiores consectetur nisi magni eveniet amet unde corrupti odit quasi assumenda porro quod
            tempora sapiente esse, qui ab ex quos cumque dolorum. Tempore in enim quas iste saepe hic ratione
            perferendis! Delectus, fuga.
          </p>

          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </Modal.Body>
      </Modal>

      {/* <Drawer open={open} setOpen={setOpen} size="sm">
        <Drawer.Body>Body</Drawer.Body>
      </Drawer> */}
      <div className="flex h-screen justify-center items-center">
        <Button onClick={() => setOpen(true)}>Open</Button>
      </div>
    </>
  );
}
