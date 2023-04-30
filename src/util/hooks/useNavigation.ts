import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { BaseError } from '@/util';

export type SuccessCallback<T, R> = (arg: T) => R;

export const useNavigation = () => {
  const router = useRouter();

  const navigateTo = useCallback(
    async <TArgs = unknown, TValue = unknown>(
      path: string,
      successCallback?: SuccessCallback<TArgs, TValue>,
      args?: TArgs
    ) => {
      try {
        const isSuccess = await router.push(path);
        if (!!successCallback && !!args) {
          if (isSuccess) successCallback(args);
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          const error = new BaseError(e.message);
          console.log(error.message);
        }
      }
    },
    []
  );

  const getCurrentPath = () => {
    return router.pathname;
  };

  return {
    router,
    navigateTo,
    getCurrentPath,
  };
};
