import { faker } from '@faker-js/faker';
import { Button } from '@frontends/shared-ui';
import { motion, MotionConfig } from 'framer-motion';
import { useState } from 'react';

export default function Test() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex pt-40 justify-center">
      <div className="space-y-2 w-[30rem]">
        <Button onClick={() => setOpen(!open)}>Open</Button>

        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', damping: 18 }}
            className="w-80 py-4 rounded-md border shadow-lg shadow-slate-200"
          >
            <ul className="space-y-3">
              <li className="px-3">
                <h3 className="font-medium text-gray-600">{faker.name.fullName()}</h3>
                <p className="text-sm text-gray-500 mb-1">{faker.company.name()}</p>
              </li>
              <li className="px-3">
                <h3 className="font-medium text-gray-600">{faker.name.fullName()}</h3>
                <p className="text-sm text-gray-500 mb-1">{faker.company.name()}</p>
              </li>
              <li className="px-3">
                <h3 className="font-medium text-gray-600">{faker.name.fullName()}</h3>
                <p className="text-sm text-gray-500 mb-1">{faker.company.name()}</p>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}
