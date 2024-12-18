import { cn } from '@/lib/utils'
import { Input } from '../ui/input';
import { Button } from '../ui/button';


interface Props {
    className?: string;
}

export const MenuSearch: React.FC<Props> = ({ className }) => {
  return (
  <header className={cn(' bg-primaryBlue h-[100px] flex items-center justify-center',className)}>
    <a href="/" className='ml-10'><img src="/svg/icon.svg" className=' select-none'/></a>
    <div className='flex'>
      <svg className='relative left-11 top-4'
      width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.3308 19C17.0924 19 20.9524 15.4183 20.9524 11C20.9524 6.58172 17.0924 3 12.3308 3C7.56928 3 3.70927 6.58172 3.70927 11C3.70927 15.4183 7.56928 19 12.3308 19Z" stroke="#333237" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23.1078 21L18.4737 16.7" stroke="#333237" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <Input placeholder='Поиск по меню' />
    </div>
    <div className='ml-9 items-center'>
      <p className='text-2xl tracking-tight text-primaryGray pb-1'>В ресторане / С собой</p>
      <p className='text-xl font-light italic text-primaryGrayLight'>Для заказа выбери способ получения</p>
    </div>
    <Button className='ml-[138px]'>
      <svg className='rounded-full ml-4 mr-1'
      width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="31" height="32" rx="15.5" fill="#FFAD64"/>
      <path d="M15.5 17.3333C19.0669 17.3333 21.9584 14.3486 21.9584 10.6667C21.9584 6.98477 19.0669 4 15.5 4C11.9332 4 9.04169 6.98477 9.04169 10.6667C9.04169 14.3486 11.9332 17.3333 15.5 17.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25.8334 28C25.8334 25.171 24.7447 22.4579 22.8068 20.4575C20.8689 18.4571 18.2406 17.3333 15.5 17.3333C12.7594 17.3333 10.1311 18.4571 8.19325 20.4575C6.25537 22.4579 5.16669 25.171 5.16669 28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Войти
    </Button>
    <Button className='w-[75px] justify-center ml-6'>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.25 15.5833L19.8333 28.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M26.9167 15.5833L21.25 5.66666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2.83331 15.5833H31.1666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.95831 15.5833L7.22498 26.0667C7.35744 26.7163 7.71351 27.2989 8.23122 27.713C8.74892 28.1272 9.39547 28.3467 10.0583 28.3333H23.9416C24.6045 28.3467 25.251 28.1272 25.7687 27.713C26.2864 27.2989 26.6425 26.7163 26.775 26.0667L29.1833 15.5833" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.375 21.9583H27.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.08331 15.5833L12.75 5.66666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.75 15.5833L14.1667 28.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </Button>
  </header>
  )
}