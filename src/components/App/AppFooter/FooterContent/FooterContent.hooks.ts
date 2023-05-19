import { useNavigation } from '@/util/hooks/useNavigation';
import { NavItemPath } from './FooterContent';
import { useTheme } from '@emotion/react';

export const useNavIcon = (directionPath: NavItemPath) => {
  const { getCurrentPath, navigateTo } = useNavigation();
  const theme = useTheme();

  const evaluatedIconColor =
    getCurrentPath() === directionPath ? theme.color.nav.active : theme.color.nav.disabled;

  const handleNavigation = () => {
    navigateTo({ path: directionPath });
  };

  return {
    evaluatedIconColor,
    handleNavigation,
  };
};
