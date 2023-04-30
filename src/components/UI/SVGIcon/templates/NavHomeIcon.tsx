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
        fill="#54A6F1"
        d="M3.07 24h3.348c.815 0 1.595-.322 2.17-.893.576-.571.9-1.346.9-2.153V17.63c0-.89.48-1.713 1.256-2.159a2.528 2.528 0 0 1 2.512 0 2.49 2.49 0 0 1 1.256 2.16v3.323c0 .807.324 1.582.9 2.153a3.085 3.085 0 0 0 2.17.893h3.348c.814 0 1.594-.322 2.17-.893.575-.571.9-1.346.9-2.153v-10.59a4.118 4.118 0 0 0-1.572-3.243L14.614.917a4.182 4.182 0 0 0-5.23 0L1.571 7.121A4.122 4.122 0 0 0 0 10.365v10.589c0 .807.325 1.582.9 2.153A3.085 3.085 0 0 0 3.07 24Z"
      />
    </svg>
  );
};
export const SvgNavHomeIcon = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgNavHomeIcon;
