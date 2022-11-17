import { Accordion } from '@frontends/ui';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

export default function AccordionTest() {
  return (
    <div className="h-screen w-screen flex pt-20 justify-center">
      <div>
        <div className="w-96 border p-3 space-y-2 bg-white rounded-lg shadow-xl shadow-slate-200">
          <Accordion>
            <Accordion.Button className="bg-indigo-500 text-white py-2 px-4 rounded w-full text-left">
              <span>Lorem ipsum dolor sit.</span>
            </Accordion.Button>
            <Accordion.Body className="py-5 pl-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum?
            </Accordion.Body>
          </Accordion>

          <Accordion>
            <Accordion.Button className="bg-indigo-500 text-white py-2 px-4 rounded w-full text-left">
              <span>Lorem ipsum dolor sit, amet, odio!</span>
            </Accordion.Button>
            <Accordion.Body className="py-5 pl-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum?
            </Accordion.Body>
          </Accordion>

          <Accordion>
            <Accordion.Button className="bg-indigo-500 text-white py-2 px-4 rounded w-full text-left">
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </Accordion.Button>
            <Accordion.Body className="py-5 pl-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum?
            </Accordion.Body>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
