import { Button, Modal } from '@frontends/shared-ui';
import { useEffect, useState } from 'react';

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => console.log(page), [page]);

  return (
    <div>
      <Modal setOpen={setIsOpen} open={isOpen}>
        <Modal.Header>test</Modal.Header>
        <Modal.Body>
          <div className="p-3">
            {page === 1 && <PageOne />}
            {page === 2 && <PageTwo />}
            {page === 3 && <PageThree />}
            <Button onClick={() => setPage(page + 1)}>Next</Button>
          </div>
        </Modal.Body>
        <Modal.Footer>footer</Modal.Footer>
      </Modal>

      <Button onClick={() => setIsOpen(true)}>Open</Button>
    </div>
  );
}

const PageOne = () => {
  return <h1>I am Page 1</h1>;
};

const PageTwo = () => {
  return <h1>I am Page 2</h1>;
};

const PageThree = () => {
  return <h1>I am Page 3</h1>;
};
