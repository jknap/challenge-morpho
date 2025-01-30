import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Search, SearchProps } from '@/app/components/search';

function Wrapper({ status, search }: SearchProps) {
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
