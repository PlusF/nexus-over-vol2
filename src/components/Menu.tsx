'use client'
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Menu.module.css';
import Link from 'next/link';
import NextLinkButton from './NextLinkButton';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: MenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.menu}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <nav className={styles.nav}>
              <div className={styles.primaryLink}>
                <NextLinkButton href="/entry" onClick={onClose}>
                  Entry
                </NextLinkButton>
              </div>
              <div className={styles.links}>
                <Link href="/concept" onClick={onClose}>Concept</Link>
                <Link href="/casts" onClick={onClose}>Casts</Link>
                <Link href="/venue" onClick={onClose}>Venue</Link>
                <Link href="/time-table" onClick={onClose}>Time Table</Link>
                <Link href="/movies" onClick={onClose}>Movies</Link>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 