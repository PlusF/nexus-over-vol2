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
            href="https://instagram.com/neo_wish"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@NExusOver"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

