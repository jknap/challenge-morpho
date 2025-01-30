import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Search, SearchProps } from '@/app/components/search/search';
import { Vault } from '@/lib/api/queries';

export const MOCK_VAULTS: Vault[] = [
  {
    address: '0xfbDEE8670b273E12b019210426E70091464b02Ab',
    chain: {
      id: 1,
    },
    metadata: {
      image: 'https://cdn.morpho.org/v2/assets/images/m0-vault-mev.png',
    },
    name: 'MEV Capital M^0 Vault',
  },
  {
    address: '0xd63070114470f685b75B74D60EEc7c1113d33a3D',
    chain: {
      id: 1,
    },
    metadata: {
      image: 'https://cdn.morpho.org/v2/assets/images/usual.svg',
    },
    name: ' Usual Boosted USDC',
  },
  {
    address: '0xD50DA5F859811A91fD1876C9461fD39c23C747Ad',
    chain: {
      id: 1,
    },
    metadata: {
      image: 'https://cdn.morpho.org/v2/assets/images/resolv-vault.png',
    },
    name: 'MEV Capital Resolv USR',
  },
  {
    address: '0xC0A14627D6a23f70c809777CEd873238581C1032',
    chain: {
      id: 1,
    },
    metadata: {
      image: 'https://cdn.morpho.org/v2/assets/images/mevcapital.png',
    },
    name: 'MEV Capital USD0',
  },
  {
    address: '0x9a8bC3B04b7f3D87cfC09ba407dCED575f2d61D8',
    chain: {
      id: 1,
    },
    metadata: {
      image: 'https://cdn.morpho.org/assets/logos/eth.svg',
    },
    name: 'MEV Capital wETH',
  },
  {
    address: '0x98cF0B67Da0F16E1F8f1a1D23ad8Dc64c0c70E0b',
    chain: {
      id: 1,
    },
    metadata: {
      image: 'https://cdn.morpho.org/v2/assets/images/mevcapital.png',
    },
    name: 'MEV Capital cbBTC',
  },
  {
    address: '0x2f1aBb81ed86Be95bcf8178bA62C8e72D6834775',
    chain: {
      id: 1,
    },
    metadata: {
      image: 'https://cdn.morpho.org/v2/assets/images/pendle-wbtc-vault.svg',
    },
    name: 'Pendle WBTC',
  },
  {
    address: '0x225C119fFaf1CaddCfCDb493283eDF4b816Bf773',
    chain: {
      id: 1,
    },
    metadata: {
      image: 'https://cdn.morpho.org/v2/assets/images/mevcapital.png',
    },
    name: 'MEV Capital Usual Boosted USDT',
  },
  {
    address: '0x1c530D6de70c05A81bF1670157b9d928e9699089',
    chain: {
      id: 1,
    },
    metadata: {
      image: 'https://cdn.morpho.org/v2/assets/images/mevcapital.png',
    },
    name: 'MEV Capital WBTC',
  },
  {
    address: '0x1265a81d42d513Df40d0031f8f2e1346954d665a',
    chain: {
      id: 1,
    },
    metadata: {
      image: 'https://cdn.morpho.org/v2/assets/images/mceusdc.svg',
    },
    name: 'MEV Capital Elixir USDC',
  },
];

function Wrapper({ status, search, vaults, onSelect, open }: SearchProps) {
  const [searchValue, setSearchValue] = useState(search);

  function onClear() {
    setSearchValue('');
  }

  return (
    <Search
      status={status}
      onClear={status === 'error' && !!searchValue ? onClear : undefined}
      search={searchValue}
      onSearch={setSearchValue}
      vaults={vaults}
      onSelect={onSelect}
      open={open}
    />
  );
}

const meta = {
  title: 'components/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    status: 'idle',
    onClear: () => {},
    search: '',
    onSearch: () => {},
    vaults: [],
    onSelect: () => {},
    open: false,
  },
  render: Wrapper,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    status: 'error',
  },
};

export const Loading: Story = {
  args: {
    status: 'loading',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
  },
};

export const WithVaults: Story = {
  args: {
    vaults: MOCK_VAULTS,
    onSelect: () => {},
    open: true,
  },
};
