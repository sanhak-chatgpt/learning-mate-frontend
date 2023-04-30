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
      <circle cx={28.235} cy={21.765} r={13.765} fill="url(#explorer_icon_svg__a)" />
      <g filter="url(#explorer_icon_svg__b)">
        <circle cx={22.941} cy={27.059} r={16.941} fill="#F1F1F1" fillOpacity={0.1} />
        <circle
          cx={22.941}
          cy={27.059}
          r={16.941}
          fill="url(#explorer_icon_svg__c)"
          fillOpacity={0.2}
        />
        <circle
          cx={22.941}
          cy={27.059}
          r={16.841}
          stroke="url(#explorer_icon_svg__d)"
          strokeOpacity={0.1}
          strokeWidth={0.2}
        />
      </g>
      <g filter="url(#explorer_icon_svg__e)">
        <path
          fill="#fff"
          fillOpacity={0.16}
          d="M31.893 17.427c.44-.244.924.24.68.68l-6.082 10.948a4 4 0 0 1-1.554 1.554L13.989 36.69c-.44.244-.924-.24-.68-.68l6.082-10.948a4 4 0 0 1 1.554-1.554l10.948-6.082Z"
        />
      </g>
      <defs>
        <linearGradient
          id="explorer_icon_svg__a"
          x1={15.618}
          x2={45.627}
          y1={13.506}
          y2={17.674}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FE82DB" />
          <stop offset={1} stopColor="#68E4FF" />
        </linearGradient>
        <linearGradient
          id="explorer_icon_svg__c"
          x1={7.412}
          x2={44.346}
          y1={16.894}
          y2={22.024}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FE82DB" />
          <stop offset={1} stopColor="#68E4FF" />
        </linearGradient>
        <linearGradient
          id="explorer_icon_svg__d"
          x1={7.059}
          x2={39.882}
          y1={11.658}
          y2={11.658}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FD84DC" />
          <stop offset={1} stopColor="#7FD6FA" />
        </linearGradient>
        <filter
          id="explorer_icon_svg__b"
          width={45.882}
          height={45.882}
          x={0}
          y={4.118}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={3} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_630" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_2_630" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={0.5} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend in2="shape" result="effect2_innerShadow_2_630" />
        </filter>
        <filter
          id="explorer_icon_svg__e"
          width={19.395}
          height={19.895}
          x={13.244}
          y={17.361}
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
          <feBlend in2="shape" result="effect1_innerShadow_2_630" />
        </filter>
      </defs>
    </svg>
  );
};
export const SvgExplorerIcon = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgExplorerIcon;
