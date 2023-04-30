export const ModalRegistry = {
  Basic: () => import('./Impls/BasicModal'),
  PreparingService: () => import('./Impls/PreparingServiceModal'),
};
