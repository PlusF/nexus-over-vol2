'use client'
import { useState } from 'react';
import styles from '../page.shared.module.css';
import formStyles from './entry.module.css';
import { BackButton } from '@/components/BackButton';
import Button from '@/components/Button';
import { Entry as EntryType } from '@/types/Entry';
import { useRouter } from 'next/navigation';

export default function Entry() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [entry, setEntry] = useState<EntryType>({
    realName: '',
    entryName: '',
    rep: '',
    generation: '',
    genre: '',
    instagram: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!entry.realName || !entry.entryName || !entry.generation || !entry.genre) {
      alert('未入力の項目があります');
      return;
    }
    try {
      setIsLoading(true);
      await fetch('/api/sheets', {
        method: 'POST',
        body: JSON.stringify(entry),
      });
      router.push('/entry-list');
    } catch (error) {
      console.error(error);
      alert('エラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEntry(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.container}>
      <BackButton />
      <main className={styles.main}>
        <h1 className={styles.heading}>Entry</h1>
        <form className={formStyles.entryForm} onSubmit={handleSubmit}>
          <div className={formStyles.formGroup}>
            <label className={formStyles.label} htmlFor="realName">本名</label>
            <input
              type="text"
              id="realName"
              name="realName"
              className={formStyles.input}
              value={entry?.realName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className={formStyles.formGroup}>
            <label className={formStyles.label} htmlFor="entryName">Entry Name</label>
            <input
              type="text"
              id="entryName"
              name="entryName"
              className={formStyles.input}
              value={entry?.entryName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className={formStyles.formGroup}>
            <label className={formStyles.label} htmlFor="rep">Rep. (任意)</label>
            <input
              type="text"
              id="rep"
              name="rep"
              className={formStyles.input}
              value={entry?.rep}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>

          <div className={formStyles.formGroup}>
            <label className={formStyles.label} htmlFor="generation">代</label>
            <input
              type="number"
              id="generation"
              name="generation"
              className={formStyles.input}
              value={entry?.generation}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className={formStyles.formGroup}>
            <label className={formStyles.label} htmlFor="genre">ジャンル</label>
            <select
              id="genre"
              name="genre"
              className={formStyles.select}
              value={entry?.genre}
              onChange={handleChange}
              required
              disabled={isLoading}
            >
              <option value="">選択してください</option>
              <option value="break">Breaking</option>
              <option value="hiphop">HipHop</option>
              <option value="house">House</option>
              <option value="jazz">Jazz</option>
              <option value="lock">Locking</option>
              <option value="pop">Popping</option>
              <option value="waacking">Waacking</option>
              <option value="other">FreeStyle</option>
            </select>
          </div>

          <div className={formStyles.formGroup}>
            <label className={formStyles.label} htmlFor="instagram">Instagram (任意) (@不要)</label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              className={formStyles.input}
              value={entry?.instagram}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>

          <div className={formStyles.formGroup}>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? '送信中...' : '送信'}
            </Button>
          </div>
        </form>
        <div className={formStyles.entryListButton}>
          <Button onClick={() => router.push('/entry-list')}>
            Entry一覧
          </Button>
        </div>
      </main>
    </div>
  );
}

