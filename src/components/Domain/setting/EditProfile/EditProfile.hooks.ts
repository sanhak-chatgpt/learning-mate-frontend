import { useHeader } from '@/components/App/AppHeader/HeaderContent';
import { useModalContext } from '@/components/UI/Modal/Modal.hooks';
import { UserControllerApi } from '@/util/Api';
import { BaseError } from '@/util/models/Error';
import { FormEventHandler, useEffect, useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { USER_INFO_QUERY_KEY } from '@/components/Domain/Home/Home.hooks';
import { localStorageManager, USER_NAME_KEY } from '@/util/models/Storage';

export const useEditProfile = () => {
  const { setHeaderContent } = useHeader();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const { openModal } = useModalContext();
  const { mutateAsync: mutateUserName, data, status } = useMutateUsernameQuery();

  useEffect(() => {
    setHeaderContent({
      title: '프로필 수정',
      description: '타인에게 보여질 내 프로필 정보를 수정해 보세요!',
      backward: {
        visible: true,
        historyStack: [],
      },
    });
  }, []);

  useEffect(() => {
    if (status === 'error') {
      openModal({
        type: 'Basic',
        props: {
          title: '닉네임 변경 도중 오류가 발생했습니다',
          description: '다시 시도해주세요.',
        },
        events: {
          onClose: () => {
            if (!!nameInputRef.current) {
              nameInputRef.current.value = '';
            }
          },
        },
      });
    }

    if (status === 'success') {
      openModal({
        type: 'Basic',
        props: {
          title: '닉네임 변경 성공!',
        },
        events: {
          onClose: () => {
            if (!!nameInputRef.current) {
              nameInputRef.current.value = '';
            }
          },
        },
      });
    }
  }, [status]);

  const handleNameSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const api = new UserControllerApi();
    if (!!nameInputRef.current) {
      await mutateUserName(nameInputRef.current.value);
    } else {
      openModal({
        type: 'Basic',
        props: {
          title: '공백을 닉네임으로 지정할 수 없습니다.',
        },
        events: {
          onClose: () => {
            if (!!nameInputRef.current) {
              nameInputRef.current.value = '';
            }
          },
        },
      });
    }
  };

  return {
    nameInputRef,
    handleNameSubmit,
  };
};

export const NAME_MUTATE_QUERY_KEY = 'name';
export const useMutateUsernameQuery = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, data, status } = useMutation({
    mutationKey: [NAME_MUTATE_QUERY_KEY],
    mutationFn: async (name?: string) => {
      if (!!name) {
        return await changeUsername(name);
      } else {
        throw new BaseError('유효하지 않은 이름입니다.');
      }
    },
    onSuccess: async (data) => {
      localStorageManager.removeItem(USER_NAME_KEY);
      // localStorageManager.setItem(USER_NAME_KEY, data.name);
      // 유저 정보 재조회 해야함
    },
  });

  return { mutateAsync, data, status };
};

export const changeUsername = async (name: string) => {
  const api = new UserControllerApi();
  if (!!name) {
    const res = await api.updateUserNickname({
      userDtoNickName: { name },
    });
    return res;
  } else {
    throw new BaseError('유효하지 않거나 중복된 닉네임 입니다.');
  }
};
