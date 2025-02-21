'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './HomeLogo.module.css';

export const HomeLogo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // スクロールに応じて文字の位置を変更
  const xNexus = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  const xOver = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.5, 0]);

  const mirageAnimation = {
    initial: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
      scale: 1.1
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
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
        'blur(0px) brightness(1)'
      ],
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: 0,
      }
    }
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.logoContainer}>
        <motion.span
          style={{ x: xNexus }}
          className={styles.textLeft}
          variants={mirageAnimation}
          initial="initial"
          animate="animate"
          whileInView={shimmerAnimation.animate}
        >
          NExus
        </motion.span>
        <motion.span
          style={{ x: xOver }}
          className={styles.textRight}
          variants={mirageAnimation}
          initial="initial"
          animate="animate"
          whileInView={shimmerAnimation.animate}
        >
          Over
        </motion.span>
        <motion.span
          className={styles.vol}
          variants={mirageAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
          style={{ opacity: scrollOpacity }}
          whileInView={{
            ...shimmerAnimation.animate,
            transition: {
              ...shimmerAnimation.animate.transition,
              delay: 0.1
            }
          }}
        >
          vol.2
        </motion.span>
      </div>
    </div>
  );
};
