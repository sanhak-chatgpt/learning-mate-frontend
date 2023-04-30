import { ViewPortObject, ViewBoxObject, ViewBoxString } from '.';
import { ICON_SET, IconName, ViewPortSize, ViewBoxSize, IconData } from '.';

const DEFAULT_VIEW_PORT_SIZE: ViewPortObject = { width: 100, height: 100 };
const DEFAULT_VIEW_BOX_SIZE: ViewBoxObject = { minX: 0, minY: 0, width: 24, height: 24 };
const DEFAULT_ICON_COLOR = 'black';

// IconSize(ViewPort Size)를 결정해주는 함수, 사용자가 단일 number로 사이즈를 입력할 수 있도록 타입체킹
export const setViewPortSize = (size: ViewPortSize): ViewPortObject => {
  if (typeof size === 'number') {
    return { width: size, height: size };
  }
  return size || DEFAULT_VIEW_PORT_SIZE;
};

// ViewBox Size를 결정해주는 함수, icon 자체의 ViewBoxSize가 아닌 임의의 Size를 입력할 수 있도록 타입체킹
// 임의의 size 값을 전달받은경우 최우선으로 적용하도록 작성 외에는 iconName에 따른 사이즈 값 반환
export const setViewBoxSize = (size: ViewBoxSize, iconName: IconName): ViewBoxObject => {
  const IconViewBoxSize = ICON_SET[iconName].viewBoxSize;

  //undefined
  if (!IconViewBoxSize) {
    return DEFAULT_VIEW_BOX_SIZE;
  }

  //ViewBoxString
  if (typeof IconViewBoxSize === 'string') {
    const parsed = IconViewBoxSize.split(' ').map((val) => Number(val));
    return { minX: parsed[0], minY: parsed[1], width: parsed[2], height: parsed[3] };
  }

  //ViewBoxObject
  return IconViewBoxSize;
};

export const getIconData = (iconName: IconName): IconData => {
  const icon_data = ICON_SET[iconName];
  console.log(icon_data);
  return icon_data;
};
