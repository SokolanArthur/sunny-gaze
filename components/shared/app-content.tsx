import { cn } from '@/lib/utils';
import { ProductsGroupList } from './products-group-list';
import { SideBar } from './sidebar';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface Props {
  className?: string;
  data: Product[];
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:5000/product');
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export const AppContent: React.FC<Props> = ({ className, data }) => {
  return (
    <div className={cn('flex justify-center',className)}>
        <SideBar />
        <div>
          <ProductsGroupList groupName='Новинки' products={data} categoryId={0} />
        
        </div>
    </div>
  )
} 