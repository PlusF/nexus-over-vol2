'use client'
import { useRouter } from 'next/navigation';
import styles from './BackButton.module.css';
import { IoArrowBack } from "react-icons/io5";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={styles.backButton}
      aria-label="戻る"
    >
      <IoArrowBack size={24} />
    </button>
  );
}; 