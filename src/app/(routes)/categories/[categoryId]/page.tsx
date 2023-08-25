import { getCategories } from '@/actions/getCategories';
import { getCategory } from '@/actions/getCategory';
import { getColors } from '@/actions/getColors';
import { getProducts } from '@/actions/getProducts';
import { getSizes } from '@/actions/getSizes';
import React from 'react';
import Container from '@/components/Container';
import BillboardComponent from '@/components/Billboard';
import Filter from '@/components/Filter';
import NoResults from '@/components/NoResults';
import ProductCard from '@/components/ProductCard';
import MobileFilter from '@/components/MobileFilter';

export const revalidate = 0;

interface Props {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export default async function CategoryPage({
  params: { categoryId },
  searchParams: { colorId, sizeId },
}: Props) {
  const products = await getProducts({
    categoryId,
    colorId,
    sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(categoryId);

  return (
    <div className="bg-white">
      <Container>
        <BillboardComponent data={category.billboard} />

        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-8">
            <MobileFilter sizes={sizes} colors={colors} />

            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="sizes" data={sizes} />
              <Filter valueKey="colorId" name="colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
