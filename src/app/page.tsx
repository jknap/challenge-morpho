'use client';

import { useState } from 'react';
import { Search, SearchStatus } from '@/app/components/search';

export default function Home() {
  const [search, setSearch] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: remove this
  const [status, setStatus] = useState<SearchStatus>('idle');
  const onClear = () => {
    setSearch('');
  };

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
