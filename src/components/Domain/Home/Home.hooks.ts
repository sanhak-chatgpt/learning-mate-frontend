import { useMutation, useQuery } from '@tanstack/react-query';
import { JWT_TOKEN_KEY, localStorageManager, USER_NAME_KEY } from '@/util/models/Storage';
import { UserControllerApi } from '@/util/Api';

export const fetchUserName = async () => {
  const api = new UserControllerApi();

  return await api.getuserName();
};

export const registerNewUser = async () => {
  const api = new UserControllerApi();
  return await api.issueToken();
};

export const setUserNameToStorage = (name: string) => {
  localStorageManager.setItem(USER_NAME_KEY, name);
};

export const setTokenToStorage = (token: string) => {
  localStorageManager.setItem(JWT_TOKEN_KEY, token);
};

export const getUserInfoFromStorage = () => {
  return {
    authToken: localStorageManager.getItem(JWT_TOKEN_KEY),
    name: localStorageManager.getItem(USER_NAME_KEY),
  };
};

export const USER_NAME_QUERY_KEY = 'user';

export const useGetUserNameQuery = () => {
  const { data, status } = useQuery({
    queryKey: [USER_NAME_QUERY_KEY],
    queryFn: async () => await fetchUserName(),
  });

  return { data, status };
};

export const CREATE_NEW_USER_QUERY_KEY = 'create_user';

export const useCreateNewUserQuery = () => {
  return useMutation({
    mutationKey: [CREATE_NEW_USER_QUERY_KEY],
    mutationFn: async () => {
      return await registerNewUser();
    },
    onSuccess: () => {},
  });
};
