import React from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';

interface Props {
  className?: string;
  listClassName?: string;
  categoryId: number;
  groupName: string;
}

export const ProductsGroupList: React.FC<Props> = ({ 
  className,
  groupName,
}) => {
  return (
    <div className={cn('w-[900px]', className)}>
      <Title name={groupName} />
      <div className={'grid grid-cols-3 gap-3'}> 
        <ProductCard 
        id={1} 
        imageUrl='png\drinks\drink1.png'
        name='человек-паук'
        price={100}
        />
        <ProductCard 
        id={2} 
        imageUrl='png\drinks\drink1.png'
        name='человек-паук'
        price={100}
        />
        <ProductCard 
        id={3} 
        imageUrl='png\drinks\drink1.png'
        name='человек-паук'
        price={100}
        />
        <ProductCard 
        id={4} 
        imageUrl='png\drinks\drink1.png'
        name='человек-паук'
        price={100}
        />
      </div>
    </div>
  )
}