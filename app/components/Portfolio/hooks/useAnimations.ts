import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export const useAnimations = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });
  }, [controls]);

  return controls;
};