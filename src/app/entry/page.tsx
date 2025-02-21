'use client'
import { useState } from 'react';
import styles from '../home.module.css';
import formStyles from './entry.module.css';
import { BackButton } from '@/components/BackButton';
import Button from '@/components/Button';

export default function Entry() {
  const [formData, setFormData] = useState({
    realName: '',
    dancerName: '',
    repTeam: '',
    generation: '',
    genre: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでフォームデータの送信処理を実装
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.entryContainer}>
      <BackButton />
      <div className={styles.entryContent}>
        <h1 className={styles.entryTitle}>ENTRY</h1>
        <p className={styles.entrySubtitle}>NEO - NExus Over vol.2</p>
        <form className={formStyles.entryForm} onSubmit={handleSubmit}>
          <div className={formStyles.formGroup}>
            <label className={formStyles.label} htmlFor="realName">本名</label>
            <input
              type="text"
              id="realName"
              name="realName"
              className={formStyles.input}
              value={formData.realName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={formStyles.formGroup}>
            <label className={formStyles.label} htmlFor="dancerName">Entry Name</label>
            <input
              type="text"
              id="dancerName"
              name="dancerName"
              className={formStyles.input}
              value={formData.dancerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={formStyles.formGroup}>
            <label className={formStyles.label} htmlFor="repTeam">Rep.</label>
            <input
              type="text"
              id="repTeam"
              name="repTeam"
              className={formStyles.input}
              value={formData.repTeam}
              onChange={handleChange}
            />
          </div>

          <div className={formStyles.formGroup}>
            <label className={formStyles.label} htmlFor="generation">代</label>
            <input
              type="number"
              id="generation"
              name="generation"
              className={formStyles.input}
              value={formData.generation}
              onChange={handleChange}
              required
            />
          </div>

          <div className={formStyles.formGroup}>
            <label className={formStyles.label} htmlFor="genre">ジャンル</label>
            <select
              id="genre"
              name="genre"
              className={formStyles.select}
              value={formData.genre}
              onChange={handleChange}
              required
            >
              <option value="">選択してください</option>
              <option value="hiphop">HipHop</option>
              <option value="house">House</option>
              <option value="lock">Locking</option>
              <option value="pop">Popping</option>
              <option value="break">Breaking</option>
              <option value="jazz">Jazz</option>
              <option value="waacking">Waacking</option>
              <option value="other">FreeStyle</option>
            </select>
          </div>

          <div className={formStyles.formGroup}>
            <Button type="submit">送信</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

