import { Link } from '@remix-run/react';
import { AnimatePresence, motion } from 'framer-motion';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='flex h-20 items-center justify-between border-b border-neutral-50/5 px-6 text-neutral-50'>
      <div className='flex-1'></div>
      <Link to={'/'} className='text-2xl font-bold tracking-tight'>
        DRUMCRAFTER
      </Link>
      {/* desktop Nav */}
      <nav className=' hidden flex-1 space-x-6 text-center   md:block'>
        <Link to='/' className='hover:text-neutral-400'>
          How it Works
        </Link>
        <Link to='/' className='hover:text-neutral-400'>
          Drum Designer
        </Link>
        <Link to='/' className='hover:text-neutral-400'>
          Contact
        </Link>
      </nav>
      {/* mobile nav */}
      <div className='flex-1 text-right md:hidden'>
        <button onClick={() => setIsOpen(true)}>
          <Bars3Icon className='h-8 w-8' />
        </button>
        <AnimatePresence>
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
              <Dialog.Panel className='w-full max-w-xs bg-neutral-900 shadow-xl'>
                <div className='px-6'>
                  <div className='flex h-20 items-center justify-end'>
                    <button onClick={() => setIsOpen(false)}>
                      <XMarkIcon className='h-8 w-8 text-neutral-50' />
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </AnimatePresence>
      </div>
    </header>
  );
}
