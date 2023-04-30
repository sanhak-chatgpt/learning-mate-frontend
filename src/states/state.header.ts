import { atom } from 'recoil';
import React from 'react';
import { useRouter } from 'next/router';

export const DEFAULT_TITLE = 'DEFAULT TITLE';
export const DEFAULT_DESCRIPTION = 'DEFAULT DESCRIPTION';
export const ATOM_HEADER_KEY = 'header';
export type HeaderState = 'main' | '404' | 'other';
export interface HeaderContent<T = unknown> {
  title: React.ComponentType<T> | string;
  description: React.ComponentType<T> | string;
  state: HeaderState;
}

export const headerContentState = atom<HeaderContent>({
  key: ATOM_HEADER_KEY,
  default: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    state: 'main',
  },
});
