import { BackButton } from '@/components/BackButton';
import { Header } from '@/components/Header';

import sharedStyles from '../page.shared.module.css';

import styles from './Movies.module.css';

export default function Movies() {
  return (
    <>
      <Header />
      <div className={sharedStyles.container}>
        <BackButton />
        <main className={sharedStyles.main}>
          <h1 className={sharedStyles.heading}>Movies</h1>
          <div className={styles.movieContainer}>
            <h2 className={styles.movieTitle}>準告知映像</h2>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              src="https://www.youtube.com/embed/aEFpXpWrEcg?si=rEdsG8YyfnAi0jaC"
              title="YouTube video player"
              width="100%"
            />
          </div>
          <div className={styles.movieContainer}>
            <h2 className={styles.movieTitle}>本告知映像</h2>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              src="https://www.youtube.com/embed/gqhkNI7ODYA?si=ykw_0Ux4ttcuS4QC"
              title="YouTube video player"
              width="100%"
            />
          </div>
        </main>
      </div>
    </>
  );
}
