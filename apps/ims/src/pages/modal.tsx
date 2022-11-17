import { useState } from 'react';
import { Button, listRenderer, Modal, Select, useSelect } from '@frontends/ui';
import { faker } from '@faker-js/faker';

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false, disabled: true },
  { id: 2, name: 'Kenton Towne', unavailable: false, disabled: true },
  { id: 3, name: 'Therese Wunsch', unavailable: false, disabled: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true, disabled: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false, disabled: false },
];

type Person = {
  id: number;
  name: string;
  unavailable: boolean;
  disabled: boolean;
};

export default function MyDialog() {
  let [isOpen, setIsOpen] = useState(false);

  const { listDef } = useSelect<Person>({
    key: 'name',
    disable: (item) => item.disabled,
    render: (item, state) => listRenderer.simple(item.name, state),
  });

  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen} size="sm" fixedHeight={false}>
        <Modal.Header className="pt-2">
          <div className="flex items-center gap-5">
            <div>
              <img src={faker.image.avatar()} className="h-10 w-10 rounded-full ring-4 ring-gray-200 ml-3 shrink-0" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{faker.name.fullName()}</h3>
              <p className="text-gray-500 text-sm">
                {faker.address.cityName()}, {faker.address.country()}
              </p>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="py-5 px-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis recusandae aperiam aut dicta,
            dignissimos distinctio impedit ut officia iste repellat.
          </p>
        </Modal.Body>
        {/* <Modal.Footer className="flex justify-end">
          <Button onClick={() => setIsOpen(false)}>Confirm</Button>
        </Modal.Footer> */}
      </Modal>

      <div className="h-full flex items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Open</Button>
      </div>
    </>
  );
}
