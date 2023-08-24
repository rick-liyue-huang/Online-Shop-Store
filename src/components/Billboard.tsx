import React from 'react';
import { Billboard } from '@/types/interfaces';

interface BillboardProps {
  data: Billboard;
}

export default function BillboardComponent({ data }: BillboardProps) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex justify-center items-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-7xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
}
