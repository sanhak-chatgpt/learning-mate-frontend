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
        fill="#B1B5C4"
        d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 14a4.837 4.837 0 0 1-4-2 6.3 6.3 0 0 1-1-2h10v.008A6.422 6.422 0 0 1 14 14a4.838 4.838 0 0 1-4 2Zm-3.5-6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm6.993-.014a1.493 1.493 0 1 1 0-2.986 1.493 1.493 0 0 1 0 2.986Z"
      />
    </svg>
  );
};
export const SvgFaceBest = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgFaceBest;
