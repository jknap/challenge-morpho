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
        {vaults.length === 0 ? (
          <div className='w-full text-center text-xsm text-morpho-text-body'>
            No results :(
          </div>
        ) : (
          vaults.map((vault) => (
            <div
              key={vault.address}
              className='px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer rounded-lg'
            >
              <div className='w-5 h-5 rounded-full bg-blue-500' />
              <div
                onClick={() => onSelect(vault)}
                className='flex-1 text-morpho-text-body text-xsm'
              >
                {vault.name}
              </div>
              <ChevronRight size={20} />
            </div>
          ))
        )}
      </PopoverContent>
    </Popover>
  );
}
