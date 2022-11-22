import { Button, Drawer, Modal } from '@frontends/shared-ui';
import { useState } from 'react';
import { faker } from '@faker-js/faker';

export default function Login() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <Modal.Header className="flex items-center gap-4">
          <img src={faker.image.avatar()} className="h-12 w-12 rounded-full ring-4 ring-gray-200" />
          <div>
            <h3 className="text-gray-700 font-semibold">{faker.name.fullName()}</h3>
            <p className="text-sm text-gray-600">
              {faker.address.city()}, {faker.address.country()}
            </p>
          </div>
        </Modal.Header>
        <Modal.Body className="mt-5 pl-16">
          <p className="text-gray-500 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ea praesentium neque? Ullam sint quo,
            sequi saepe maiores consectetur nisi magni eveniet amet unde corrupti odit quasi assumenda porro quod
            tempora sapiente esse, qui ab ex quos cumque dolorum. Tempore in enim quas iste saepe hic ratione
            perferendis! Delectus, fuga.
          </p>
        </Modal.Body>
      </Modal>
      {/* 
      <Drawer open={open} setOpen={setOpen} size="sm">
        <Drawer.Body>Body</Drawer.Body>
      </Drawer> */}
      <div className="flex h-full justify-center items-center">
        <Button onClick={() => setOpen(true)}>Open</Button>
      </div>
    </>
  );
}
