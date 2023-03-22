import { BaseError } from '@/util';
import React, { SetStateAction } from 'react';

export type ErrorState<TError extends BaseError> = {
  error: TError | undefined;
  hasError: boolean;
};

export type UseErrorBoundaryApi<TError extends BaseError = BaseError> = {
  showBoundary: (error: TError) => void;
};

export const useUncaughtErrorHandler = <
  TError extends BaseError
>(): UseErrorBoundaryApi<TError> => {
  const [errorState, setErrorState] = React.useState<ErrorState<TError>>({
    error: undefined,
    hasError: false,
  });

  const memoized = React.useMemo(
    () => ({
      showBoundary: (error: TError) =>
        setErrorState({
          error,
          hasError: true,
        }),
    }),
    []
  );

  if (errorState.hasError) throw errorState.error;

  return memoized;
};
