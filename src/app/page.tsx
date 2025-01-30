'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/buttons/button';

export default function Home() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('Test error');
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Button onClick={() => setShouldError(true)}>This will throw</Button>
    </div>
  );
}
