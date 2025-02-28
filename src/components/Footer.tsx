import { FaInstagram, FaYoutube } from 'react-icons/fa';

import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <p>&copy; 2025 NExus Over</p>
        </div>
        <div className={styles.socialLinks}>
          <a
            className={styles.socialLink}
            href="https://instagram.com/neo_wish"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            className={styles.socialLink}
            href="https://youtube.com/@NExusOver"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};
