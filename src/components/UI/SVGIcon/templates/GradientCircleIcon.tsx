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
      <circle cx={43.5} cy={43.5} r={43.5} fill="url(#gradient_circle_icon_svg__a)" />
      <defs>
        <linearGradient
          id="gradient_circle_icon_svg__a"
          x1={3.625}
          x2={98.462}
          y1={17.4}
          y2={30.572}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FE82DB" />
          <stop offset={1} stopColor="#68E4FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const SvgGradientCircleIcon = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgGradientCircleIcon;
