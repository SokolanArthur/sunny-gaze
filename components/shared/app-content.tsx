import { cn } from '@/lib/utils';
import { ProductsGroupList } from './products-group-list';
import { SideBar } from './sidebar';

interface Props {
  className?: string;
}

export const AppContent: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex justify-center',className)}>
        <SideBar />
        <div>
          <ProductsGroupList groupName='Новинки' categoryId={0} />
        </div>
    </div>
  )
} 