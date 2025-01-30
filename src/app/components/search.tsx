'use client';

import { CircleCheck, LoaderIcon, XIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

export type SearchStatus = 'idle' | 'loading' | 'error' | 'success';

type SearchContentProps = {
  status: SearchStatus;
  onClear?: () => void;
};

function SearchIconContent({ status, onClear }: SearchContentProps) {
  if (status === 'error' && onClear) {
    return (
      <XIcon
        onClick={onClear}
        size={16}
        className='text-morpho-text-error cursor-pointer'
      />
    );
  }
  if (status === 'loading') {
    return (
      <LoaderIcon className='animate-spin text-morpho-icon-spin h-5 w-5' />
    );
  }
  if (status === 'success') {
    return (
      <CircleCheck type='solid' className='h-5 w-5 text-morpho-text-success' />
    );
  }
  return null;
}

function SearchIcon({ status, onClear }: SearchContentProps) {
  if (status === 'idle') {
    return null;
  }
  return (
    <div className='absolute right-3 top-1/2 -translate-y-1/2'>
      <SearchIconContent status={status} onClear={onClear} />
    </div>
  );
}

export type SearchProps = SearchContentProps & {
  search: string;
  onSearch: (search: string) => void;
};

function SearchInput({ status, onClear, search, onSearch }: SearchProps) {
  return (
    <div className='relative w-full'>
      <Input
        id='search'
        placeholder='Enter Vault Address or Name...'
        variant={status === 'error' ? 'error' : 'default'}
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <SearchIcon status={status} onClear={onClear} />
    </div>
  );
}

export function Search({ status, onClear, search, onSearch }: SearchProps) {
  return (
    <div className='w-[350px] h-[160px] px-5 bg-morpho-bg-block border-morpho-border-primary border rounded-lg flex flex-col justify-center'>
      <div className='flex flex-col gap-2'>
        <label
          htmlFor='search'
          className='text-morpho-text-secondary text-xs font-medium'
        >
          Vault Address
        </label>
        <SearchInput
          status={status}
          onClear={onClear}
          search={search}
          onSearch={onSearch}
        />
      </div>
    </div>
  );
}
