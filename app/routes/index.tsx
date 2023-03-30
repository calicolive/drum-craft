import { Link } from '@remix-run/react';
import { useRive } from '@rive-app/react-canvas';
import { motion } from 'framer-motion';

import Container from '~/components/Container';

export default function Index() {
  const { RiveComponent } = useRive({
    src: '/drum-machine.riv',
    autoplay: true,
  });
  return (
    <Container>
      <motion.main
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ duration: 1, delay: 1 }}
        className='mt-24 text-neutral-50 md:mt-96'>
        <section className='  flex h-full w-full flex-col items-center  justify-between p-4 text-center md:p-0 '>
          <div>
            <h1 className='text-5xl font-medium md:text-8xl lg:text-9xl '>
              Your Virtual Drum Machine On-the-Go
            </h1>
          </div>
          <div className='mt-24'>
            <Link
              to='/drum-designer'
              className='text-xl font-medium tracking-tight'>
              Get Started <span aria-hidden='true'> &rarr;</span>
            </Link>
          </div>
          <div className='mt-24 h-[10rem] w-[20rem] md:h-[20rem] md:w-[40rem] '>
            <div className='h-full w-full'>
              <RiveComponent />
            </div>
          </div>
        </section>
      </motion.main>
    </Container>
  );
}
