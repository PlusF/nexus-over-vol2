'use client';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

import styles from './BackButton.module.css';

export const BackButton = () => {
  const router = useRouter();

  return (
    <button aria-label="戻る" className={styles.backButton} onClick={() => router.back()}>
      <IoArrowBack size={24} />
    </button>
  );
};
