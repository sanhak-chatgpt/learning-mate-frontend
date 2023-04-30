import React from 'react';
import {
  IconName,
  ViewBoxSize,
  ViewPortSize,
  getIconData,
  setViewBoxSize,
  setViewPortSize,
} from '.';

export type SVGIconProps = {
  iconName: IconName;
  size?: ViewPortSize;
  viewboxsize?: ViewBoxSize;
  color?: string;
  onClick?: (args: unknown) => void;
};

export const SVGIcon = React.memo(function SVGIcon({
  size,
  viewboxsize,
  iconName,
  color,
  onClick,
}: SVGIconProps) {
  const {
    minX,
    minY,
    width: viewBoxWidth,
    height: viewBoxHeight,
  } = React.useMemo(() => setViewBoxSize(viewboxsize, iconName), [viewboxsize, iconName]);
  //viewBoxSize
  const { width: iconWidth, height: iconHeight } = React.useMemo(
    () => setViewPortSize(size),
    [size]
  );
  // path to be drawn
  const icon_data = React.useMemo(() => getIconData(iconName), [iconName]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconWidth}
      height={iconHeight}
      fill="none"
      viewBox={`${minX} ${minY} ${viewBoxWidth} ${viewBoxHeight}`}
      onClick={onClick}>
      <path fill={color} d={icon_data.path} {...icon_data}></path>
    </svg>
  );
});

export default SVGIcon;
