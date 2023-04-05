import { Link } from '@remix-run/react';
import { useRive } from '@rive-app/react-canvas';
import { motion } from 'framer-motion';

import Container from '~/components/Container';
import Hero, { HeroSubtitle, HeroTitle } from '~/components/Hero';

export default function Index() {
  return (
    <main className='mt-4 text-neutral-50  '>
      <section className='relative isolate overflow-hidden'>
        <img
          src='hero.png'
          alt=''
          className='absolute inset-0 -z-10 h-full  w-full object-cover opacity-20'
        />
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <Container>
          <div className='flex flex-col items-center justify-center  py-32 sm:py-48 lg:py-56'>
            <Hero>
              <HeroTitle>
                Your Virtual <br /> Drum Machine
              </HeroTitle>
              <HeroSubtitle>
                Design your drum samples <br /> on the go for free!
              </HeroSubtitle>
            </Hero>
            <Link
              to='/'
              className='mt-6 rounded-lg border border-neutral-50 px-4 py-2 hover:border-neutral-400 hover:text-neutral-400'>
              Get Started
            </Link>
          </div>
        </Container>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>
    </main>
  );
}
