'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function AnimateOnScroll({ children, className, delay = 0, direction = 'up' }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 50 };
      case 'down':
        return { y: -50 };
      case 'left':
        return { x: 50 };
      case 'right':
        return { x: -50 };
      default:
        return { y: 50 };
    }
  };

  const variants = {
    hidden: { opacity: 0, ...getInitialPosition() },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
