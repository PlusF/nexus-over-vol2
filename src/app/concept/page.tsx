import { BackButton } from '@/components/BackButton';
import { Header } from '@/components/Header';

import styles from '../page.shared.module.css';

export default function Concept() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <BackButton />
        <main className={styles.main}>
          <h1 className={styles.heading}>Concept</h1>
          <div className="concept">
            <p>coming soon...</p>
          </div>
        </main>
      </div>
    </>
  );
}
