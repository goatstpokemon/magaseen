'use client';

import Hero from '@/components/Hero';
import DotPattern from '@/components/ui/dot-pattern';
import { trpc } from '@/lib/trpc';

import { cn } from '@/lib/utils';

const Home = () => {
  const hello = trpc.user.hello.useQuery({ text: 'world' });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className='max-w-6xl mx-auto '>
      <DotPattern
        width={20}
        height={50}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          '[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] '
        )}
      />

      <Hero />
    </div>
  );
};
export default Home;
