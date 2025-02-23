import styles from '../page.shared.module.css';
import { BackButton } from '@/components/BackButton';
import { Header } from '@/components/Header';

export default function Movies() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <BackButton />
        <main className={styles.main}>
          <h1 className={styles.heading}>Movies</h1>
          <div className="movie-list">
            <p>coming soon...</p>
          </div>
        </main>
      </div>
    </>
  );
} 