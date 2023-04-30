import {
  createModalContext,
  ModalContext,
  ModalContextType,
} from '@/components/UI/Modal/Modal.Context';
import React, { useContext } from 'react';
import { ModalRegistry } from '@/components/UI/Modal/Modal.types';

export const useModalContext = <R extends ModalRegistry>() => {
  const context = useContext(ModalContext as React.Context<ModalContextType<R>>);
  return context;
};
