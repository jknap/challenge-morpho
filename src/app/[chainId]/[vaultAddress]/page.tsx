import { Vault } from '@/app/[chainId]/[vaultAddress]/components/vault';
import { VaultPrefetchWrapper } from '@/app/[chainId]/[vaultAddress]/components/vault-prefetch-wrapper';
import { fetchGraphQL } from '@/lib/api/graphql';
import { VaultsResponse, getVaultsByNameQuery } from '@/lib/api/queries';

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// Not sure how many vaults there are, but if the number is reasonable, we could
// generate a static list of vaults to pre-fetch.
const MAX_VAULTS = 100;

export async function generateStaticParams() {
  const { vaults } = await fetchGraphQL<VaultsResponse>(
    getVaultsByNameQuery('', MAX_VAULTS)
  );
  return vaults.items.map((vault) => ({
    chainId: `${vault.chain.id}`,
    vaultAddress: vault.address,
  }));
}

export default async function VaultPage({
  params,
}: {
  params: Promise<{ chainId: string; vaultAddress: string }>;
}) {
  const { chainId, vaultAddress } = await params;
  return (
    <VaultPrefetchWrapper chainId={chainId} vaultAddress={vaultAddress}>
      <Vault chainId={chainId} vaultAddress={vaultAddress} />
    </VaultPrefetchWrapper>
  );
}
