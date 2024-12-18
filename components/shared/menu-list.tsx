import { cn } from '@/lib/utils'
      


interface Props {
    className?: string;
}

export const MenuList: React.FC<Props> = ({ className }) => {
  return (
  <header className={cn('bg-primaryLightBlue flex justify-center',className)}>
    <ul className='w-[1250px]   text-primaryGray flex items-center text-2xl h-10 text-center children:mx-4'>
        <li><a href="">Купоны</a></li>
        <li><a href="">Новинки и акции</a></li>       
        <li><a href="">Работа</a></li>
        <li><a href="">Контакты</a></li>
    </ul>
  </header>
  )
}