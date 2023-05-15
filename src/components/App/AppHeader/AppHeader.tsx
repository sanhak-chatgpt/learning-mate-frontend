import * as S from './AppHeader.styles';
import { HeaderContent } from '@/components/App/AppHeader/HeaderContent';

export const AppHeader = () => {
  return (
    <S.RootContainer className={'AppHeader'}>
      <HeaderContent />
    </S.RootContainer>
  );
};
