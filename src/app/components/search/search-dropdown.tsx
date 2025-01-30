import { ChevronRight } from 'lucide-react';
import { PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Popover } from '@/components/ui/popover';
import { Vault } from '@/lib/api/queries';

export type SearchDropdownProps = {
  vaults: Vault[];
  onSelect: (vault: Vault) => void;
  open: boolean;
  children?: React.ReactNode;
};

export function SearchDropdown({
  vaults,
  onSelect,
  open,
  children,
}: SearchDropdownProps) {
  return (
    <Popover open={open}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
        className='w-[310px] max-h-[200px] overflow-y-auto'
        side='bottom'
        sideOffset={10}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {vaults.map((vault) => (
          <div
            key={vault.address}
            className='px-4 py-2 flex items-center justify-between hover:bg-morpho-bg-block cursor-pointer'
          >
            <div onClick={() => onSelect(vault)}>{vault.name}</div>
            <ChevronRight size={20} />
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
