'use client';

import React from 'react';
import { Button } from '@/components/Button';
import { ShoppingBag } from 'lucide-react';

export default function NavbarActions() {
  // this part is client component, so prevent error when rendering on server by hydrating
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-purple-500 px-2 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
}
