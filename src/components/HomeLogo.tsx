'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import styles from './HomeLogo.module.css';
// import testStyle from './test.css'
import './test.css';

export const HomeLogo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // スクロールに応じて文字の位置を変更
  const xNexus = useTransform(scrollYProgress, [0, 0.4], [0, 110]);
  const xOver = useTransform(scrollYProgress, [0, 0.4], [0, -32]);
  const scaleOver = useTransform(scrollYProgress, [0, 0.4], [1, 1.3]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4], [1, 0.5, 0]);

  const mirageAnimation = {
    initial: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
      scale: 1.1,
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const shimmerAnimation = {
    animate: {
      // x: [-0.5, 0.5, -0.5, 0.4, -0.4, 0.4, -0.3, 0.3, -0.3, 0.3, -0.2, 0.2, -0.2, 0.2, -0.1, 0.1, -0.1, 0.1, -0.1, 0.1, 0],
      filter: [
        // 'blur(0px) brightness(1)',
        'blur(1px) brightness(1.2)',
        'blur(2px) brightness(1.3)',
        'blur(3px) brightness(1.4)',
        'blur(4px) brightness(1.5)',
        'blur(5px) brightness(1.6)',
        'blur(6px) brightness(1.7)',
        'blur(0px) brightness(1)',
      ],
      transition: {
        duration: 1,
        ease: 'easeInOut',
        repeat: 0,
      },
    },
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.logoContainer}>
        <div className="test">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="squiggly-0">
                <feTurbulence
                  baseFrequency="0.01 0.02"
                  numOctaves="3"
                  seed="0"
                  type="fractalNoise"
                />
                <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="5" />
              </filter>
              <filter id="squiggly-1">
                <feTurbulence
                  baseFrequency="0.01 0.02"
                  numOctaves="3"
                  seed="1"
                  type="fractalNoise"
                />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" />
              </filter>
              <filter id="squiggly-2">
                <feTurbulence
                  baseFrequency="0.01 0.02"
                  numOctaves="3"
                  seed="2"
                  type="fractalNoise"
                />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
              </filter>
              <filter id="squiggly-3">
                <feTurbulence
                  baseFrequency="0.01 0.02"
                  numOctaves="3"
                  seed="3"
                  type="fractalNoise"
                />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" />
              </filter>
              <filter id="squiggly-4">
                <feTurbulence
                  baseFrequency="0.01 0.02"
                  numOctaves="3"
                  seed="4"
                  type="fractalNoise"
                />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
              </filter>
            </defs>
          </svg>
          <motion.span
            animate="animate"
            className={styles.textLeft}
            initial="initial"
            style={{ x: xNexus }}
            variants={mirageAnimation}
            whileInView={shimmerAnimation.animate}
          >
            NE
            <motion.span style={{ opacity: scrollOpacity }}>xus</motion.span>
          </motion.span>
          <motion.span
            animate="animate"
            className={styles.textRight}
            initial="initial"
            style={{ x: xOver, scale: scaleOver }}
            variants={mirageAnimation}
            whileInView={shimmerAnimation.animate}
          >
            O<motion.span style={{ opacity: scrollOpacity }}>ver</motion.span>
          </motion.span>
        </div>
        <motion.span
          animate="animate"
          className={styles.vol}
          initial="initial"
          style={{ opacity: scrollOpacity }}
          transition={{ delay: 0.2 }}
          variants={mirageAnimation}
          whileInView={shimmerAnimation.animate}
        >
          vol.2
        </motion.span>
        <motion.span
          animate="animate"
          className={styles.description}
          initial="initial"
          transition={{ delay: 0.2 }}
          variants={mirageAnimation}
        >
          2025.6.29 @ 六本木CUBE
        </motion.span>
      </div>
    </div>
  );
};
