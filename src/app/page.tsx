'use client';

import { useState } from 'react';
import { useDebounce } from 'react-use';
import { Search } from '@/app/components/search/search';
import { VaultItem } from '@/app/components/search/search-dropdown';
import { SearchStatus } from '@/app/components/search/search-input';
import { MOCK_VAULTS } from '@/app/components/search/search.stories';

export default function Home() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [status, setStatus] = useState<SearchStatus>('idle');
  const onClear = () => {
    setSearch('');
  };

  useDebounce(
    () => {
      setDebouncedSearch(search);
    },
    500,
    [search]
  );

  const vaults = MOCK_VAULTS;

  return (
    <div className='flex-1 overflow-y-auto flex flex-col items-center justify-center h-screen'>
      <Search
        status={status}
        onClear={status === 'error' && !!search ? onClear : undefined}
        search={search}
        onSearch={setSearch}
        vaults={vaults}
        onSelect={() => {}}
        open={vaults.length > 0}
      />
    </div>
  );
}
