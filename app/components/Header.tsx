import { Link } from '@remix-run/react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';

const clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

function useBoundedScroll(bounds: number) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1]
  );
  useEffect(() => {
    return scrollY.onChange((current) => {
      let previous = scrollY.getPrevious();
      let diff = current - previous;
      let newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
    });
  }, [bounds, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYBoundedProgress } = useBoundedScroll(200);
  const scrollYBoundedProgressThrottled = useTransform(
    scrollYBoundedProgress,
    [0, 0.15, 1],
    [0, 0, 1]
  );

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.header
        layout
        style={{
          height: useTransform(
            scrollYBoundedProgressThrottled,
            [0, 1],
            [80, 45]
          ),
        }}
        exit={{ opacity: 1, transition: { duration: 0.2 } }}
        className='sticky top-0 z-30 flex h-20 w-full items-center justify-between bg-neutral-950  px-6 text-neutral-50 shadow-lg md:relative '>
        <div className='flex-1'></div>
        <div className='flex items-center space-x-2'>
          <Link
            preventScrollReset
            to={'/'}
            className='text-2xl font-bold tracking-tight'>
            <motion.p
              style={{
                scale: useTransform(
                  scrollYBoundedProgressThrottled,
                  [0, 1],
                  [1, 0.9]
                ),
              }}>
              DRUMCRAFTER
            </motion.p>
          </Link>
        </div>
        {/* desktop Nav */}
        <motion.nav
          style={{
            opacity: useTransform(
              scrollYBoundedProgressThrottled,
              [0, 1],
              [1, 0]
            ),
          }}
          className=' hidden flex-1 space-x-12 text-right   md:block'>
          <Link
            to='/'
            className='rounded-lg border border-neutral-50 px-4 py-2 hover:border-neutral-400 hover:text-neutral-400'>
            Get Started
          </Link>
        </motion.nav>
        {/* mobile nav */}
        <div className='flex-1 text-right md:hidden'>
          <motion.button
            style={{
              scale: useTransform(
                scrollYBoundedProgressThrottled,
                [0, 1],
                [1, 0.9]
              ),
            }}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setIsOpen(true);
            }}>
            <Bars3Icon className='h-8 w-8' />
          </motion.button>
          {isOpen && (
            <Dialog
              static
              key={'mobile-nav'}
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
              open={isOpen}
              onClose={() => setIsOpen(false)}
              className='relative z-40 '>
              <Dialog.Overlay className='fixed inset-0  bg-neutral-900/50' />
              <div className=' fixed inset-0 flex justify-end  overflow-hidden '>
                <Dialog.Panel className='w-full  bg-neutral-950 shadow-xl'>
                  <div className=' flex flex-col px-6 text-neutral-50'>
                    <div className='flex h-20 items-center justify-end'>
                      <button onClick={() => setIsOpen(false)}>
                        <XMarkIcon className='h-8 w-8 text-neutral-50' />
                      </button>
                    </div>
                    <nav className=' flex flex-col space-y-12  '>
                      <Link
                        preventScrollReset
                        to='/'
                        onClick={() => setIsOpen(false)}
                        className=' hover:text-neutral-400'>
                        Home
                      </Link>

                      <Link
                        preventScrollReset
                        to='/drum-designer'
                        onClick={() => setIsOpen(false)}
                        className=' hover:text-neutral-400'>
                        Drum Designer
                      </Link>
                      <Link
                        to='/'
                        onClick={() => setIsOpen(false)}
                        className=' hover:text-neutral-400'>
                        About
                      </Link>
                      <Link
                        to='/'
                        onClick={() => setIsOpen(false)}
                        className=' hover:text-neutral-400'>
                        Contact
                      </Link>
                    </nav>
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>
          )}
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
