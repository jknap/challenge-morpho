export type Vault = {
  name: string;
  chainId: string;
  address: string;
};

export type VaultsResponse = {
  vaults: {
    items: Vault[];
  };
};

export const getVaultsByAddressQuery = (address: string) => `
  query VaultSearchByFullAddress {
    vaults(first: 10 where:{
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

export const getVaultsByNameQuery = (name: string) => `
  query VaultSearchByName {
    vaults(first: 10 where:{
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
