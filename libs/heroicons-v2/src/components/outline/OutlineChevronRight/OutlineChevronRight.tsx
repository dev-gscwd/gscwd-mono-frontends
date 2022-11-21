import { FunctionComponent } from 'react';
import { HeroIconSvgProps } from '../../utils/svg-prop';

export const OutlineChevronRight: FunctionComponent<HeroIconSvgProps> = ({ className, strokeWidth, width, height }) => {
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
};

OutlineChevronRight.defaultProps = {
  width: 20,
  height: 20,
  strokeWidth: 1.5,
};
