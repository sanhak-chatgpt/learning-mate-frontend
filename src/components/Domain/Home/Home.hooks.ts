import { useQuery } from '@tanstack/react-query';
import { JWT_TOKEN_KEY, localStorageManager, USER_NAME_KEY } from '@/util/models/Storage';
import { UserControllerApi, UserDtoMe } from '@/util/Api';

export const getUserInfo = async () => {
  if (!localStorageManager.getItem(JWT_TOKEN_KEY)) {
    console.log('실핻애');
    const api = new UserControllerApi();
    const res = await api.issueToken();

    localStorageManager.setItem(JWT_TOKEN_KEY, res.authToken);
    localStorageManager.setItem(USER_NAME_KEY, res.name);
    return res;
  }
  return {
    authToken: localStorageManager.getItem(JWT_TOKEN_KEY),
    name: localStorageManager.getItem(USER_NAME_KEY),
  } as UserDtoMe;
};

export const USER_INFO_QUERY_KEY = 'user';

export const useGetUserInfoQuery = () => {
  const { data, status } = useQuery({
    queryKey: [USER_INFO_QUERY_KEY],
    queryFn: async () => await getUserInfo(),
  });

  return { data, status };
};
