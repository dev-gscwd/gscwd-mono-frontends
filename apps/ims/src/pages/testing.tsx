import { Listbox } from '@headlessui/react';

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
];

export default function Example() {
  return (
    <form action="/projects/1/assignee" method="post">
      <Tests />
      <button>Submit</button>
    </form>
  );
}

const Tests = () => {
  return (
    <Listbox name="assignee" defaultValue={people[0]}>
      <Listbox.Button>{({ value }) => value.name}</Listbox.Button>
      <Listbox.Options>
        {people.map((person) => (
          <Listbox.Option key={person.id} value={person}>
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
