import * as S from './BasicModal.styles';
import { DefaultModalProps } from '@/components/UI/Modal/Modal.types';

export type BasicModalProps = {
  title: string;
} & DefaultModalProps;

export const BasicModal = ({ visible, close, title = '테스트' }: BasicModalProps) => {
  return (
    <S.Root>
      <S.Container flex={'rowCenter'} visible={visible}>
        <S.Wrapper flex={'columnStart'}>
          <header>안녕하세요 모달입니다.</header>
          <main>나는 모달 바디</main>
          <footer>나는 모달 푸터임 ㅋㅋ</footer>
        </S.Wrapper>
      </S.Container>
    </S.Root>
  );
};

export default BasicModal;
