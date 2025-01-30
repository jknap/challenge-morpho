'use client';

import {
  SearchDropdown,
  SearchDropdownProps,
} from '@/app/components/search/search-dropdown';
import {
  SearchInput,
  SearchInputProps,
} from '@/app/components/search/search-input';

export type SearchProps = SearchInputProps & SearchDropdownProps;

export function Search({
  status,
  onClear,
  search,
  onSearch,
  vaults,
  onSelect,
  open,
}: SearchProps) {
  return (
    <div className='w-[350px] h-[160px] px-5 bg-morpho-bg-block border-morpho-border-primary border rounded-lg flex flex-col justify-center'>
      <div className='relative flex flex-col gap-2'>
        <label
          htmlFor='search'
          className='text-morpho-text-secondary text-xs font-medium'
        >
          Vault Address
        </label>
        <SearchDropdown vaults={vaults} onSelect={onSelect} open={open}>
          <SearchInput
            status={status}
            onClear={onClear}
            search={search}
            onSearch={onSearch}
          />
        </SearchDropdown>
        {status === 'error' && (
          <div className='absolute -bottom-5 right-0 text-xsm text-morpho-text-error'>
            This is not a valid address
          </div>
        )}
      </div>
    </div>
  );
}
