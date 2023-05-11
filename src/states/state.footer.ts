import { atom } from 'recoil';

export const ATOM_FOOTER_KEY = 'footer';

export interface FooterConfiguration {
  isVisible: boolean;
}

export const footerConfigurationState = atom<FooterConfiguration>({
  key: ATOM_FOOTER_KEY,
  default: {
    isVisible: true,
  },
});
