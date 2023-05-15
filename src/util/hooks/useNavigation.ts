import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { BaseError } from '@/util';

export type SuccessCallback<T, R> = (arg?: T) => R;

export const useNavigation = () => {
  const router = useRouter();

  const navigateTo = useCallback(
    async <TArgs = unknown, TValue = unknown>(config: {
      path?: string;
      query?: Record<string, string>;
      successCallback?: SuccessCallback<TArgs, TValue>;
      args?: TArgs;
    }) => {
      try {
        const isSuccess = await router.push({
          pathname: config.path ?? getCurrentPath(),
          query: config.query,
        });
        if (!!config.successCallback && isSuccess) {
          config.successCallback(config.args);
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

  const replaceQueryString = async (query: Record<string, string>) => {
    await navigateTo({ path: getCurrentPath(), query });
  };

  const getCurrentPath = () => {
    return router.pathname;
  };

  const getCurrentQuery = () => {
    return router.query;
  };

  return {
    router,
    navigateTo,
    getCurrentPath,
    getCurrentQuery,
    replaceQueryString,
  };
};
