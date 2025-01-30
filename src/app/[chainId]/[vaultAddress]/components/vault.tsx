'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/buttons/button';
import { fetchGraphQL } from '@/lib/api/graphql';
import { VaultResponse, getVaultQuery } from '@/lib/api/queries';

export function Vault({
  chainId,
  vaultAddress,
}: {
  chainId: string;
  vaultAddress: string;
}) {
  const queryClient = useQueryClient();

  const { data, isPending, error, isFetching } = useQuery({
    queryKey: ['vault', chainId, vaultAddress],
    queryFn: () =>
      fetchGraphQL<VaultResponse>(getVaultQuery(chainId, vaultAddress)),
  });

  const onRefresh = () => {
    queryClient.invalidateQueries({
      queryKey: ['vault', chainId, vaultAddress],
    });
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='h-screen flex flex-col gap-4 items-center justify-center'>
      {JSON.stringify(data)}
      <Button loading={isFetching} onClick={onRefresh}>
        Refresh
      </Button>
    </div>
  );
}
