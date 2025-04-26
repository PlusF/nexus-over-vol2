'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ulid } from 'ulid';

import { BackButton } from '@/components/BackButton';
import Button from '@/components/Button';
import { EntryForm } from '@/components/EntryForm';
import { Header } from '@/components/Header';
import { Entry as EntryType } from '@/types/Entry';

import sharedStyles from '../page.shared.module.css';

import styles from './entry.module.css';

const API_ENDPOINT = 'https://2o6ijocxi5.execute-api.ap-northeast-1.amazonaws.com/entries';

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

export default function Entry() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (entry: EntryType) => {
    try {
      setIsLoading(true);
      await postEntry(entry);
      router.push('/entry-list');
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
          <h1 className={sharedStyles.heading}>Entry</h1>

          <div className={styles.infoBox}>
            <p className={styles.infoText}>・エントリー費：3,500円（ドリチケ2枚込み）</p>
            <p className={styles.infoText}>
              ・6月27日24:00以降のキャンセルは100%のキャンセル料が発生します。
            </p>
            <p className={styles.infoText}>
              ・キャンセルの連絡は
              <a
                className={styles.infoLink}
                href="https://www.instagram.com/neo_wish"
                rel="noopener noreferrer"
                target="_blank"
              >
                公式Instagram
              </a>
              のDMにてお願いします。
            </p>
          </div>

          <EntryForm formType="main" isLoading={isLoading} onSubmit={handleSubmit} />
          <div className={styles.entryListButton}>
            <Button onClick={() => router.push('/entry-list')}>Entry一覧</Button>
          </div>
        </main>
      </div>
    </>
  );
}
