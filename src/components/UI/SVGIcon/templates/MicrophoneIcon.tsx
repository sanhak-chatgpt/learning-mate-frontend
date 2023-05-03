import * as React from 'react';
import { SVGProps } from 'react';
import { ViewBoxSize } from '../SVGIcon.types';
import styled from '@emotion/styled';
const Base = ({
  width,
  height,
  title,
  viewBox = '0 0 24 24',
  fill = 'none',
  ...props
}: SVGProps<SVGSVGElement> & {
  width: number | string;
  height: number | string;
  title: string;
  viewBox?: ViewBoxSize;
  fill?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox={viewBox}
      {...props}>
      <g fillOpacity={0.4} filter="url(#microphone_icon_svg__a)">
        <path
          fill="url(#microphone_icon_svg__b)"
          d="M29 38.5c0-20.987 17.013-38 38-38s38 17.013 38 38v65c0 20.987-17.013 38-38 38s-38-17.013-38-38v-65Z"
        />
        <path
          fill="url(#microphone_icon_svg__c)"
          fillRule="evenodd"
          d="M10.645 72.001c5.522.08 9.934 4.62 9.855 10.143-.172 11.944-2.038 29.786 5.944 44.251 7.698 13.95 20 24.367 40.37 24.367 20.377 0 32.752-10.428 40.529-24.4 8.057-14.475 6.272-32.323 6.157-44.266-.053-5.523 4.381-10.043 9.904-10.096 5.522-.052 10.042 4.382 10.095 9.904.137 14.311 1.529 35.843-8.681 54.185-9.236 16.594-24.56 30.847-48.004 34.016V182c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10v-11.895c-23.44-3.172-38.714-17.436-47.881-34.048-10.128-18.353-8.637-39.892-8.43-54.2.078-5.523 4.62-9.935 10.142-9.856Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient
          id="microphone_icon_svg__b"
          x1={-4}
          x2={154.843}
          y1={23}
          y2={32.017}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FE82DB" />
          <stop offset={1} stopColor="#68E4FF" />
        </linearGradient>
        <linearGradient
          id="microphone_icon_svg__c"
          x1={-4}
          x2={154.843}
          y1={23}
          y2={32.017}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FE82DB" />
          <stop offset={1} stopColor="#68E4FF" />
        </linearGradient>
        <filter
          id="microphone_icon_svg__a"
          width={193.329}
          height={251.5}
          x={-29.692}
          y={-29.5}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={15} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_31_463" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_31_463" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={0.5} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend in2="shape" result="effect2_innerShadow_31_463" />
        </filter>
      </defs>
    </svg>
  );
};
export const SvgMicrophoneIcon = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgMicrophoneIcon;
