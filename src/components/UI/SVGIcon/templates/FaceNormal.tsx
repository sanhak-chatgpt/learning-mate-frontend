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
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm0-18a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm-3.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm6.993-.014a1.493 1.493 0 1 1 0-2.986 1.493 1.493 0 0 1 0 2.986Z"
      />
      <path fill="#B1B5C4" d="M16 15H8v2h8v-2Z" />
    </svg>
  );
};
export const SvgFaceNormal = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgFaceNormal;
