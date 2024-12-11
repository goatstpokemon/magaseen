'use client';
import WordPullUp from './ui/word-pull-up';

import { Button } from './ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='relative flex min-w-full items-center justify-center overflow-hidden rounded-lg min-h-full text-center'>
      <div className='flex flex-col gap-5'>
        <WordPullUp
          className='text-4xl font-bold text-center tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]'
          words='Jouw partner voor een digitale voorraad'
        />
        <Link href='/login'>
          <Button className='w-60'>Start Hier</Button>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
