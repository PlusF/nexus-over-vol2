import styles from '../page.shared.module.css';
import { BackButton } from '@/components/BackButton';

export default function TimeTable() {
  return (
    <div className={styles.container}>
      <BackButton />
      <main className={styles.main}>
        <h1 className={styles.heading}>Time Table</h1>
        <div className="schedule">
          <p>coming soon...</p>
        </div>
      </main>
    </div>
  );
} 