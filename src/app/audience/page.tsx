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
          <div className={styles.infoBox}>
            <p className={styles.infoText}>・観覧費：2,000円（ドリチケ2枚込み）</p>
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
          <EntryForm formType="audience" isLoading={isLoading} onSubmit={handleSubmit} />
          <div className={styles.entryListButton}>
            <Button onClick={() => router.push('/audience-list')}>観戦者一覧</Button>
          </div>
        </main>
      </div>
    </>
  );
}
