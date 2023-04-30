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
  width: number | string,
  height: number | string,
  title: string,
  viewBox?: ViewBoxSize,
  fill?: string,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox={viewBox}
      {...props}>
      <path
        fill="url(#message_icon_svg__a)"
        d="M33.333 12.417a2 2 0 0 0-2-2H8.25a2 2 0 0 0-2 2v21.382a1 1 0 0 0 1.447.894l6.886-3.443h16.75a2 2 0 0 0 2-2V12.417Z"
      />
      <g filter="url(#message_icon_svg__b)">
        <path
          fill="#F1F1F1"
          fillOpacity={0.1}
          d="M16.667 18.667a2 2 0 0 1 2-2H41.75a2 2 0 0 1 2 2v21.382a1 1 0 0 1-1.447.894L35.417 37.5h-16.75a2 2 0 0 1-2-2V18.667Z"
        />
        <path
          fill="url(#message_icon_svg__c)"
          fillOpacity={0.2}
          d="M16.667 18.667a2 2 0 0 1 2-2H41.75a2 2 0 0 1 2 2v21.382a1 1 0 0 1-1.447.894L35.417 37.5h-16.75a2 2 0 0 1-2-2V18.667Z"
        />
        <path
          stroke="url(#message_icon_svg__d)"
          strokeOpacity={0.1}
          strokeWidth={0.2}
          d="m35.462 37.41-.022-.01H18.667a1.9 1.9 0 0 1-1.9-1.9V18.667c0-1.05.85-1.9 1.9-1.9H41.75c1.05 0 1.9.85 1.9 1.9v21.382a.9.9 0 0 1-1.302.805l-6.886-3.443Z"
        />
      </g>
      <g filter="url(#message_icon_svg__e)">
        <rect
          width={18.75}
          height={4.167}
          x={20.833}
          y={20.833}
          fill="#fff"
          fillOpacity={0.16}
          rx={1}
        />
      </g>
      <g filter="url(#message_icon_svg__f)">
        <rect
          width={18.75}
          height={4.167}
          x={20.833}
          y={29.167}
          fill="#fff"
          fillOpacity={0.16}
          rx={1}
        />
      </g>
      <defs>
        <linearGradient
          id="message_icon_svg__a"
          x1={32.205}
          x2={2.778}
          y1={15.417}
          y2={19.844}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FE82DB" />
          <stop offset={1} stopColor="#68E4FF" />
        </linearGradient>
        <linearGradient
          id="message_icon_svg__c"
          x1={17.795}
          x2={47.222}
          y1={21.667}
          y2={26.094}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FE82DB" />
          <stop offset={1} stopColor="#68E4FF" />
        </linearGradient>
        <linearGradient
          id="message_icon_svg__d"
          x1={17.513}
          x2={43.75}
          y1={17.803}
          y2={17.803}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FD84DC" />
          <stop offset={1} stopColor="#7FD6FA" />
        </linearGradient>
        <filter
          id="message_icon_svg__b"
          width={39.083}
          height={36.383}
          x={10.667}
          y={10.667}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={3} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_600" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_2_600" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={0.5} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend in2="shape" result="effect2_innerShadow_2_600" />
        </filter>
        <filter
          id="message_icon_svg__e"
          width={18.75}
          height={4.667}
          x={20.833}
          y={20.833}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={0.5} />
          <feGaussianBlur stdDeviation={0.25} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend in2="shape" result="effect1_innerShadow_2_600" />
        </filter>
        <filter
          id="message_icon_svg__f"
          width={18.75}
          height={4.667}
          x={20.833}
          y={29.167}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={0.5} />
          <feGaussianBlur stdDeviation={0.25} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend in2="shape" result="effect1_innerShadow_2_600" />
        </filter>
      </defs>
    </svg>
  );
};
export const SvgMessageIcon = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgMessageIcon;
