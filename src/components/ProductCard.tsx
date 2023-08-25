'use client';

import { Product } from '@/types/interfaces';
import React, { MouseEventHandler } from 'react';
import Image from 'next/image';
import IconButton from '@/components/IconButton';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from '@/components/Currency';
import { useRouter } from 'next/navigation';
import { usePreviewModal } from '@/hooks/use-preview-modal';
import { useCart } from '@/hooks/use-cart';

interface Props {
  data: Product;
}
export default function ProductCard({ data }: Props) {
  const router = useRouter();
  const preview = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/products/${data?.id}`);
  };

  const handlePreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    preview.handleOpen(data);
  };

  const handleAddCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={handleClick}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="image"
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              handleClick={handlePreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              handleClick={handleAddCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}
