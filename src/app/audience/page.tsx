'use client'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../page.shared.module.css';
import formStyles from './entry.module.css';
import { BackButton } from '@/components/BackButton';
import Button from '@/components/Button';
import { Audience as AudienceType } from '@/types/Audience';
import { Header } from '@/components/Header';
import { EntryForm } from '@/components/EntryForm';
import { useRouter } from 'next/navigation';

const API_ENDPOINT = 'https://2o6ijocxi5.execute-api.ap-northeast-1.amazonaws.com/audiences';

const postAudience = async (audience: AudienceType) => {
  const response = await fetch(API_ENDPOINT, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: uuidv4(),
      ...audience
    })
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
      <div className={styles.container}>
        <BackButton />
        <main className={styles.main}>
          <h1 className={styles.heading}>観戦申込</h1>
          <EntryForm
            onSubmit={handleSubmit}
            isLoading={isLoading}
            formType="audience"
          />
          {/* <div className={formStyles.entryListButton}>
            <Button onClick={() => router.push('/audience-list')}>
              観戦者一覧
            </Button>
          </div> */}
        </main>
      </div>
    </>
  );
}

