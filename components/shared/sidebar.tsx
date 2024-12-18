import { cn } from '@/lib/utils';

interface Props {
    className?: string;
}

export const SideBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('mr-3 mt-10 w-[350px] h-[600px] bg-primaryBlue5 rounded-[35px] hover:cursor-pointer', className)}>
        <ul className=' h-[600px] *:border-b-primaryGrayLighter *:border-b-[1px] grid grid-rows-6 text-xl *:flex *:items-center *:pl-6'>
            <li className='hover:bg-primaryLightBlue rounded-t-[35px] '>
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 15.3333L14.8542 38.87C14.9844 39.7911 15.445 40.6334 16.1503 41.2399C16.8556 41.8464 17.7573 42.1758 18.6875 42.1667H27.3892C28.3193 42.1758 29.2211 41.8464 29.9264 41.2399C30.6317 40.6334 31.0923 39.7911 31.2225 38.87L34.5 15.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.58334 15.3333H36.4167" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.4167 28.75C14.9342 28.1143 16.563 27.7869 18.2083 27.7869C19.8536 27.7869 21.4825 28.1143 23 28.75C24.5175 29.3858 26.1464 29.7132 27.7917 29.7132C29.437 29.7132 31.0658 29.3858 32.5833 28.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23 15.3333L24.9167 3.83333H28.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p className='pl-6'>Новинки</p></li>
            <li className='hover:bg-primaryLightBlue '>
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1667 17.25C17.6417 17.25 16.1791 17.8558 15.1008 18.9341C14.0225 20.0125 13.4167 21.475 13.4167 23C13.4167 24.525 14.0225 25.9875 15.1008 27.0659C16.1791 28.1442 17.6417 28.75 19.1667 28.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.83334 23H5.75001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.8333 40.25V5.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.1667 7.66667V5.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.1667 40.25V38.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.97665 35.19L8.31832 33.8483" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.31832 12.1517L6.97665 10.81" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.8333 23H42.1667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M32.5833 7.66666L26.8333 13.4167" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.8333 32.5833L32.5833 38.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M40.25 28.75L34.5 23L40.25 17.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p className='pl-6'>Сезонные напитки</p></li>
            <li className='hover:bg-primaryLightBlue '>
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3333 42.1667H30.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.4167 19.1667H32.5833" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23 28.75V42.1667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23 28.75C25.5416 28.75 27.9792 27.7403 29.7764 25.9431C31.5737 24.1459 32.5833 21.7083 32.5833 19.1667C32.5833 15.3333 31.625 11.5 28.75 3.83334H17.25C14.375 11.5 13.4167 15.3333 13.4167 19.1667C13.4167 21.7083 14.4263 24.1459 16.2235 25.9431C18.0208 27.7403 20.4583 28.75 23 28.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p className='pl-6'>Алкогольные напитки</p></li>
            <li className='hover:bg-primaryLightBlue '>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3333 42.1667H30.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.4167 19.1667H19.1667M32.5833 19.1667H30.0092" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23 28.75V42.1667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.0051 14.0051C13.6198 15.6987 13.4225 17.4297 13.4167 19.1666C13.4167 20.8285 13.849 22.4618 14.671 23.9062C15.493 25.3506 16.6764 26.5563 18.1052 27.4052C19.5339 28.254 21.1589 28.7167 22.8205 28.7478C24.4821 28.7789 26.1232 28.3774 27.5827 27.5827M16.5562 5.71356C16.7708 5.11365 17.0047 4.48498 17.25 3.83331H28.75C31.625 11.5 32.5833 15.3333 32.5833 19.1666C32.5833 19.9467 32.4875 20.7172 32.3054 21.4628" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.83334 3.83331L42.1667 42.1666" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
              <p className='pl-6'>Безалкогольные напитки</p></li>
            <li className='hover:bg-primaryLightBlue '>
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1667 3.83331V7.66665" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.8333 3.83331V7.66665" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M30.6667 15.3333C31.175 15.3333 31.6625 15.5352 32.022 15.8947C32.3814 16.2541 32.5833 16.7416 32.5833 17.25V32.5833C32.5833 34.6166 31.7756 36.5667 30.3378 38.0045C28.9 39.4422 26.95 40.25 24.9167 40.25H13.4167C11.3833 40.25 9.43329 39.4422 7.99551 38.0045C6.55774 36.5667 5.75 34.6166 5.75 32.5833V17.25C5.75 16.7416 5.95193 16.2541 6.31138 15.8947C6.67082 15.5352 7.15834 15.3333 7.66667 15.3333H34.5C36.5333 15.3333 38.4834 16.141 39.9212 17.5788C41.3589 19.0166 42.1667 20.9667 42.1667 23C42.1667 25.0333 41.3589 26.9834 39.9212 28.4211C38.4834 29.8589 36.5333 30.6666 34.5 30.6666H32.5833" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.5 3.83331V7.66665" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p className='pl-6'>Кофейные напитки</p></li>
            <li className='last:border-b-0 hover:bg-primaryLightBlue rounded-b-[35px] '>
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.80568 7.866C9.77777 7.59903 9.80624 7.32918 9.88925 7.07392C9.97226 6.81866 10.108 6.58368 10.2876 6.3842C10.4672 6.18472 10.6867 6.02519 10.9319 5.91594C11.177 5.80669 11.4424 5.75015 11.7108 5.75H34.2892C34.5578 5.75013 34.8234 5.80671 35.0687 5.91607C35.314 6.02544 35.5336 6.18515 35.7132 6.38484C35.8929 6.58453 36.0285 6.81975 36.1114 7.07525C36.1943 7.33074 36.2226 7.6008 36.1943 7.86792L32.9475 38.7358C32.848 39.6779 32.4033 40.5498 31.6989 41.1833C30.9946 41.8169 30.0807 42.1672 29.1333 42.1667H16.8667C15.9161 42.1719 14.9974 41.8238 14.289 41.1898C13.5807 40.5558 13.1332 39.6812 13.0333 38.7358L9.80568 7.866Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.5 23C13.1588 21.7559 15.1765 21.0833 17.25 21.0833C19.3235 21.0833 21.3412 21.7559 23 23C24.6588 24.2441 26.6765 24.9166 28.75 24.9166C30.8235 24.9166 32.8412 24.2441 34.5 23" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p className='pl-6'>Лимонады</p></li>
        </ul>
    </div> 
  )
} 