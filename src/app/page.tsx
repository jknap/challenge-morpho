'use client';

import { useState } from 'react';
import { useDebounce } from 'react-use';
import { Search, SearchStatus } from '@/app/components/search';

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

  return (
    <div className='flex-1 overflow-y-auto flex flex-col items-center justify-center h-screen'>
      <Search
        status={status}
        onClear={status === 'error' && !!search ? onClear : undefined}
        search={search}
        onSearch={setSearch}
      />
    </div>
  );
}
