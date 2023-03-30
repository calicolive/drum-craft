import { Outlet, useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';
useLocation;

export default function MotionWrapper() {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      transition={{ duration: 1, delay: 0, staggerChildren: 2 }}>
      <Outlet />
    </motion.div>
  );
}
