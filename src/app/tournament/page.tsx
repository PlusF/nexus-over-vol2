'use client';

import { Battle } from '@/types/Tournament';
import { TournamentBracket } from '@/components/TournamentBracket';
import sharedStyles from '../page.shared.module.css';
import { useEffect, useState } from 'react';

const API_ENDPOINT = 'https://2o6ijocxi5.execute-api.ap-northeast-1.amazonaws.com/battles';

export default function Tournament() {
  const [battles, setBattles] = useState<Battle[]>([]);

  useEffect(() => {
    const fetchBattles = async () => {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      setBattles(data);
    };
    fetchBattles();
  }, []);

  return (
    <main className={sharedStyles.main}>
      <h1 className={sharedStyles.heading}>トーナメント表</h1>
      <TournamentBracket battles={battles} />
    </main>
  );
}
