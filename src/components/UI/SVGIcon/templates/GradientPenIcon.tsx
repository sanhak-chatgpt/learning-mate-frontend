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
      <g clipPath="url(#gradient_pen_icon_svg__a)">
        <path
          fill="url(#gradient_pen_icon_svg__b)"
          d="M21.35 85.45a8 8 0 0 1 6.4-3.2h100.5a8 8 0 0 1 6.4 3.2l11.25 15c3.955 5.274.192 12.8-6.4 12.8h-123c-6.592 0-10.355-7.526-6.4-12.8l11.25-15Z"
        />
        <path
          fill="url(#gradient_pen_icon_svg__c)"
          d="M107.218 6.532a8 8 0 0 1 11.314 0l11.936 11.936a8 8 0 0 1 0 11.314l-15.811 15.811a8 8 0 0 1-11.314 0L91.407 33.657a8 8 0 0 1 0-11.314l15.811-15.811Z"
        />
        <g filter="url(#gradient_pen_icon_svg__d)">
          <path
            fill="#F1F1F1"
            fillOpacity={0.1}
            d="m95.593 10.407-54 54a8 8 0 0 0-2.343 5.657V89.75a8 8 0 0 0 8 8h19.686a8 8 0 0 0 5.657-2.343l54-54a8 8 0 0 0 0-11.314l-19.686-19.686a8 8 0 0 0-11.314 0Z"
          />
          <path
            fill="url(#gradient_pen_icon_svg__e)"
            fillOpacity={0.2}
            d="m95.593 10.407-54 54a8 8 0 0 0-2.343 5.657V89.75a8 8 0 0 0 8 8h19.686a8 8 0 0 0 5.657-2.343l54-54a8 8 0 0 0 0-11.314l-19.686-19.686a8 8 0 0 0-11.314 0Z"
          />
          <path
            stroke="url(#gradient_pen_icon_svg__f)"
            strokeOpacity={0.1}
            strokeWidth={0.2}
            d="m41.664 64.478 54-54a7.9 7.9 0 0 1 11.172 0l19.686 19.686a7.898 7.898 0 0 1 0 11.172l-54 54a7.9 7.9 0 0 1-5.586 2.314H47.25a7.9 7.9 0 0 1-7.9-7.9V70.064a7.9 7.9 0 0 1 2.314-5.586Z"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="gradient_pen_icon_svg__b"
          x1={6.958}
          x2={123.148}
          y1={88.45}
          y2={169.137}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FE82DB" />
          <stop offset={1} stopColor="#68E4FF" />
        </linearGradient>
        <linearGradient
          id="gradient_pen_icon_svg__c"
          x1={108.419}
          x2={130.859}
          y1={7.269}
          y2={35.773}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FE82DB" />
          <stop offset={1} stopColor="#68E4FF" />
        </linearGradient>
        <linearGradient
          id="gradient_pen_icon_svg__e"
          x1={43.125}
          x2={144.503}
          y1={23.35}
          y2={37.43}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FE82DB" />
          <stop offset={1} stopColor="#68E4FF" />
        </linearGradient>
        <linearGradient
          id="gradient_pen_icon_svg__f"
          x1={42.156}
          x2={132.25}
          y1={8.977}
          y2={8.977}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FD84DC" />
          <stop offset={1} stopColor="#7FD6FA" />
        </linearGradient>
        <clipPath id="gradient_pen_icon_svg__a">
          <path fill="#fff" d="M.5.875h155V114H.5z" />
        </clipPath>
        <filter
          id="gradient_pen_icon_svg__d"
          width={119.686}
          height={119.686}
          x={24.25}
          y={-6.936}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={7.5} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_797" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_2_797" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={0.5} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend in2="shape" result="effect2_innerShadow_2_797" />
        </filter>
      </defs>
    </svg>
  );
};
export const SvgGradientPenIcon = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgGradientPenIcon;
