import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { ReactElement } from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[100px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        morpho:
          'text-white bg-morpho-button-bg-default hover:bg-morpho-button-bg-hover focus:bg-morpho-button-bg-focused focus:ring-morpho-button-bg-disabled focus:ring-2',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-2.5 text-xs',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
        'icon-sm': 'h-8 w-8',
        'icon-lg': 'h-12 w-12',
      },
      shape: {
        default: '',
        circle: 'rounded-full flex items-center justify-center',
      },
      loading: {
        true: 'text-morpho-text-button-disabled',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      loading: false,
    },
  }
);

function getLucideIconSize(size: VariantProps<typeof buttonVariants>['size']) {
  switch (size) {
    case 'icon-lg':
    case 'lg':
      return 24;
    case 'icon':
      return 16;
    case 'icon-sm':
    case 'sm':
      return 12;
    default:
      return 16;
  }
}

type ButtonIconProps = {
  icon?: ReactElement | React.ReactNode;
  lucideIcon?: LucideIcon;
  size?: VariantProps<typeof buttonVariants>['size'];
};

function ButtonIcon(props: ButtonIconProps) {
  const { icon, lucideIcon: LucideIconProp, size } = props;
  if (LucideIconProp) {
    return <LucideIconProp size={getLucideIconSize(size)} />;
  }
  return icon;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    ButtonIconProps {
  asChild?: boolean;
  loading?: boolean;
  toRoute?: string;
  openInNewTab?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading,
      toRoute,
      icon,
      lucideIcon,
      children,
      disabled,
      shape,
      openInNewTab = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const content = (
      <Comp
        className={cn(
          buttonVariants({ variant, size, shape, loading, className })
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        <ButtonIcon icon={icon} lucideIcon={lucideIcon} size={size} />
        {children}
      </Comp>
    );

    return toRoute ? (
      <Link
        href={toRoute}
        className={className}
        target={openInNewTab ? '_blank' : undefined}
      >
        {content}
      </Link>
    ) : (
      content
    );
  }
);
Button.displayName = 'Button';
