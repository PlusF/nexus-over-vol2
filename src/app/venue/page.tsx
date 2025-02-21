import styles from '../page.shared.module.css';
import { BackButton } from '@/components/BackButton';

export default function Venue() {
  return (
    <div className={styles.container}>
      <BackButton />
      <main className={styles.main}>
        <h1 className={styles.heading}>Venue</h1>
        <div className="venue-info">
          <p>coming soon</p>
        </div>
      </main>
    </div>
  );
} 