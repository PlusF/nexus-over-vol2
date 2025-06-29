'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ulid } from 'ulid';

import { BackButton } from '@/components/BackButton';
import Button from '@/components/Button';
import { EntryForm } from '@/components/EntryForm';
import { Header } from '@/components/Header';
import { Audience as AudienceType } from '@/types/Audience';

import sharedStyles from '../page.shared.module.css';
import styles from '../entry/entry.module.css';

const API_ENDPOINT = 'https://2o6ijocxi5.execute-api.ap-northeast-1.amazonaws.com/audiences';

const postAudience = async (audience: AudienceType) => {
  const response = await fetch(API_ENDPOINT, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: ulid(),
      ...audience,
    }),
  });
  return response.json();
};

export default function Audience() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (audience: AudienceType) => {
    try {
      setIsLoading(true);
      await postAudience(audience);
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
          <h1 className={sharedStyles.heading}>観覧申込</h1>

          {/* イベント終了メッセージ */}
          <div
            className={styles.infoBox}
            style={{ backgroundColor: '#ffebee', border: '1px solid #f44336' }}
          >
            <h2 style={{ color: '#d32f2f', marginBottom: '10px', fontSize: '18px' }}>
              イベントは終了しました
            </h2>
            <p className={styles.infoText} style={{ color: '#d32f2f' }}>
              観覧申込の受付は終了いたしました。
            </p>
          </div>

          <div className={styles.entryListButton}>
            <Button onClick={() => router.push('/audience-list')}>観戦者一覧</Button>
          </div>
        </main>
      </div>
    </>
  );
}
