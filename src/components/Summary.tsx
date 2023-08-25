'use client';

import React from 'react';
import axios from 'axios';
import Currency from './Currency';
import { Button } from '@/components/Button';
import { useCart } from '@/hooks/use-cart';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Summary() {
  const searchParams = useSearchParams();
  const products = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  // match with stripe success and canceled query params
  React.useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment successful');
      removeAll();
    }
    if (searchParams.get('canceled')) {
      toast.error('Payment canceled');
    }
  }, [searchParams, removeAll]);

  const totalPrice = products.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);

  const handleCheckout = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: products.map((item) => item.id),
      }
    );

    window.location = res.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
        </div>
        <Currency value={totalPrice} />
      </div>
      <Button className="w-full mt-6 bg-gray-600" onClick={handleCheckout}>
        Checkout
      </Button>
    </div>
  );
}
