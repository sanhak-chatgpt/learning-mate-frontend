export interface ViewPortObject {
  width: number;
  height: number;
}

// ViewBox
export interface ViewBoxObject {
  minX: number;
  minY: number;
  width: number;
  height: number;
}
export type ViewBoxString = `${number} ${number} ${number} ${number}`;

//size for Icon.tsx props
export type ViewBoxSize = ViewBoxString | ViewBoxObject | undefined;
export type ViewPortSize = ViewPortObject | number | undefined;
