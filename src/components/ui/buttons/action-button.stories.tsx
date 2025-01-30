import type { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from './action-button';

const meta = {
  title: 'ui/Buttons/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsyncAction: Story = {
  args: {
    children: 'Click Me',
    onClick: async () => {
      // Simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
  },
};

export const AsyncActionWithError: Story = {
  args: {
    children: 'Click Me (Will Fail)',
    variant: 'destructive',
    onClick: async () => {
      // Simulate async operation that fails
      await new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error('Failed operation')), 1000)
      );
    },
  },
};
