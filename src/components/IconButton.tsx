import { cn } from '@/lib/utils';
import React, { MouseEventHandler } from 'react';

interface Props {
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

export default function IconButton({ handleClick, icon, className }: Props) {
  return (
    <button
      onClick={handleClick}
      className={cn(
        'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition'
      )}
    >
      {icon}
    </button>
  );
}
