import React from 'react';
import Container from '@/components/ui/container';
import Link from 'next/link';
import MainNav from '@/components/MainNav';
import { getCategories } from '@/actions/getCategories';

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={categories} />
        </div>
      </Container>
    </div>
  );
}
