'use client';
import { useState, useEffect } from 'react';

import { BackButton } from '@/components/BackButton';
import { AudienceList as AudienceListComponent } from '@/components/AudienceList';
import { Header } from '@/components/Header';
import { Entry } from '@/types/Entry';
import { sortEntryById } from '@/utils/sortEntryById';

import sharedStyles from '../page.shared.module.css';

const API_ENDPOINT = 'https://2o6ijocxi5.execute-api.ap-northeast-1.amazonaws.com/audiences';

export default function AudienceList() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAudiences = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        if (data.message === 'Internal Server Error') {
          throw new Error('Internal Server Error');
        } else {
          setEntries(data.sort(sortEntryById));
        }
      } catch (error) {
        console.error('観戦者の取得に失敗しました:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAudiences();
  }, []);

  return (
    <>
      <Header />
      <div className={sharedStyles.container}>
        <BackButton />
        <main className={sharedStyles.main}>
          <h1 className={sharedStyles.heading}>観戦者一覧</h1>
          <AudienceListComponent audiences={entries} isLoading={isLoading} />
        </main>
      </div>
    </>
  );
}
