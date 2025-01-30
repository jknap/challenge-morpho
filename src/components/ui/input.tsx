import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex h-9 w-full rounded-md border border-input bg-morpho-input-bg-default hover:bg-morpho-input-bg-hover focus:bg-morpho-input-bg-focused pl-3 pr-2.5 py-2 text-morpho-text-body shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-morpho-border-interactive-active disabled:cursor-not-allowed disabled:opacity-50 md:text-xsm font-normal',
  {
    variants: {
      variant: {
        default: '',
        error:
          'border-morpho-border-error focus-visible:ring-0 text-morpho-text-interactive-error placeholder:text-morpho-text-interactive-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
