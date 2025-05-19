'use client';
import { useScroll, motion, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import { MotionHeader } from '@/components/Header';
import { HomeLogo } from '@/components/HomeLogo';
import NextLinkButton from '@/components/NextLinkButton';

import styles from './Home.module.css';
import imageLoader from './imageLoader';

export default function Home() {
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  const offset = 0.1;
  const duration = 0.2;
  const interval = 0.1;

  const range = (index: number) => {
    return [offset + index * interval, offset + index * interval + duration];
  };
  const xRange = [-500, 0];
  const opacityRange = [0, 0.5];

  const xRange1 = useTransform(scrollYProgress, range(0), xRange);
  const opacityRange1 = useTransform(scrollYProgress, range(0), opacityRange);
  const xRange2 = useTransform(scrollYProgress, range(1), xRange);
  const opacityRange2 = useTransform(scrollYProgress, range(1), opacityRange);
  const xRange3 = useTransform(scrollYProgress, range(2), xRange);
  const opacityRange3 = useTransform(scrollYProgress, range(2), opacityRange);
  const xRange4 = useTransform(scrollYProgress, range(3), xRange);
  const opacityRange4 = useTransform(scrollYProgress, range(3), opacityRange);
  const xRange5 = useTransform(scrollYProgress, range(4), xRange);
  const opacityRange5 = useTransform(scrollYProgress, range(4), opacityRange);
  const xRange6 = useTransform(scrollYProgress, range(5), xRange);
  const opacityRange6 = useTransform(scrollYProgress, range(5), opacityRange);
  const xRange7 = useTransform(scrollYProgress, range(6), xRange);
  const opacityRange7 = useTransform(scrollYProgress, range(6), opacityRange);

  return (
    <>
      <MotionHeader />
      <div className={styles.container}>
        <main className={styles.main}>
          <HomeLogo />
          <section className={styles.entryButtonContainer}>
            <NextLinkButton href="/entry">Entry</NextLinkButton>
          </section>
          <section className={styles.audienceButtonContainer}>
            <NextLinkButton href="/audience">観覧申込</NextLinkButton>
          </section>
          <section className={styles.sectionContainer}>
            <motion.div
              className={styles.background}
              style={{ x: xRange1, opacity: opacityRange1 }}
            >
              <Image
                fill
                alt="concept background"
                className={styles.backgroundImage}
                loader={imageLoader}
                src="/concept-background.jpg"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <div className={styles.writing}>
              <h1>Concept</h1>
              <p>&quot;熱の波及&quot;</p>
            </div>
            <div className={styles.detailButton}>
              <Button onClick={() => router.push('/concept')}>詳細 ☞</Button>
            </div>
          </section>
          <section className={styles.sectionContainer}>
            <motion.div
              className={styles.background}
              style={{ x: xRange2, opacity: opacityRange2 }}
            >
              <Image
                fill
                alt="casts background"
                className={styles.backgroundImage}
                loader={imageLoader}
                src="/casts-background.jpg"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <div className={styles.writing}>
              <h1>Casts</h1>
              <p>Judges/DJ/MC/Showcases/Battlers</p>
            </div>
            <div className={styles.detailButton}>
              <Button onClick={() => router.push('/casts')}>詳細 ☞</Button>
            </div>
          </section>
          <section className={styles.sectionContainer}>
            <motion.div
              className={styles.background}
              style={{ x: xRange3, opacity: opacityRange3 }}
            >
              <Image
                fill
                alt="venue background"
                className={styles.backgroundImage}
                loader={imageLoader}
                src="/venue-background.jpg"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <div className={styles.writing}>
              <h1>Venue</h1>
              <p>六本木CUBE</p>
            </div>
            <div className={styles.detailButton}>
              <Button onClick={() => router.push('/venue')}>詳細 ☞</Button>
            </div>
          </section>
          <section className={styles.sectionContainer}>
            <motion.div
              className={styles.background}
              style={{ x: xRange4, opacity: opacityRange4 }}
            >
              <Image
                fill
                alt="rule background"
                className={styles.backgroundImage}
                loader={imageLoader}
                src="/concept-background.jpg"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <div className={styles.writing}>
              <h1>Rules</h1>
              <p>1on1 freestyle battle</p>
            </div>
            <div className={styles.detailButton}>
              <Button onClick={() => router.push('/rule')}>詳細 ☞</Button>
            </div>
          </section>
          <section className={styles.sectionContainer}>
            <motion.div
              className={styles.background}
              style={{ x: xRange5, opacity: opacityRange5 }}
            >
              <Image
                fill
                alt="time-table background"
                className={styles.backgroundImage}
                loader={imageLoader}
                src="/concept-background.jpg"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <div className={styles.writing}>
              <h1>Time Table</h1>
              <p>13:00 Open - 19:30 Close</p>
            </div>
            <div className={styles.detailButton}>
              <Button onClick={() => router.push('/time-table')}>詳細 ☞</Button>
            </div>
          </section>
          <section className={styles.sectionContainer}>
            <motion.div
              className={styles.background}
              style={{ x: xRange6, opacity: opacityRange6 }}
            >
              <Image
                fill
                alt="movies background"
                className={styles.backgroundImage}
                loader={imageLoader}
                src="/concept-background.jpg"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <div className={styles.writing}>
              <h1>Movies</h1>
              <p>準告知映像（2025.3.7 公開済み）</p>
              <p>本告知映像（2025.4.26 公開済み）</p>
            </div>
            <div className={styles.detailButton}>
              <Button onClick={() => router.push('/movies')}>詳細 ☞</Button>
            </div>
          </section>
          <section className={styles.sectionContainer}>
            <motion.div
              className={styles.background}
              style={{ x: xRange7, opacity: opacityRange7 }}
            >
              <Image
                fill
                alt="history background"
                className={styles.backgroundImage}
                loader={imageLoader}
                src="/concept-background.jpg"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            <div className={styles.writing}>
              <h1>History</h1>
              <p>vol.1のホームページへ</p>
            </div>
            <div className={styles.detailButton}>
              <Button onClick={() => window.open('https://nexus-over.vercel.app', '_blank')}>
                詳細 ☞
              </Button>
            </div>
          </section>
          <section className={styles.entryButtonContainer}>
            <NextLinkButton href="/entry">Entry</NextLinkButton>
          </section>
          <section className={styles.audienceButtonContainer}>
            <NextLinkButton href="/audience">観覧申込</NextLinkButton>
          </section>
          {/* <section className={styles.prelimButtonContainer}>
            <NextLinkButton href="/prelim">現役予選特設ページ☞</NextLinkButton>
          </section> */}
        </main>
      </div>
    </>
  );
}
