import { Link } from '@remix-run/react';
import { AnimatePresence, motion } from 'framer-motion';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import Container from './Container';
import { useRive } from '@rive-app/react-canvas';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <header className=' sticky flex h-20 items-center justify-between px-6 text-neutral-50'>
        <div className='flex-1'></div>
        <div className='flex items-center space-x-2'>
          <Link to={'/'} className='text-2xl font-bold tracking-tight'>
            DRUMCRAFTER
          </Link>
        </div>
        {/* desktop Nav */}
        <nav className=' hidden flex-1 space-x-12 text-right   md:block'>
          <Link
            to='/'
            className='rounded-lg border border-neutral-50 px-4 py-2 hover:border-neutral-400 hover:text-neutral-400'>
            Get Started
          </Link>
        </nav>
        {/* mobile nav */}
        <div className='flex-1 text-right md:hidden'>
          <button onClick={() => setIsOpen(true)}>
            <Bars3Icon className='h-8 w-8' />
          </button>
          <AnimatePresence>
            {isOpen && (
              <Dialog
                key={'mobile-nav'}
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className='relative z-40'>
                <Dialog.Overlay className='fixed inset-0 bg-neutral-900/50' />
                <div className=' fixed inset-0 flex justify-end'>
                  <Dialog.Panel className='w-full max-w-xs bg-neutral-950 shadow-xl'>
                    <div className='flex flex-col px-6 text-neutral-50'>
                      <div className='flex h-20 items-center justify-end'>
                        <button onClick={() => setIsOpen(false)}>
                          <XMarkIcon className='h-8 w-8 text-neutral-50' />
                        </button>
                      </div>
                      <nav className=' flex flex-col space-y-12  '>
                        <Link to='/' className=' hover:text-neutral-400'>
                          Get Started
                        </Link>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </div>
              </Dialog>
            )}
          </AnimatePresence>
        </div>
      </header>
    </Container>
  );
}
