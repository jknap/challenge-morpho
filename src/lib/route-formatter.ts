import { Vault } from '@/lib/api/queries';

export const PATHS = {
  HOME: '/',
};

export function formatVaultPath(vault: Vault) {
  return `/${vault.chain.id}/${vault.address}`;
}
