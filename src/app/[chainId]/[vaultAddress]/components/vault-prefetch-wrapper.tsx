import { QueryClient } from '@tanstack/react-query';
import { dehydrate } from '@tanstack/react-query';
import { HydrationBoundary } from '@tanstack/react-query';
import { fetchGraphQL } from '@/lib/api/graphql';
import { VaultResponse, getVaultQuery } from '@/lib/api/queries';

export async function VaultPrefetchWrapper({
  children,
  chainId,
  vaultAddress,
}: {
  children: React.ReactNode;
  chainId: string;
  vaultAddress: string;
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['vault', chainId, vaultAddress],
    queryFn: () =>
      fetchGraphQL<VaultResponse>(getVaultQuery(chainId, vaultAddress)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
