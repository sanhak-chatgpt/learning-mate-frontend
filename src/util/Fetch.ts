import { BaseError } from '.';

export const request = async (url: string, request_config: RequestInit = {}): Promise<Response> => {
  try {
    return await fetch(url, request_config);
  } catch (error) {
    const { message } = error as Error;
    throw new BaseError(message);
  }
};
