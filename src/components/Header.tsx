'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import imageLoader from '../app/imageLoader';

import styles from './Header.module.css';
import { Menu } from './Menu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.placeholder} />
        <Link className={styles.logo} href="/">
          <Image alt="logo" height={50} loader={imageLoader} src="/logo_trimmed.png" width={50} />
        </Link>
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
        </button>
      </div>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export const MotionHeader = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);

  return (
    <motion.header style={{ opacity: opacity }}>
      <Header />
    </motion.header>
  );
};
