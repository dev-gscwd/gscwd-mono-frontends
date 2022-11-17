import React, { useRef } from 'react';
import classnames from 'classnames';
import { useState } from 'react';
import {
  Placement,
  offset,
  arrow,
  shift,
  useFloating,
  useInteractions,
  useHover,
  flip,
  useDelayGroupContext,
} from '@floating-ui/react-dom-interactions';

type TooltipProps = any;

export function Tooltip(props: TooltipProps) {
  const { children, text, placement: preferredPlacement = 'top', zIndex, ...rest } = props;

  const { setCurrentId } = useDelayGroupContext();
  const [open, setOpen] = useState(false);
  const arrowRef = useRef(null);
  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useFloating({
    placement: preferredPlacement,
    open,
    onOpenChange(open) {
      setOpen(open);
      if (open) {
        setCurrentId(text);
      }
    },
    middleware: [
      offset(10),
      shift(),
      flip({
        fallbackPlacements: ['right', 'top', 'left'],
        fallbackStrategy: 'initialPlacement',
        flipAlignment: false,
      }),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const { getFloatingProps } = useInteractions([useHover(context)]);

  const staticSide: any = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[placement.split('-')[0]];

  return (
    <>
      <div ref={reference} style={{ display: 'inline-flex' }}>
        {children}
      </div>
      {open && (
        <div
          {...getFloatingProps({
            ref: floating,
            style: {
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              zIndex: zIndex ?? 0,
              background: 'black',
            },
          })}
        >
          {text}
          <div
            ref={arrowRef}
            style={{
              position: 'absolute',
              width: '10px',
              height: '10px',
              background: 'black',
              left: arrowX != null ? `${arrowX}px` : '',
              top: arrowY != null ? `${arrowY}px` : '',
              [staticSide]: '-5px',
              transform: 'rotate(45deg)',
            }}
          />
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Tooltip text="Hello there">
        <button>Hi</button>
      </Tooltip>
    </div>
  );
}
