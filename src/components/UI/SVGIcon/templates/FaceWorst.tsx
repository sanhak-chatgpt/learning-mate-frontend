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
        d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM8 16c-.014 0-.14-.005-1-.005H6v-.066c0-.033 0-.078.007-.133a4.7 4.7 0 0 1 .472-1.743 3.6 3.6 0 0 1 1.23-1.414l.014-.009.016-.012.015-.008h.025l.011-.007A4.118 4.118 0 0 1 10 12a4.06 4.06 0 0 1 2.29.635c.527.355.951.843 1.23 1.414.204.414.346.856.419 1.311.032.188.046.339.052.432 0 .044.006.088.007.133v.062h-2v-.059c0-.055-.013-.14-.031-.246a2.698 2.698 0 0 0-.236-.747 1.638 1.638 0 0 0-.551-.645A2.11 2.11 0 0 0 10 14a2.11 2.11 0 0 0-1.18.3 1.648 1.648 0 0 0-.551.645 2.716 2.716 0 0 0-.266.993v.058H8V16Zm-1.5-6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm6.993-.014a1.493 1.493 0 1 1 0-2.986 1.493 1.493 0 0 1 0 2.986Z"
      />
    </svg>
  );
};
export const SvgFaceWorst = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgFaceWorst;
