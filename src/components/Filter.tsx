'use client';

import { Color, Size } from '@/types/interfaces';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import qs from 'query-string';
import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';

interface Props {
  valueKey: string;
  data: (Size | Color)[];
  name: string;
}
export default function SizeFilter({ data, name, valueKey }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const handleClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-serif">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                selectedValue === filter.id && 'bg-gray-800 text-white'
              )}
              onClick={() => handleClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
