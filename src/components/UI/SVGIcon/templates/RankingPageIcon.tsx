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
        stroke="url(#ranking_page_icon_svg__a)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M102.705 124.847c21.498 0 38.925-17.428 38.925-38.925 0-21.498-17.427-38.925-38.925-38.925-21.498 0-38.925 17.427-38.925 38.925 0 21.497 17.427 38.925 38.925 38.925Z"
      />
      <path
        stroke="url(#ranking_page_icon_svg__b)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M202.692 19.359v166.667c0 2.188-.431 4.356-1.268 6.378a16.689 16.689 0 0 1-3.613 5.407 16.689 16.689 0 0 1-5.407 3.613 16.679 16.679 0 0 1-6.378 1.268h-20.084v-18.208a59.604 59.604 0 0 0-17.461-42.164 59.627 59.627 0 0 0-42.164-17.461h-7.25a59.619 59.619 0 0 0-55.088 36.806 59.622 59.622 0 0 0-4.537 22.819v18.208H19.36a16.669 16.669 0 0 1-16.667-16.666V19.359A16.667 16.667 0 0 1 19.36 2.692h166.667a16.668 16.668 0 0 1 16.666 16.667Z"
      />
      <defs>
        <linearGradient
          id="ranking_page_icon_svg__a"
          x1={67.024}
          x2={151.887}
          y1={62.567}
          y2={74.353}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FE82DB" />
          <stop offset={1} stopColor="#68E4FF" />
        </linearGradient>
        <linearGradient
          id="ranking_page_icon_svg__b"
          x1={11.026}
          x2={229.042}
          y1={42.692}
          y2={72.972}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FE82DB" />
          <stop offset={1} stopColor="#68E4FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const SvgRankingPageIcon = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgRankingPageIcon;
