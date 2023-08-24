'use client';

import React from 'react';

export const formatter = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
});

interface Props {
  value?: string | number;
}
export default function Currency({ value }: Props) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
}
