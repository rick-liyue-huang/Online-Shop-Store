'use client';

import { Color, Size } from '@/types/interfaces';
import React from 'react';
import { Button } from '@/components/Button';
import { Plus, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import IconButton from './IconButton';
import Filter from '@/components/Filter';

interface Props {
  colors: Color[];
  sizes: Size[];
}

export default function MobileFilter({ sizes, colors }: Props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        className="flex items-center gap-x-2 lg:hidden"
        onClick={handleOpen}
      >
        Filters <Plus />
      </Button>
      <Dialog
        open={open}
        as="div"
        className={'relative z-30 lg:hidden'}
        onClose={handleClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-30 flex">
          <Dialog.Panel
            className={
              'relative ml-auto flex h-full w-full max-w-xs flex-col overflow-auto bg-white py-4 pb-6 shadow-xl'
            }
          >
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} handleClick={handleClose} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="sizes" data={sizes} />
              <Filter valueKey="colorId" name="colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
