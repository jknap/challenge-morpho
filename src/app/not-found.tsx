import { Button } from '@/components/ui/buttons/button';
import { PATHS } from '@/lib/route-formatter';

export default function NotFound() {
  return (
    <div className='h-screen flex flex-col gap-6 items-center justify-center'>
      <h2 className='text-4xl font-bold text-gray-800 text-center'>
        Page not found
      </h2>
      <Button variant='outline' toRoute={PATHS.HOME} className='w-fit'>
        Go to home
      </Button>
    </div>
  );
}
