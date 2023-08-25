'use client';

import { usePreviewModal } from '@/hooks/use-preview-modal';
import React from 'react';
import { Modal } from './Modal';
import Gallery from './Gallery';
import Info from './Gallery/Info';

export default function PreView() {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) return null;

  return (
    <Modal open={previewModal.isOpen} handleClose={previewModal.handleClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:clos-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
}
