import { FunctionComponent } from 'react';
import { HeroIconSvgProps } from '../../utils/svg-prop';

export const OutlineCube: FunctionComponent<HeroIconSvgProps> = ({ className, strokeWidth, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      width={`${width}px`}
      height={`${height}px`}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
      />
    </svg>
  );
};

OutlineCube.defaultProps = {
  width: 20,
  height: 20,
  strokeWidth: 1.5,
};
