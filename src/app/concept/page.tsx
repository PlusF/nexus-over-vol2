import styles from '../page.shared.module.css';
import { BackButton } from '@/components/BackButton';

export default function Concept() {
  return (
    <div className={styles.container}>
      <BackButton />
      <main className={styles.main}>
        <h1 className={styles.heading}>Concept</h1>
        <div className="concept">
          <p>coming soon</p>
        </div>
      </main>
    </div>
  );
} 