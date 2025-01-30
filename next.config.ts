import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // This is needed to make jest work with lucide-react
  transpilePackages: ['lucide-react'],
};

export default nextConfig;
