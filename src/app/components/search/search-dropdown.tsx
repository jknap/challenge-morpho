import { ChevronRight } from 'lucide-react';
import { PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Popover } from '@/components/ui/popover';

export type VaultItem = {
  name: string;
  address: string;
  chainId: number;
};

export type SearchDropdownProps = {
  vaults: VaultItem[];
  onSelect: (vault: VaultItem) => void;
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
      <PopoverContent className='w-[310px]'>
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
