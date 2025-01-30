import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Search, SearchProps } from '@/app/components/search/search';
import { VaultItem } from '@/app/components/search/search-dropdown';

export const MOCK_VAULTS: VaultItem[] = [
  { name: 'Vault 1', address: '0x1', chainId: 1 },
  { name: 'Vault 2', address: '0x2', chainId: 1 },
  { name: 'Vault 3', address: '0x3', chainId: 1 },
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
