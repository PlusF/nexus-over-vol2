import { BackButton } from '@/components/BackButton';
import { Header } from '@/components/Header';

import styles from '../page.shared.module.css';

export default function TimeTable() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <BackButton />
        <main className={styles.main}>
          <h1 className={styles.heading}>Time Table</h1>
          <div className="schedule">
            <p>coming soon...</p>
          </div>
        </main>
      </div>
    </>
  );
}
