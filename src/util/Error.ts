export type ERROR_CODE_RECORD_TYPE = Record<number, string>;

export const ERROR_CODE_MAPPER: ERROR_CODE_RECORD_TYPE = {
  1000: 'success',
};

const DEFAULT_ERROR_MESSAGE = '핸들링되지 않은 오류가 발생했습니다.';

export class BaseError<T = unknown> extends Error {
  payload?: T;

  constructor(message: string, payload?: T) {
    if (message?.length === 0) {
      super(DEFAULT_ERROR_MESSAGE);
    } else super(message);

    this.payload = payload;
  }
}
