'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { type ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  key?: string;
}

export default function PageTransition({ children, key }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          enter: { duration: 0.4, ease: 'easeOut' },
          exit: { duration: 0.3, ease: 'easeIn' },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
