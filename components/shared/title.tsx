import { cn } from '@/lib/utils'
      


interface Props {
    className?: string;
    name: string;
}

export const Title: React.FC<Props> = ({ className, name }) => {
  return (
    <header className={cn('text-[96px] font-bold h-[130px] text-primaryGray', className)}>{name}</header>
  )
}