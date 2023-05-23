import { useNavigation } from '@/util/hooks/useNavigation';
import { BackwardContainer } from '@/components/App/AppHeader/HeaderContent';
import { SVGIcon } from '@/components/UI/SVGIcon';
import React from 'react';
import { HistoryStackElement } from '@/states/state.header';

export type HeaderBackwardProps = {
  visible: boolean;
  historyStack: HistoryStackElement[];
} & React.HTMLAttributes<HTMLDivElement>;

export const HeaderBackward = ({ visible, historyStack }: HeaderBackwardProps) => {
  const { navigateTo, router } = useNavigation();

  const handlePrevPage = async () => {
    if (historyStack.length > 0) {
      const topElement: HistoryStackElement = historyStack.slice(-1).pop()!;
      await navigateTo({
        path: topElement?.prev.path,
        query: topElement.prev.query,
      });
    } else {
      await router.back();
    }
  };

  return (
    <BackwardContainer flex={'rowStart'} visible={visible}>
      <SVGIcon
        name={'HeaderBackArrow'}
        onClick={handlePrevPage}
        width={10}
        height={16}
        viewBox={'0 0 10 16'}
      />
    </BackwardContainer>
  );
};
