import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import Container from '~/components/Container';

export default function DrumDesigner() {
  return (
    <Container>
      <motion.main
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className='mt-24 text-neutral-50 '>
        <section className=' flex h-full w-full flex-col items-center  justify-between p-4 text-center md:p-0 '>
          <div>
            <h1 className='text-3xl font-medium md:text-6xl '>
              Choose your audio engine
            </h1>
          </div>
        </section>
      </motion.main>
    </Container>
  );
}
