import { atom } from 'recoil';

export const USER_KEY = 'user';
export const DEFAULT_USER_NAME = '홍길동';

export type UserState = {
  name: string;
};
export const userState = atom<UserState>({
  key: USER_KEY,
  default: {
    name: DEFAULT_USER_NAME,
  },
});
