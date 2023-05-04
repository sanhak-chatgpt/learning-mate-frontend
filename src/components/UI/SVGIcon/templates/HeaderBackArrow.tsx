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
        stroke="#0B0B0B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8.75 14.75-7.5-6.924L8.375 1.25"
      />
    </svg>
  );
};
export const SvgHeaderBackArrow = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgHeaderBackArrow;
