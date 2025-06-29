'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { calculateBattleId } from '@/utils/battleIdCalculator';
import sharedStyles from '../page.shared.module.css';
import styles from './UpdateBattle.module.css';

const API_ENDPOINT = 'https://2o6ijocxi5.execute-api.ap-northeast-1.amazonaws.com/battles';

export default function UpdateBattle() {
  const [round, setRound] = useState('');
  const [position, setPosition] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // roundとpositionからidを計算
      const battleId = calculateBattleId(Number(round), Number(position));

      // 直接外部APIにPUTリクエストを送信
      const response = await fetch(API_ENDPOINT, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: battleId,
          round: Number(round),
          position: Number(position),
          name: String(name) || '',
        }),
      });

      if (response.ok) {
        setMessage('バトル情報が正常に更新されました');
        setRound('');
        setPosition('');
        setName('');
      } else {
        const errorData = await response.json();
        setMessage(`エラー: ${errorData.error || 'API request failed'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      if (error instanceof Error) {
        setMessage(`エラー: ${error.message}`);
      } else {
        setMessage('更新中にエラーが発生しました');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={sharedStyles.container}>
      <main className={sharedStyles.main}>
        <h1 className={sharedStyles.heading}>バトル情報更新</h1>

        <form onSubmit={handleSubmit} className={styles.updateForm}>
          <div className={styles.formGroup}>
            <label htmlFor="round" className={styles.label}>
              ラウンド
            </label>
            <input
              type="number"
              id="round"
              value={round}
              onChange={e => setRound(e.target.value)}
              className={styles.input}
              placeholder="ラウンド番号を入力 (1-5)"
              required
              min="1"
              max="5"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="position" className={styles.label}>
              ポジション
            </label>
            <input
              type="number"
              id="position"
              value={position}
              onChange={e => setPosition(e.target.value)}
              className={styles.input}
              placeholder="ポジション番号を入力"
              required
              min="1"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              名前
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className={styles.input}
              placeholder="参加者名を入力"
            />
          </div>

          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? '更新中...' : '更新'}
          </button>

          {message && (
            <div
              className={`${styles.message} ${message.includes('エラー') ? styles.error : styles.success}`}
            >
              {message}
            </div>
          )}
        </form>

        <div className={styles.navigation}>
          <button onClick={() => router.push('/tournament')} className={styles.backButton}>
            トーナメント表に戻る
          </button>
        </div>
      </main>
    </div>
  );
}
