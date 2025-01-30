import { Meta, StoryObj } from '@storybook/react';
import { HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/buttons/button';

const meta: Meta<typeof Button> = {
  title: 'ui/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: 'Save',
  },
  render: ({ children, ...rest }) => (
    <div className='flex items-center gap-2 whitespace-nowrap'>
      <div className='flex flex-col gap-2 items-start'>
        <div>Regular</div>
        <Button size='lg' {...rest}>
          {children}
        </Button>
        <Button {...rest}>{children}</Button>
        <Button size='sm' {...rest}>
          {children}
        </Button>
      </div>
      <div className='flex flex-col gap-2 items-start'>
        <div>Icon</div>
        <Button lucideIcon={HomeIcon} size='lg' {...rest}>
          {children}
        </Button>
        <Button lucideIcon={HomeIcon} {...rest}>
          {children}
        </Button>
        <Button lucideIcon={HomeIcon} size='sm' {...rest}>
          {children}
        </Button>
      </div>
      <div className='flex flex-col gap-2 items-start'>
        <div>Disabled</div>
        <Button size='lg' {...rest} disabled>
          {children}
        </Button>
        <Button {...rest} disabled>
          {children}
        </Button>
        <Button size='sm' {...rest} disabled>
          {children}
        </Button>
      </div>
      <div className='flex flex-col gap-2 items-start'>
        <div>Loading</div>
        <Button size='lg' {...rest} loading>
          {children}
        </Button>
        <Button {...rest} loading>
          {children}
        </Button>
        <Button size='sm' {...rest} loading>
          {children}
        </Button>
      </div>
      <div className='flex flex-col gap-2 items-start'>
        <div>Loading icon</div>
        <Button lucideIcon={HomeIcon} size='lg' {...rest} loading>
          {children}
        </Button>
        <Button lucideIcon={HomeIcon} {...rest} loading>
          {children}
        </Button>
        <Button lucideIcon={HomeIcon} size='sm' {...rest} loading>
          {children}
        </Button>
      </div>
      <div className='flex flex-col gap-2 items-start'>
        <div>Icon</div>
        <Button size='icon-lg' lucideIcon={HomeIcon} {...rest} />
        <Button size='icon' lucideIcon={HomeIcon} {...rest} />
        <Button size='icon-sm' lucideIcon={HomeIcon} {...rest} />
      </div>
      <div className='flex flex-col gap-2 items-start'>
        <div>Icon Dis</div>
        <Button size='icon-lg' lucideIcon={HomeIcon} {...rest} disabled />
        <Button size='icon' lucideIcon={HomeIcon} {...rest} disabled />
        <Button size='icon-sm' lucideIcon={HomeIcon} {...rest} disabled />
      </div>
      <div className='flex flex-col gap-2 items-start'>
        <div>Icon Load</div>
        <Button size='icon-lg' lucideIcon={HomeIcon} {...rest} loading />
        <Button size='icon' lucideIcon={HomeIcon} {...rest} loading />
        <Button size='icon-sm' lucideIcon={HomeIcon} {...rest} loading />
      </div>
      <div className='flex flex-col gap-2 items-start'>
        <div>Icon Circ</div>
        <Button shape='circle' size='icon-lg' lucideIcon={HomeIcon} {...rest} />
        <Button shape='circle' size='icon' lucideIcon={HomeIcon} {...rest} />
        <Button shape='circle' size='icon-sm' lucideIcon={HomeIcon} {...rest} />
      </div>
    </div>
  ),
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Morpho: Story = {
  args: {
    variant: 'morpho',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const LinkButton: Story = {
  args: {
    variant: 'link',
  },
};
