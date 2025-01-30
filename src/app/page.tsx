'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDebounce } from 'react-use';
import { isAddress } from 'viem';
import { Search } from '@/app/components/search/search';
import { SearchStatus } from '@/app/components/search/search-input';
import { fetchGraphQL } from '@/lib/api/graphql';
import {
  Vault,
  VaultsResponse,
  getVaultsByAddressQuery,
  getVaultsByNameQuery,
} from '@/lib/api/queries';
import { formatVaultPath } from '@/lib/route-formatter';

export default function Home() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
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

  const isSearchAddress = debouncedSearch.startsWith('0x');
  const isAddressError = search.startsWith('0x') && !isAddress(search);

  const query = isSearchAddress
    ? getVaultsByAddressQuery(debouncedSearch)
    : getVaultsByNameQuery(debouncedSearch);

  const { data, isPending, error } = useQuery({
    queryKey: ['vaults', debouncedSearch],
    queryFn: () => fetchGraphQL<VaultsResponse>(query),
    retry: false,
  });

  const router = useRouter();

  function onSelect(vault: Vault) {
    router.push(formatVaultPath(vault));
  }

  const status = isAddressError ? 'error' : 'idle';

  return (
    <div className='flex-1 overflow-y-auto flex flex-col items-center justify-center h-screen'>
      <Search
        status={status}
        onClear={status === 'error' && !!search ? onClear : undefined}
        search={search}
        onSearch={setSearch}
        vaults={data?.vaults?.items ?? []}
        onSelect={onSelect}
        open={debouncedSearch.length > 0 && status !== 'error'}
      />
    </div>
  );
}
