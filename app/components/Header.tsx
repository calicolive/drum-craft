import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex h-16 border-b border-neutral-50/5 '>
      <div className='mx-auto flex w-full items-center justify-center px-8'>
        <nav className='flex w-full items-center justify-center text-slate-50'>
          <Link to={'/'} className='text-2xl font-bold tracking-tight'>
            DRUMCRAFT
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
