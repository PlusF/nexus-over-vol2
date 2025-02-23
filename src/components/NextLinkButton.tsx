import Link from 'next/link';
import styles from './Button.module.css';

interface NextLinkButtonProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

export default function NextLinkButton({ children, href, onClick }: NextLinkButtonProps) {
  return (
    <Link
      href={href}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
