import React, { Suspense, SVGProps } from 'react';
import { IconRegistryKey, SVGIconRegistry } from '@/components/UI/SVGIcon/SVGIcon.registry';

export type SVGIconProps = {
  name: IconRegistryKey;
  width: string | number;
  height: string | number;
  fill?: string;
  onClick?: (...args: any) => void;
};

const RenderLoader = () => <p>Loading</p>;

export const SVGIcon = ({ name, width, height, fill, ...props }: SVGIconProps) => {
  const Component = React.useMemo(() => React.lazy(SVGIconRegistry[name]), []);
  console.log(name, fill);
  return (
    <Suspense fallback={<RenderLoader />}>
      <Component width={width} height={height} title={name} {...props} fill={fill} />
    </Suspense>
  );
};

export default SVGIcon;
