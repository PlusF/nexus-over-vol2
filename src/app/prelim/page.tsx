'use client';
import { useEffect, useState } from 'react';
import { ulid } from 'ulid';

import sharedStyles from '@/app/page.shared.module.css';
import { BackButton } from '@/components/BackButton';
import { CastCard } from '@/components/CastCard';
import { EntryForm } from '@/components/EntryForm';
import { EntryList } from '@/components/EntryList';
import { Header } from '@/components/Header';
import { Entry as EntryType } from '@/types/Entry';
import { sortEntryById } from '@/utils/sortEntryById';

import styles from './Prelim.module.css';

const API_ENDPOINT = 'https://2o6ijocxi5.execute-api.ap-northeast-1.amazonaws.com/prelim-entries';

const postEntry = async (entry: EntryType) => {
  const response = await fetch(API_ENDPOINT, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: ulid(),
      ...entry,
    }),
  });
  return response.json();
};

// キャストデータ
const judges = [
  {
    id: 1,
    name: 'Tait Angle',
    rep: ['35th', 'LDC'],
    profile: '',
    image: '/prelim-judge-1.jpg',
    instagram: 'https://www.instagram.com/aka_ango',
  },
  {
    id: 2,
    name: 'Frederick',
    rep: ['43rd', 'chic grandpas', '肩の友', 'So-hait'],
    profile: '',
    image: '/prelim-judge-2.jpg',
    instagram: 'https://www.instagram.com/mine.yk221',
  },
];

const dj = {
  id: 3,
  name: 'ニトロゼウス',
  rep: ['39th', 'FreeFront', 'MightyBeatBation'],
  profile: '',
  image: '/prelim-dj.jpg',
  instagram: 'https://www.instagram.com/bboy_emma_ffc_mbb',
};

const mc = {
  id: 4,
  name: 'かかと',
  rep: ['44th', 'フローライト', 'Buckdown', 'So-hait'],
  profile: '',
  image: '/mc.jpg',
  instagram: 'https://www.instagram.com/kkt__wl',
};

export default function Prelim() {
  const [isLoading, setIsLoading] = useState(false);
  const [entries, setEntries] = useState<EntryType[]>([]);

  const handleSubmit = async (entry: EntryType) => {
    try {
      setIsLoading(true);
      await postEntry(entry);
      alert('申込完了しました');
    } catch (error) {
      console.error(error);
      alert('エラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      setEntries(data.sort(sortEntryById));
    };
    fetchEntries();
  }, []);

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
              {judges.map(judge => (
                <CastCard
                  key={judge.id}
                  achievements={[]}
                  image={judge.image}
                  instagram={judge.instagram}
                  name={judge.name}
                  profile={judge.profile}
                  rep={judge.rep}
                />
              ))}
            </div>
          </section>

          <section className={styles.judgesSection}>
            <h2 className={styles.judgesHeading}>DJ</h2>
            <div className={styles.judgeContainer}>
              <CastCard
                achievements={[]}
                image={dj.image}
                instagram={dj.instagram}
                name={dj.name}
                profile={dj.profile}
                rep={dj.rep}
              />
            </div>
          </section>
          <section className={styles.judgesSection}>
            <div className={styles.judgeContainer}>
              <CastCard
                achievements={[]}
                image={mc.image}
                instagram={mc.instagram}
                name={mc.name}
                profile={mc.profile}
                rep={mc.rep}
              />
            </div>
          </section>

          <section className={styles.rulesSection}>
            <h2 className={styles.rulesHeading}>Rules</h2>
            <div className={styles.rulesContainer}>
              <ul className={styles.rulesList}>
                <li>45, 46, 47代のみ参加可能</li>
                <li>1on1 フルトーナメント</li>
                <li>優勝者は本戦トーナメント出場権獲得</li>
                <li>敗退者は当日予選も参加可能</li>
                <li>参加費 ¥1,000</li>
              </ul>
            </div>
          </section>

          <section className={styles.entrySection}>
            <h2 className={styles.entryHeading}>現役予選Entry</h2>
            <EntryForm formType="prelim" isLoading={isLoading} onSubmit={handleSubmit} />
          </section>

          <section className={styles.entrySection}>
            <h2 className={styles.entryHeading}>Entry List</h2>
            <EntryList entries={entries} isLoading={isLoading} />
          </section>
        </main>
      </div>
    </>
  );
}
