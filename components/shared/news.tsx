import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

interface Props {
    className?: string;
}

export const News: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('bg-primaryDarkBlue h-[190px] flex justify-center select-none',className)}>
      <Carousel>
        <CarouselContent className='w-[1250px]'> 
          <CarouselItem className='basis-1/10'>
            <div className='items-center mt-4 mx-1 flex flex-col w-[150px]'>
              <div className='bg-none h-[130px] w-[130px] rounded-full border-[3px] border-secondaryBlue items-center justify-center flex'>
                <Image src='/png/new1.png' width={117} height={117} alt='new' className='rounded-full'></Image>
              </div>
              <p className='text-white text-2xl'>Новинки!</p>
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/10'>
            <div className='items-center mt-4 mx-1 flex flex-col w-[150px]'>
              <div className='bg-none h-[130px] w-[130px] rounded-full border-[3px] border-secondaryBlue items-center justify-center flex'>
                <Image src='/png/new2.png' width={117} height={117} alt='new' className='rounded-full'></Image>
              </div>
              <p className='text-white text-2xl'>Новые вкусы
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/10'>
            <div className='items-center mt-4 mx-1 flex flex-col w-[150px]'>
              <div className='bg-none h-[130px] w-[130px] rounded-full border-[3px] border-secondaryBlue items-center justify-center flex'>
                <Image src='/png/new3.png' width={117} height={117} alt='new' className='rounded-full'></Image>
              </div>
              <p className='text-white text-2xl'>Работа</p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
} 