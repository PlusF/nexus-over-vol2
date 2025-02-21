'use client'
import styles from "./home.module.css";
import { HomeLogo } from "@/components/HomeLogo";
import NextLinkButton from '@/components/NextLinkButton';
import { useRouter } from 'next/navigation';
import Button from "@/components/Button";
export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HomeLogo />
        <section className={styles.entryButtonContainer}>
          <NextLinkButton href="/entry">Entry</NextLinkButton>
        </section>
        <section className={styles.concept}>
          <div className={styles.writing}>
            <h1>Concept</h1>
            <p>かっこよくてシンプルなテキスト</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button onClick={() => router.push('/concept')}>
              詳細 ☞
            </Button>
          </div>
        </section>
        <section className={styles.casts}>
          <div className={styles.writing}>
            <h1>Casts</h1>
            <p>かっこよくてシンプルなテキスト</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button onClick={() => router.push('/casts')}>
              詳細 ☞
            </Button>
          </div>
        </section>
        <section className={styles.venue}>
          <div className={styles.writing}>
            <h1>Venue</h1>
            <p>かっこよくてシンプルなテキスト</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button onClick={() => router.push('/venue')}>
              詳細 ☞
            </Button>
          </div>
        </section>
        <section className={styles.timeTable}>
          <div className={styles.writing}>
            <h1>Time Table</h1>
            <p>かっこよくてシンプルなテキスト</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button onClick={() => router.push('/time-table')}>
              詳細 ☞
            </Button>
          </div>
        </section>
        <section className={styles.movies}>
          <div className={styles.writing}>
            <h1>Movies</h1>
            <p>かっこよくてシンプルなテキスト</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button onClick={() => router.push('/movies')}>
              詳細 ☞
            </Button>
          </div>
        </section>
        <section className={styles.history}>
          <div className={styles.writing}>
            <h1>History</h1>
            <p>かっこよくてシンプルなテキスト</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button onClick={() => window.open('https://nexus-over.vercel.app', '_blank')}>
              詳細 ☞
            </Button>
          </div>
        </section>
        {/* <div className={styles.cardContainer}>
          <Card
            title="Concept"
            description="NEO - NExus Over"
            onClick={() => router.push('/concept')}
            imageSrc="/logo.svg"
          />
          <Card
            title="Casts"
            description="Judges/DJ/MC/Guest Battlers/Showcases"
            onClick={() => router.push('/casts')}
            imageSrc="/logo.svg"
          />
          <Card
            title="Venue"
            description="会場"
            onClick={() => router.push('/venue')}
            imageSrc="/logo.svg"
          />
          <Card
            title="Time Table"
            description="タイムテーブル"
            onClick={() => router.push('/time-table')}
            imageSrc="/logo.svg"
          />
          <Card
            title="Movies"
            description="関連動画"
            onClick={() => router.push('/movies')}
            imageSrc="/logo.svg"
          />
          <Card
            title="History"
            description="vol.1のHPが開きます"
            onClick={() => window.open('https://nexus-over.vercel.app', '_blank')}
            imageSrc="/logo.svg"
          />
        </div> */}
        <section className={styles.entryButtonContainer}>
          <NextLinkButton href="/entry">Entry</NextLinkButton>
        </section>
      </main>
    </div>
  );
}
