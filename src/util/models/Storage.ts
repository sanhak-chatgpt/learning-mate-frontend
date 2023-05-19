import { BaseError } from '@/util/models/Error';

export type StorageKey = `storage_${string}`;
export type StorageValue = string;

export const JWT_TOKEN_KEY: StorageKey = 'storage_jwt';
export const USER_NAME_KEY: StorageKey = 'storage_user_name';
export const localStorageManager = (function () {
  // Set a value in localStorage
  const setItem = (key: StorageKey, value: StorageValue) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      throw new BaseError('Error saving to localStorage' + (e as Error));
    }
  };

  // Get a value from localStorage
  const getItem = (key: StorageKey): StorageValue | null => {
    try {
      if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
      }
      return null;
    } catch (e) {
      throw new BaseError('Error getting data from localStorage' + (e as Error));
    }
  };

  // Remove an item from localStorage
  const removeItem = (key: StorageKey) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
      }
    } catch (e) {
      throw new BaseError('Error removing data from localStorage' + (e as Error));
    }
  };

  // Clear all items from localStorage
  const clear = () => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.clear();
      }
    } catch (e) {
      throw new BaseError('Error clearing localStorage' + (e as Error));
    }
  };

  return {
    setItem,
    getItem,
    removeItem,
    clear,
  };
})();
