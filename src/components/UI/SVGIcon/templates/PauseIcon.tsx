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
      <circle cx={32} cy={32} r={32} fill="#F6F7FB" />
      <rect width={5} height={20} x={25} y={22} fill="#76808B" rx={2.5} />
      <rect width={5} height={20} x={34} y={22} fill="#76808B" rx={2.5} />
    </svg>
  );
};
export const SvgPauseIcon = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgPauseIcon;
