import { flip, offset, Placement, shift, useFloating } from '@floating-ui/react-dom-interactions';
import { Menu } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, ReactNode } from 'react';
import { ListState } from '../Select/SelectItem';
import { menuContainerClass } from './Dropdown.styles';
import { MenuDef } from './useDropdown';

export type MenuListState = Omit<ListState, 'selected'>;

type DropdownProps<T> = {
  className?: string;
  children: ReactNode | ReactNode[];
  data: Array<T>;
  menuDef: MenuDef<T>;
  placement?: Placement;
  offsetValue?: number;
  onSelect?: (menuItem: T) => void;
};

export const Dropdown = <T extends object | string>({
  className,
  children,
  data,
  menuDef,
  onSelect,
  placement,
  offsetValue = 0,
}: DropdownProps<T>) => {
  // invoke floating ui to handle menu options container
  const { x, y, reference, floating, strategy } = useFloating({
    placement,
    middleware: [offset(offsetValue), flip(), shift({ padding: 5 })],
  });

  const { render, disable } = menuDef;

  return (
    <Menu as="div">
      {({ open }) => (
        <>
          <Menu.Button ref={reference} className={className}>
            {children}
          </Menu.Button>

          <AnimatePresence>
            {open && (
              <motion.div
              // TODO initialize animation for this component
              // initial={{ opacity: 0, y: y ? y + offsetValue : 0 }}
              // animate={{ opacity: 1, y: y ?? 0 }}
              // exit={{ opacity: 0 }}
              >
                <Menu.Items
                  ref={floating}
                  as="ul"
                  static
                  className={menuContainerClass()}
                  style={{ position: 'fixed', top: y ?? 0, left: x ?? 0 }}
                >
                  {data.map((menu, index) => {
                    const isDisabled = disable ? disable(menu) : false;

                    return (
                      <Menu.Item
                        as="li"
                        disabled={isDisabled}
                        key={index}
                        onClick={onSelect ? () => onSelect(menu) : () => null}
                      >
                        {({ active, disabled }) => <>{render(menu, { active, disabled })}</>}
                      </Menu.Item>
                    );
                  })}
                </Menu.Items>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
};

Dropdown.defaultProps = {
  placement: 'bottom',
  offsetValue: 10,
};
