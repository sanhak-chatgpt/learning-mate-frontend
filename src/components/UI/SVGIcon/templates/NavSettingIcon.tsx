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
        fill="#E2E4E9"
        d="M20.225 13.547V10.46l1.37-1.73a1.847 1.847 0 0 0 .156-2.075l-.75-1.3a1.844 1.844 0 0 0-1.872-.903l-2.187.332-2.675-1.543-.798-2.068A1.843 1.843 0 0 0 11.757 0h-1.504a1.84 1.84 0 0 0-1.712 1.173L7.734 3.23 5.06 4.774l-2.19-.326a1.84 1.84 0 0 0-1.872.904l-.75 1.3a1.847 1.847 0 0 0 .156 2.074l1.379 1.734v3.087L.403 15.28a1.846 1.846 0 0 0-.156 2.075l.75 1.3a1.844 1.844 0 0 0 1.872.904l2.187-.333L7.73 20.77l.806 2.058A1.843 1.843 0 0 0 10.25 24h1.5a1.84 1.84 0 0 0 1.713-1.173l.806-2.058 2.675-1.543 2.187.333a1.84 1.84 0 0 0 1.872-.904l.75-1.3a1.847 1.847 0 0 0-.156-2.075l-1.372-1.733Zm-9.222 2.315a3.849 3.849 0 0 1-3.56-2.382 3.863 3.863 0 0 1 .836-4.205 3.852 3.852 0 0 1 6.578 2.728 3.86 3.86 0 0 1-1.129 2.729 3.85 3.85 0 0 1-2.725 1.13Z"
      />
    </svg>
  );
};
export const SvgNavSettingIcon = styled(Base)`
  & path {
    fill: ${({ fill }) => fill};
  }
`;
export default SvgNavSettingIcon;
