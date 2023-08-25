import { create } from 'zustand';

import { Product } from '@/types/interfaces';

interface PreviewModalState {
  isOpen: boolean;
  data?: Product;
  handleOpen: (data: Product) => void;
  handleClose: () => void;
}

export const usePreviewModal = create<PreviewModalState>((set) => ({
  isOpen: false,
  data: undefined,
  handleOpen: (data) => set(() => ({ isOpen: true, data })),
  handleClose: () => set(() => ({ isOpen: false, data: undefined })),
}));
