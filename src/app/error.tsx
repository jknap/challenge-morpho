'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/buttons/button';
import { captureException } from '@/lib/sentry';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    captureException(error);
  }, [error]);

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-4'>
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
