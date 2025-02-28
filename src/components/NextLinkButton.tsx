import Link from 'next/link';

import styles from './Button.module.css';

interface NextLinkButtonProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

export default function NextLinkButton({ children, href, onClick }: NextLinkButtonProps) {
  return (
    <Link className={styles.button} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
