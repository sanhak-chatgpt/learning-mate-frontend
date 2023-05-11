import { atom } from 'recoil';
import React from 'react';

export const DEFAULT_TITLE = 'UNINITIALIZED TITLE';
export const DEFAULT_DESCRIPTION = 'UNINITIALIZED DESCRIPTION';
export const ATOM_HEADER_KEY = 'header';

export interface ENDPOINT {
  path: string;
  query: Record<string, string>;
}
export interface HistoryStackElement {
  prev: ENDPOINT;
  current: ENDPOINT;
  next?: ENDPOINT;
}

export interface HeaderContent<T = unknown> {
  title: React.ComponentType<T> | string;
  description: React.ComponentType<T> | string;
  backward: {
    visible: boolean;
    historyStack: HistoryStackElement[];
  };
}

export const headerContentState = atom<HeaderContent>({
  key: ATOM_HEADER_KEY,
  default: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    backward: {
      visible: false,
      historyStack: [],
    },
  },
});
