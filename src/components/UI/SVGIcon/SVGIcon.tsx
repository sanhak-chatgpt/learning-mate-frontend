import React, { Suspense } from 'react';
import { IconRegistryKey, SVGIconRegistry } from '@/components/UI/SVGIcon/SVGIcon.registry';
import { ViewBoxSize } from '@/components/UI/SVGIcon/SVGIcon.types';
import styled from '@emotion/styled';

export type SVGIconProps = {
  name: IconRegistryKey;
  width: string | number;
  height: string | number;
  viewBox?: ViewBoxSize;
  fill?: string;
  onClick?: (...args: any) => void;
} & React.HTMLAttributes<SVGSVGElement>;

export const PlaceHolder = styled.div<{ width: string | number; height: string | number }>`
  ${({ width, height }) => {
    let _width: string;
    let _height: string;

    if (typeof width === 'number' && typeof height === 'number') {
      _width = width + 'px';
      _height = height + 'px';
    } else {
      _width = width as string;
      _height = height as string;
    }

    return `
      width:${_width};
      height:${_height};
    `;
  }}
`;

export const SVGIcon = ({ name, width, height, viewBox, fill, ...props }: SVGIconProps) => {
  const Component = React.useMemo(() => React.lazy(SVGIconRegistry[name]), [name]);
  const FallbackPlaceHolder = React.useMemo(() => PlaceHolder, []);

  return (
    <Suspense fallback={<FallbackPlaceHolder width={width} height={height} />}>
      <Component
        width={width}
        height={height}
        title={name}
        {...props}
        fill={fill}
        viewBox={viewBox}
      />
    </Suspense>
  );
};

export default SVGIcon;
