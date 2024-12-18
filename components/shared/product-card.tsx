import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Link from 'next/link';

interface Props {
  className? : string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}


export const ProductCard: React.FC<Props> = ({ className, id, imageUrl, name, price }) => {
  return (
    <div className={cn('hover:opacity-75 hover:cursor-pointer m-3 bg-primaryBlue5 h-[360px] w-[260px] rounded-[35px]', className)}>
        <Link href={`/product/${id}`}> 
            <img src={imageUrl} className='h-[250px] w-[240px] rounded-[25px] mx-auto my-[10px] object-cover'/>
            <p className='px-[20px] text-2xl font-medium'>{name}</p>
            <div className='flex grid-rows-1 grid- px-[10px] py-1 justify-between'>
                <span className='w-[140px] pl-[10px] text-2xl font-mono content-center'>от {price}₽</span>
                <Button className='h-11 w-[120px] justify-center'>Заказать</Button>
            </div>
        </Link>
    </div>
  );
};













{/* <img
          src={imageUrl}
          alt={product.name}
          className='h-[250px] w-[240px] rounded-[25px] mx-auto my-[10px] object-cover'
          onError={(e) => {
            const img = e.target as HTMLImageElement; 
            img.src = '/images/placeholder.jpg';
          }}
        />
        <p className='px-[20px] text-2xl font-medium'>{product.name}</p>
        <div className='flex grid-rows-1 grid- px-[10px] py-1 justify-between'>
          <span className='w-[140px] pl-[10px] text-2xl font-mono content-center'>от {product.price}₽</span>
          <Button className='h-11 w-[120px] justify-center'>Заказать</Button>
        </div> */}