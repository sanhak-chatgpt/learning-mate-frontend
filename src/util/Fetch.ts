import { BaseError } from '.';

export const request = <TResponse>(
  url: string,
  request_config: RequestInit = {}
): Promise<TResponse> => {
  return fetch(url, request_config)
    .then((res) => res.json())
    .catch((error: Error) => {
      const { message } = error;
      throw new BaseError(message);
    });
};
