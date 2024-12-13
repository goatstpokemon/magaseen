'use client';

import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import DotPattern from '@/components/ui/dot-pattern';

import { cn } from '@/lib/utils';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from '@clerk/nextjs';

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto '>
      <nav className='my-5'>
        <SignedOut>
          <SignInButton>
            <Button variant={'secondary'}>Sign in</Button>
          </SignInButton>
          <SignUpButton>
            <Button variant={'default'}>Sign up</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
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
