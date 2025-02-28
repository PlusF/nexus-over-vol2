import { BackButton } from '@/components/BackButton';
import { Header } from '@/components/Header';

import styles from '../page.shared.module.css';

export default function Casts() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <BackButton />
        <main className={styles.main}>
          <h1 className={styles.heading}>Casts</h1>
          <div className="cast-list">
            <p>coming soon...</p>
          </div>
        </main>
      </div>
    </>
  );
}
