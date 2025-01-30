export type Vault = {
  address: string;
  chain: {
    id: number;
  };
  metadata: {
    image: string;
  };
  name: string;
};

export type VaultsResponse = {
  vaults: {
    items: Vault[];
  };
};

export const getVaultsByAddressQuery = (
  address: string,
  limit: number = 10
) => `
  query VaultSearchByFullAddress {
    vaults(first: ${limit} where:{
      whitelisted: true,
      address_in: ["${address}"]
    }) {
      items {
        address
        chain {
          id
        }
        metadata {
          image
        }
        name
      }
    }
  }
`;

export const getVaultsByNameQuery = (name: string, limit: number = 10) => `
  query VaultSearchByName {
    vaults(first: ${limit} where:{
      whitelisted: true,
      search: "${name}"
    }) {
      items {
        address
        chain {
          id
        }
        metadata {
          image
        }
        name
      }
    }
  }
`;

export type VaultItem = {
  metadata: {
    image: string;
    curators: {
      name: string;
    }[];
  };
  name: string;
  state: {
    owner: string;
    totalAssetsUsd: number;
    netApy: number;
  };
};

export type VaultResponse = {
  vaultByAddress: VaultItem;
};

export const getVaultQuery = (chainId: string, vaultAddress: string) => `
  query VaulyData {
    vaultByAddress(address: "${vaultAddress}" chainId: ${chainId}) {
      metadata {
        image
        curators {
          name
        }
      }
      name
      
      state {
        owner
        totalAssetsUsd
        netApy

      }
    }
  } 
`;
