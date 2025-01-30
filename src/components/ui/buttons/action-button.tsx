'use client';

import { forwardRef, useCallback, useState } from 'react';
import { Button, ButtonProps } from './button';

const ActionButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, loading: externalLoading, ...props }, ref) => {
    const [asyncOnClickLoading, setAsyncOnClickLoading] = useState(false);
    const finalOnClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!onClick) return;
        const result = onClick(e);
        // If onClick is a promise, set loading to true until the promise resolves
        // @ts-expect-error -- it's fine if result is a promise
        if (result instanceof Promise) {
          setAsyncOnClickLoading(true);
          result.finally(() => setAsyncOnClickLoading(false));
        }
      },
      [onClick]
    );
    const loading = externalLoading || asyncOnClickLoading;

    return (
      <Button {...props} ref={ref} onClick={finalOnClick} loading={loading} />
    );
  }
);
ActionButton.displayName = 'ActionButton';

export { ActionButton };
