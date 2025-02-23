'use client'
import styles from "./home.module.css";
import { HomeLogo } from "@/components/HomeLogo";
import NextLinkButton from '@/components/NextLinkButton';
import { useRouter } from 'next/navigation';
import Button from "@/components/Button";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import imageLoader from "./imageLoader";

export default function Home() {
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  const offset = 0.1;
  const duration = 0.2;
  const interval = 0.11;

  const range = (index: number) => {
    return [offset + index * interval, offset + index * interval + duration]
  }

  const xRange1 = useTransform(scrollYProgress,
    range(0),
    [-500, 0]
  )
  const opacityRange1 = useTransform(scrollYProgress,
    range(0),
    [0, 0.5]
  )
  const xRange2 = useTransform(scrollYProgress,
    range(1),
    [-500, 0]
  )
  const opacityRange2 = useTransform(scrollYProgress,
    range(1),
    [0, 0.5]
  )
  const xRange3 = useTransform(scrollYProgress,
    range(2),
    [-500, 0]
  )
  const opacityRange3 = useTransform(scrollYProgress,
    range(2),
    [0, 0.5]
  )
  const xRange4 = useTransform(scrollYProgress,
    range(3),
    [-500, 0]
  )
  const opacityRange4 = useTransform(scrollYProgress,
    range(3),
    [0, 0.5]
  )
  const xRange5 = useTransform(scrollYProgress,
    range(4),
    [-500, 0]
  )
  const opacityRange5 = useTransform(scrollYProgress,
    range(4),
    [0, 0.5]
  )
  const xRange6 = useTransform(scrollYProgress,
    range(5),
    [-500, 0]
  )
  const opacityRange6 = useTransform(scrollYProgress,
    range(5),
    [0, 0.5]
  )

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HomeLogo />
        <section className={styles.entryButtonContainer}>
          <NextLinkButton href="/entry">Entry</NextLinkButton>
        </section>
        <section className={styles.sectionContainer}>
          <motion.div
            className={styles.background}
            style={{ x: xRange1, opacity: opacityRange1 }}
          >
            <Image
              className={styles.backgroundImage}
              src="/concept-background.jpg"
              alt="concept background"
              fill
              style={{ objectFit: 'cover' }}
              loader={imageLoader}
            />
          </motion.div>
          <div className={styles.writing}>
            <h1>Concept</h1>
            <p>&quot;熱の波及&quot;</p>
          </div>
          <div className={styles.detailButton}>
            <Button onClick={() => router.push('/concept')}>
              詳細 ☞
            </Button>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <motion.div
            className={styles.background}
            style={{ x: xRange2, opacity: opacityRange2 }}
          >
            <Image
              className={styles.backgroundImage}
              src="/casts-background.jpg"
              alt="casts background"
              fill
              style={{ objectFit: 'cover' }}
              loader={imageLoader}
            />
          </motion.div>
          <div className={styles.writing}>
            <h1>Casts</h1>
            <p>Judges/DJ/MC/Showcases/Battlers</p>
          </div>
          <div className={styles.detailButton}>
            <Button onClick={() => router.push('/casts')}>
              詳細 ☞
            </Button>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <motion.div
            className={styles.background}
            style={{ x: xRange3, opacity: opacityRange3 }}
          >
            <Image
              className={styles.backgroundImage}
              src="/venue-background.jpg"
              alt="venue background"
              fill
              style={{ objectFit: 'cover' }}
              loader={imageLoader}
            />
          </motion.div>
          <div className={styles.writing}>
            <h1>Venue</h1>
            <p>六本木CUBE</p>
          </div>
          <div className={styles.detailButton}>
            <Button onClick={() => router.push('/venue')}>
              詳細 ☞
            </Button>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <motion.div
            className={styles.background}
            style={{ x: xRange4, opacity: opacityRange4 }}
          >
            <Image
              className={styles.backgroundImage}
              src="/concept-background.jpg"
              alt="time-table background"
              fill
              style={{ objectFit: 'cover' }}
              loader={imageLoader}
            />
          </motion.div>
          <div className={styles.writing}>
            <h1>Time Table</h1>
            <p>13:00 Open - 21:00 Close</p>
          </div>
          <div className={styles.detailButton}>
            <Button onClick={() => router.push('/time-table')}>
              詳細 ☞
            </Button>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <motion.div
            className={styles.background}
            style={{ x: xRange5, opacity: opacityRange5 }}
          >
            <Image
              className={styles.backgroundImage}
              src="/concept-background.jpg"
              alt="movies background"
              fill
              style={{ objectFit: 'cover' }}
              loader={imageLoader}
            />
          </motion.div>
          <div className={styles.writing}>
            <h1>Movies</h1>
            <p></p>
          </div>
          <div className={styles.detailButton}>
            <Button onClick={() => router.push('/movies')}>
              詳細 ☞
            </Button>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <motion.div
            className={styles.background}
            style={{ x: xRange6, opacity: opacityRange6 }}
          >
            <Image
              className={styles.backgroundImage}
              src="/concept-background.jpg"
              alt="history background"
              fill
              style={{ objectFit: 'cover' }}
              loader={imageLoader}
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
      </main>
    </div>
  );
}
