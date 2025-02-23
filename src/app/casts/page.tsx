import styles from '../page.shared.module.css';
import { BackButton } from '@/components/BackButton';

export default function Casts() {
  return (
    <div className={styles.container}>
      <BackButton />
      <main className={styles.main}>
        <h1 className={styles.heading}>Casts</h1>
        <div className="cast-list">
          <p>coming soon...</p>
        </div>
      </main>
    </div>
  );
} 