'use client';

// Add providers here
import { ReactQueryProvider } from '@/app/providers/react-query';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
