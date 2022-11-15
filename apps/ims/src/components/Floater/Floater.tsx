import { FloatingContext, ReferenceType, useFloating } from '@floating-ui/react-dom-interactions';
import { createContext, forwardRef, HTMLAttributes, ReactNode, useContext, useEffect } from 'react';

type FloaterContextState = {
  reference: (node: ReferenceType | undefined) => void;
  floating: (node: HTMLElement) => void;
};

type FloaterProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  children: ReactNode | ReactNode[];
};

export const FloaterContext = createContext({} as FloaterContextState);

export const useFloater = () => {
  const { reference, floating } = useContext(FloaterContext);

  return { reference, floating };
};

export const Floater = forwardRef<HTMLDivElement, FloaterProps>((props, ref) => {
  const { floating, reference, strategy, x, y, context } = useFloating();

  const { open, children, ...rest } = props;

  return (
    <>
      {open && (
        <FloaterContext.Provider value={{ floating, reference }}>
          <div {...rest} ref={ref} style={{ position: strategy, top: y ?? 0, left: x ?? 0 }}>
            {children}
          </div>
        </FloaterContext.Provider>
      )}
    </>
  );
});
