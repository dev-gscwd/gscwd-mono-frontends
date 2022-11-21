import { FunctionComponent } from 'react';
import { HeroIconSvgProps } from '../../utils/svg-prop';

export const OutlineCalendar: FunctionComponent<HeroIconSvgProps> = ({ className, strokeWidth, width, height }) => {
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
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    </svg>
  );
};

OutlineCalendar.defaultProps = {
  width: 20,
  height: 20,
  strokeWidth: 1.5,
};
