'use client';
import { Header } from '@/components/Header';
import sharedStyles from '@/app/page.shared.module.css';
import styles from './Prelim.module.css';
import { BackButton } from '@/components/BackButton';
import Image from 'next/image';
import { EntryForm } from '@/components/EntryForm';
import { Entry as EntryType } from '@/types/Entry';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const API_ENDPOINT = 'https://2o6ijocxi5.execute-api.ap-northeast-1.amazonaws.com/prelim-entries';

const postEntry = async (entry: EntryType) => {
  const response = await fetch(API_ENDPOINT, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: uuidv4(),
      ...entry
    })
  });
  return response.json();
};

export default function Prelim() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (entry: EntryType) => {
    try {
      setIsLoading(true);
      await postEntry(entry);
      alert('申込完了しました');
      router.push('/');
    } catch (error) {
      console.error(error);
      alert('エラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className={sharedStyles.container}>
        <BackButton />
        <main className={sharedStyles.main}>
          <h1 className={sharedStyles.heading}>NExus Over 現役予選</h1>

          <section className={styles.dateSection}>
            <p className={styles.date}>2025.4.26(Sat.)</p>
            <p className={styles.location}>@スタジオよもだ</p>
          </section>

          <section className={styles.judgesSection}>
            <h2 className={styles.judgesHeading}>Judges</h2>
            <div className={styles.judgeContainer}>
              <div className={styles.judgeCard}>
                <Image
                  src="/prelim-judge-1.jpg"
                  alt="Judge 1"
                  width={150}
                  height={200}
                  className={styles.judgeImage}
                />
                <p className={styles.judgeName}>Tait Angle</p>
                <p className={styles.judgeRep}>35th/LDC</p>
              </div>
              <div className={styles.judgeCard}>
                <Image
                  src="/prelim-judge-2.jpg"
                  alt="Judge 2"
                  width={150}
                  height={200}
                  className={styles.judgeImage}
                />
                <p className={styles.judgeName}>Frederick</p>
                <p className={styles.judgeRep}>43rd/chic grandpas/肩の友/So-hait</p>
              </div>
            </div>
          </section>

          <section className={styles.rulesSection}>
            <h2 className={styles.rulesHeading}>Rules</h2>
            <div className={styles.rulesContainer}>
              <ul className={styles.rulesList}>
                <li>45, 46, 47代のみ参加可能</li>
                <li>1on1 フルトーナメント</li>
                <li>優勝者は本戦トーナメント出場権獲得</li>
                <li>参加費 ¥1,000</li>
              </ul>
            </div>
          </section>

          <section className={styles.entrySection}>
            <h2 className={styles.entryHeading}>現役予選Entry</h2>
            <EntryForm
              onSubmit={handleSubmit}
              isLoading={isLoading}
              formType="prelim"
            />
          </section>
        </main>
      </div>
    </>
  );
} 