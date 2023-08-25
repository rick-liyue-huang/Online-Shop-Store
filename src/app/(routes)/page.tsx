import { getBillboard } from '@/actions/getBillboard';
import BillboardComponent from '@/components/Billboard';
import Container from '@/components/Container';
import { getProducts } from '@/actions/getProducts';
import ProductList from '@/components/ProductList';

export const revalidate = 0;
export default async function Home() {
  const billboard = await getBillboard('03029571-a159-4277-87ed-1a04738a244e');
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillboardComponent data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title={'Featured Product'} items={products} />
      </div>
    </Container>
  );
}
