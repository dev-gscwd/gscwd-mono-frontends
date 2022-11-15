import { Tooltip, TooltipAnchor } from '@frontends/ui';
import { useTooltip } from 'libs/ui/src/components/Tooltip/useTooltip';

export default function TooltipTest() {
  const state = useTooltip({
    placement: 'bottom',
    offsetValue: 8,
    hover: true,
    showDelay: 500,
    enableSafeClose: true,
  });

  return (
    <>
      <Tooltip state={state}>
        <div className="px-4 py-3 border shadow-lg show-slate-200 rounded-xl w-80 bg-black/70">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-white text-sm">Terms & Conditions</h3>
            <button onClick={() => state.setOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-slate-200 my-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, unde?
            <a href="#" className="text-indigo-400 block mt-3">
              Read more...
            </a>
          </p>
        </div>
      </Tooltip>

      <div className="h-screen w-screen flex items-center justify-center">
        <TooltipAnchor state={state}>
          <a href="#" className="hover:underline hover:underline-offset-2">
            Hover me
          </a>
        </TooltipAnchor>
      </div>
    </>
  );
}
