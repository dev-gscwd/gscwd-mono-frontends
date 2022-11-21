import { faker } from '@faker-js/faker';
import { Button, Tooltip, TooltipAnchor } from '@frontends/shared-ui';
import { useTooltip } from '@frontends/shared-ui';
import { useEffect, useState } from 'react';

export default function Popper() {
  const [avatar, setAvatar] = useState('');

  const [name, setName] = useState('');

  const [company, setCompany] = useState('');

  const state = useTooltip({
    initialOpen: false,
    placement: 'bottom',
    offsetValue: 10,
    //click: true,
    hover: true,
    enableSafeClose: true,
  });

  useEffect(() => {
    if (state.open) {
      setAvatar(faker.image.avatar());

      setName(faker.name.fullName());

      setCompany(`${faker.company.name()}, ${faker.address.country()}`);
    }
  }, [state.open]);

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center gap-2">
        <TooltipAnchor state={state}>
          <Button>Tooltip</Button>
        </TooltipAnchor>

        <Tooltip state={state}>
          <div className="bg-white p-3 rounded-md shadow-lg shadow-slate-200 border w-96 overflow-y-auto">
            <div className="w-full">
              <div className="flex items-center gap-3">
                <img src={avatar} className="h-10 w-10 rounded-full shrink-0 ring-4 ring-gray-100" alt="avatar" />
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <a
                      href="#"
                      className="font-semibold text-gray-600 truncate hover:underline hover:underline-offset-2"
                    >
                      {name}
                    </a>
                    <button onClick={() => state.setOpen(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 trucate">{company}</p>
                </div>
              </div>
              <div className="mt-3 pr-3 pl-1 pb-2">
                <p className="text-sm text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda aperiam earum aspernatur enim
                  pariatur consequatur quisquam modi eaque, amet omnis? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </Tooltip>
      </div>

      <div className="mt-96">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque ipsa at accusamus doloremque,
          maiores fuga mollitia porro ad! Modi quasi iste recusandae voluptatibus porro vitae maiores cum labore sunt,
          corrupti rem eius ipsum enim repellat beatae quas, laborum blanditiis earum cumque nemo veritatis delectus ad
          debitis. Voluptate esse modi ab maiores doloremque quibusdam laudantium assumenda perspiciatis ipsum
          perferendis consectetur aliquam, quaerat cupiditate sed alias? Veniam nostrum aliquam aperiam totam quibusdam,
          natus quisquam doloribus tempore iusto possimus ab alias cum autem voluptates et optio corporis laudantium,
          praesentium sunt earum. Deleniti facilis provident voluptate laboriosam doloribus iusto dolorum dolores
          officiis cupiditate?
        </p>
      </div>
    </>
  );
}
