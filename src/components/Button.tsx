import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  return (
    <button className={styles.button} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
