import { FunctionComponent } from 'react';
import { HeroIconSvgProps } from '../../utils/svg-prop';

export const OutlineCommandLine: FunctionComponent<HeroIconSvgProps> = ({ className, strokeWidth, width, height }) => {
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
        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
};

OutlineCommandLine.defaultProps = {
  width: 20,
  height: 20,
  strokeWidth: 1.5,
};
