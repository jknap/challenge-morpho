import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/buttons/button';
import { PATHS } from '@/lib/route-formatter';

const GITHUB_REPO_URL = 'https://github.com/jknap/challenge-morpho';

export function Navbar() {
  return (
    <div className='w-full h-[50px] px-10 border-b border-morpho-border-primary flex items-center justify-between'>
      <div className='flex items-center gap-8'>
        <Link href={PATHS.HOME}>
          <Image src='/logo.png' alt='Morpho' width={16} height={16} />
        </Link>
        <span className='text-morpho-text-body text-xsm font-normal'>
          Morpho Test
        </span>
      </div>
      <Button
        variant='morphoSecondary'
        toRoute={GITHUB_REPO_URL}
        openInNewTab
        className='px-2 h-[26px] text-[11px]'
      >
        <div className='flex items-center gap-2'>Go to GitHub repo</div>
        <ArrowUpRightIcon className='w-4 h-4 text-morpho-icon-secondary' />
      </Button>
    </div>
  );
}
