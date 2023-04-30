import React, { Suspense, SVGProps } from 'react';
import { IconRegistryKey, SVGIconRegistry } from '@/components/UI/SVGIcon/SVGIcon.registry';
import { ViewBoxSize } from '@/components/UI/SVGIcon/SVGIcon.types';

export type SVGIconProps = {
  name: IconRegistryKey;
  width: string | number;
  height: string | number;
  viewBox?: ViewBoxSize;
  fill?: string;
  onClick?: (...args: any) => void;
};

const RenderLoader = () => <div></div>;

export const SVGIcon = ({ name, width, height, viewBox, fill, ...props }: SVGIconProps) => {
  const Component = React.useMemo(() => React.lazy(SVGIconRegistry[name]), []);
  console.log(name, fill);
  return (
    <Suspense fallback={<RenderLoader />}>
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
