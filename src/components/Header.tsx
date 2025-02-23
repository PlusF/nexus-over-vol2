'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Header.module.css';
import Link from 'next/link';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Menu } from './Menu';
import { useState } from 'react';
import Image from 'next/image';
import imageLoader from '../app/imageLoader';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.placeholder} />
        <Link href="/" className={styles.logo}>
          <Image src="/logo_trimmed.png" alt="logo" width={50} height={50} loader={imageLoader} />
        </Link>
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
        </button>
      </div>
      <Menu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </div>
  );
};

export const MotionHeader = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);

  return (
    <motion.header
      style={{ opacity: opacity }}
    >
      <Header />
    </motion.header>
  );
}