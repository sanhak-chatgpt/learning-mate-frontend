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
      <circle cx={32.5} cy={31.5} r={13.5} fill="#E74D4D" />
      <circle cx={32.5} cy={31.5} r={16.5} stroke="#E74D4D" strokeWidth={2} />
    </svg>
  );
};
export const SvgRecordIcon = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgRecordIcon;
