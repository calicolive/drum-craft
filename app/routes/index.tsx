import { Link } from '@remix-run/react';
import {
  Cog6ToothIcon,
  AdjustmentsVerticalIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/outline';
import Container from '~/components/Container';
import Hero, { HeroSubtitle, HeroTitle } from '~/components/Hero';

const steps = [
  {
    name: 'Select Audio Engine',
    description: 'Choose between Kick, Snare, and HiHat.',
    icon: (
      <Cog6ToothIcon className='h-16 w-16 text-neutral-50 md:h-20 md:w-20' />
    ),
  },
  {
    name: 'Desgin Your Drum',
    description: 'Tweak the parameters to design your sound.',
    icon: (
      <AdjustmentsVerticalIcon className='h-16 w-16 text-neutral-50 md:h-20 md:w-20' />
    ),
  },
  {
    name: 'Free Download',
    description: 'Once you are happy with your sound, download it!',
    icon: (
      <ArrowDownIcon className='h-16 w-16 text-neutral-50 md:h-20 md:w-20' />
    ),
  },
];

export default function Index() {
  return (
    <main className='mt-4 text-neutral-50  '>
      <section className='relative isolate mb-12 overflow-hidden'>
        {/* bg image */}

        <img
          src='hero.png'
          alt=''
          className='absolute inset-0 -z-10 h-full  w-full object-cover opacity-50'
        />
        <div className='absolute inset-0 -z-10 h-full w-full  bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950' />

        <Container>
          <div className='flex flex-col items-center justify-center  py-32 sm:py-48 lg:py-56'>
            <Hero>
              <HeroTitle>
                Your Virtual <br /> Drum Machine
              </HeroTitle>
              <HeroSubtitle>
                Design your drum samples <br /> on-the-go for free!
              </HeroSubtitle>
            </Hero>
            <Link
              to='/'
              className='mt-6 rounded-lg border border-neutral-50 px-4 py-2 hover:border-neutral-400 hover:text-neutral-400'>
              Get Started
            </Link>{' '}
          </div>
        </Container>
      </section>
      <Container>
        <section className=' mx-auto mt-10 flex flex-col items-center justify-center text-center  '>
          <h2 className='text-4xl font-medium text-neutral-50'>How it works</h2>
          <div className=''>
            <div className='py-24 sm:px-2 sm:py-32 lg:px-4'>
              <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4  text-neutral-50 lg:max-w-none lg:grid-cols-3'>
                {steps.map((step) => (
                  <div
                    key={step.name}
                    className='text-center sm:flex sm:text-left lg:block lg:text-center'>
                    <div className='sm:flex-shrink-0'>
                      <div className='flow-root'>
                        <div className='flex justify-center'> {step.icon}</div>
                      </div>
                    </div>
                    <div className='mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3'>
                      <h3 className='text-xl font-medium '>{step.name}</h3>
                      <p className='text-md mt-2 text-neutral-300 '>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
