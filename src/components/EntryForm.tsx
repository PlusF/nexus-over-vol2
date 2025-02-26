'use client'
import { useState } from 'react';
import { Entry as EntryType } from '@/types/Entry';
import formStyles from './EntryForm.module.css';
import Button from './Button';

type FormType = 'main' | 'prelim' | 'audience';

interface EntryFormProps {
  onSubmit: (entry: EntryType) => Promise<void>;
  isLoading: boolean;
  initialValues?: Partial<EntryType>;
  formType: FormType;
}

export function EntryForm({ onSubmit, isLoading, initialValues = {}, formType }: EntryFormProps) {
  const [entry, setEntry] = useState<EntryType>({
    realName: '',
    entryName: '',
    rep: '',
    generation: '',
    genre: '',
    instagram: '',
    ...initialValues
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const requiredFields = getRequiredFields(formType);
    const missingFields = requiredFields.filter(field => !entry[field as keyof EntryType]);

    if (missingFields.length > 0) {
      alert('未入力の項目があります');
      return;
    }
    await onSubmit(entry);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEntry(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getRequiredFields = (type: FormType) => {
    switch (type) {
      case 'main':
        return ['realName', 'entryName', 'generation', 'genre'];
      case 'prelim':
        return ['realName', 'entryName', 'generation', 'genre'];
      case 'audience':
        return ['realName', 'generation', 'genre'];
      default:
        return [];
    }
  };

  return (
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

      {formType !== 'audience' && (
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
      )}

      {formType === 'main' && (
        <div className={formStyles.formGroup}>
          <label className={formStyles.label} htmlFor="rep">Rep.</label>
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
      )}

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

      {formType === 'main' && (
        <div className={formStyles.formGroup}>
          <label className={formStyles.label} htmlFor="instagram">
            Instagram
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            className={formStyles.input}
            value={entry?.instagram || ''}
            onChange={handleChange}
            placeholder="@なしで入力してください"
          />
        </div>
      )}

      <div className={formStyles.formGroup}>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? '送信中...' : '送信'}
        </Button>
      </div>
    </form>
  );
} 