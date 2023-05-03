export const SVGIconRegistry = {
  ExplorerIcon: () => import('./templates/ExplorerIcon'),
  GradientCircleIcon: () => import('./templates/GradientCircleIcon'),
  GradientPenIcon: () => import('./templates/GradientPenIcon'),
  MessageIcon: () => import('./templates/MessageIcon'),
  MicrophoneIcon: () => import('./templates/MicrophoneIcon'),
  NavHomeIcon: () => import('./templates/NavHomeIcon'),
  NavSettingIcon: () => import('./templates/NavSettingIcon'),
  PauseIcon: () => import('./templates/PauseIcon'),
  RecordIcon: () => import('./templates/RecordIcon'),
  HeaderBackArrow: () => import('./templates/HeaderBackArrow'),
};

export type IconRegistryKey = keyof typeof SVGIconRegistry;
