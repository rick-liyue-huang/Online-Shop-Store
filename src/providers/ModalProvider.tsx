'use client';

import React from 'react';
import PreView from '@/components/PreView';

export default function ModalProvider() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <PreView />
    </>
  );
}
