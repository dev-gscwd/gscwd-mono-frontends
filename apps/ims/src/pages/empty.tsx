import { faker } from '@faker-js/faker';
import { listRenderer, Select, useSelect } from '@frontends/ui';
import { ListState } from 'libs/ui/src/components/Select/SelectItem';
import { FunctionComponent, useState } from 'react';

const people = [
  {
    id: 1,
    name: 'Durward Reynolds',
    unavailable: false,
    disabled: false,
    company: faker.company.name(),
    avatar: faker.image.avatar(),
  },
  {
    id: 2,
    name: 'Kenton Towne',
    unavailable: false,
    disabled: true,
    company: faker.company.name(),
    avatar: faker.image.avatar(),
  },
  {
    id: 3,
    name: 'Therese Wunsch',
    unavailable: false,
    disabled: false,
    company: faker.company.name(),
    avatar: faker.image.avatar(),
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    unavailable: true,
    disabled: true,
    company: faker.company.name(),
    avatar: faker.image.avatar(),
  },
  {
    id: 5,
    name: 'Katelyn Rohan',
    unavailable: false,
    disabled: false,
    company: faker.company.name(),
    avatar: faker.image.avatar(),
  },
];

type Person = {
  id: number;
  name: string;
  unavailable: boolean;
  disabled: boolean;
  company?: string;
  avatar?: string;
};

export default function Empty() {
  const [persons] = useState<Person[]>(people);

  const { listDef } = useSelect<Person>({
    key: 'name',
    disable: (item) => item.disabled,
    render: (item, state) =>
      // listRenderer.simple(name, state),
      //  listRenderer.withAvatar({ heading: name, subheading: company, avatarSrc: avatar }, state),
      listRenderer.custom(<CustomListItem state={state} item={item} />),
  });

  return (
    <div className="p-5 pr-10">
      <Select data={persons} listDef={listDef} initial={persons[0]} className="w-full" />
    </div>
  );
}

type CustomListItemProps = {
  state: ListState;
  item: Person;
};

const CustomListItem: FunctionComponent<CustomListItemProps> = ({ state: { active, disabled }, item }) => {
  return (
    <div
      className={`${active ? 'bg-slate-100' : ''} ${
        disabled ? 'cursor-default' : 'cursor-pointer'
      } px-5 py-2 flex items-center gap-5 `}
    >
      <img src={item.avatar} className="shrink-0 h-10 w-10 rounded-full ring-4 ring-gray-200" />
      <div className={`${disabled ? 'text-gray-400' : 'text-gray-600'} mb-1 flex items-center justify-between w-full`}>
        <div>
          <h3 className="font-medium truncate">{item.name}</h3>
          <p className="text-sm">{item.company}</p>
        </div>
      </div>
    </div>
  );
};
