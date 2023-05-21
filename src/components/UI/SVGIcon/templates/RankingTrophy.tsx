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
        fill="#1C1C1C"
        fillRule="evenodd"
        d="M4.633 2.586c0-.71.576-1.286 1.286-1.286h12.162c.706 0 1.286.57 1.286 1.284V3.522h.41A2.922 2.922 0 0 1 22.7 6.444v1.453a2.922 2.922 0 0 1-1.664 2.637l-2.068.987a.699.699 0 0 1-.2.06 7.372 7.372 0 0 1-6.068 4.42v1.966h1.893c.632 0 1.247.205 1.753.584l1.185.889c1.393 1.044.654 3.26-1.086 3.26h-8.89c-1.74 0-2.478-2.216-1.086-3.26l1.185-.889a2.922 2.922 0 0 1 1.753-.584H11.3V16a7.372 7.372 0 0 1-6.067-4.42.7.7 0 0 1-.201-.06l-2.068-.987A2.922 2.922 0 0 1 1.3 7.897V6.444a2.922 2.922 0 0 1 2.922-2.922h.411v-.936Zm13.334 6.08a5.966 5.966 0 0 1-5.965 5.967H12a5.967 5.967 0 0 1-5.967-5.966V2.7h11.934V8.667Zm1.31 1.156 1.156-.551c.53-.253.867-.788.867-1.374V6.444c0-.84-.681-1.522-1.522-1.522h-.411V8.667c0 .393-.031.779-.09 1.155ZM4.633 8.667c0 .393.031.779.09 1.155l-1.156-.551A1.522 1.522 0 0 1 2.7 7.897V6.444c0-.84.682-1.522 1.522-1.522h.411v3.745ZM8.494 19.67c.264-.197.584-.304.913-.304h5.186c.329 0 .65.107.913.304l1.185.889a.411.411 0 0 1-.246.74h-8.89a.411.411 0 0 1-.246-.74l1.185-.889Z"
        clipRule="evenodd"
      />
      <path
        fill="#1C1C1C"
        d="M11.842 6.201a.2.2 0 0 1 .316 0l.56.717a.2.2 0 0 0 .09.064l.854.312a.2.2 0 0 1 .097.3l-.508.755a.2.2 0 0 0-.034.104l-.032.91a.2.2 0 0 1-.255.185l-.875-.25a.2.2 0 0 0-.11 0l-.875.25a.2.2 0 0 1-.255-.185l-.032-.91a.2.2 0 0 0-.034-.104l-.508-.755a.2.2 0 0 1 .097-.3l.855-.312a.2.2 0 0 0 .089-.064l.56-.717Z"
      />
    </svg>
  );
};
export const SvgRankingTrophy = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgRankingTrophy;
