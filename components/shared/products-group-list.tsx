import React from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface Props {
  className?: string;
  listClassName?: string;
  categoryId: number;
  groupName: string;
  products: Product[];
}

export const ProductsGroupList: React.FC<Props> = ({ 
  className,
  groupName,
  id,
  name,
  price,
  imageUrl
}) => {
  return (
    <div className={cn('w-[900px]', className)}>
      <Title name={groupName} />
      <div className={'grid grid-cols-3 gap-3'}> 
        <ProductCard 
          id={id}
          imageUrl={imageUrl}
          name={name}
          price={price} 
        />
      </div>
    </div>
  )
}