import { Product } from '@/types/interfaces';
import React from 'react';
import Currency from '@/components/Currency';
import { Button } from '@/components/Button';
import { ShoppingCart } from 'lucide-react';

interface Props {
  data: Product;
}
export default function Info({ data }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-4">
          <h3 className="text-semibold text-black">Size</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="text-semibold text-black">Color</h3>
          <div>{data?.color?.name}</div>
          <div
            className="rounded-full w-4 h-4 border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2 bg-gray-500">
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
