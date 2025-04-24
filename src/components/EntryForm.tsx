'use client';
import { useState } from 'react';

import { Entry as EntryType } from '@/types/Entry';

import Button from './Button';
import formStyles from './EntryForm.module.css';
import Link from 'next/link';

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
    ...initialValues,
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
      [name]: value,
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
        <label className={formStyles.label} htmlFor="realName">
          本名
        </label>
        <input
          required
          className={formStyles.input}
          disabled={isLoading}
          id="realName"
          name="realName"
          type="text"
          value={entry?.realName}
          onChange={handleChange}
        />
      </div>

      {formType !== 'audience' && (
        <div className={formStyles.formGroup}>
          <label className={formStyles.label} htmlFor="entryName">
            Entry Name
          </label>
          <input
            required
            className={formStyles.input}
            disabled={isLoading}
            id="entryName"
            name="entryName"
            type="text"
            value={entry?.entryName}
            onChange={handleChange}
          />
        </div>
      )}

      {formType === 'main' && (
        <div className={formStyles.formGroup}>
          <label className={formStyles.label} htmlFor="rep">
            Rep. (任意)
          </label>
          <input
            className={formStyles.input}
            disabled={isLoading}
            id="rep"
            name="rep"
            type="text"
            value={entry?.rep}
            onChange={handleChange}
          />
        </div>
      )}

      <div className={formStyles.formGroup}>
        <label className={formStyles.label} htmlFor="generation">
          代
        </label>
        <input
          required
          className={formStyles.input}
          disabled={isLoading}
          id="generation"
          name="generation"
          type="number"
          value={entry?.generation}
          onChange={handleChange}
        />
      </div>

      <div className={formStyles.formGroup}>
        <label className={formStyles.label} htmlFor="genre">
          ジャンル
        </label>
        <select
          required
          className={formStyles.select}
          disabled={isLoading}
          id="genre"
          name="genre"
          value={entry?.genre}
          onChange={handleChange}
        >
          <option value="">選択してください</option>
          <option value="Breaking">Breaking</option>
          <option value="HipHop">HipHop</option>
          <option value="House">House</option>
          <option value="Jazz">Jazz</option>
          <option value="Locking">Locking</option>
          <option value="Popping">Popping</option>
          <option value="Waacking">Waacking</option>
          <option value="FreeStyle">FreeStyle</option>
        </select>
      </div>

      {formType === 'main' && (
        <div className={formStyles.formGroup}>
          <label className={formStyles.label} htmlFor="instagram">
            Instagram (任意)
          </label>
          <input
            className={formStyles.input}
            id="instagram"
            name="instagram"
            placeholder="@なしで入力してください"
            type="text"
            value={entry?.instagram || ''}
            onChange={handleChange}
          />
        </div>
      )}

      <div className={formStyles.formGroup}>
        <Button disabled={isLoading} type="submit">
          {isLoading ? '送信中...' : '送信'}
        </Button>
        {formType === 'main' && (
          <>
            {/* <p className={formStyles.note}>
              ※こちらは当日予選のエントリーフォームです。 現役予選のエントリーは
              <Link className={formStyles.link} href="/prelim#entry">
                こちら
              </Link>
              。
            </p> */}
            <p className={formStyles.note}>
              ※6月27日24:00以降のキャンセルは100%のキャンセル料が発生します。キャンセルの連絡は
              <Link className={formStyles.link} href="https://www.instagram.com/neo_wish">
                公式Instagram
              </Link>
              のDMにてお願いします。
            </p>
          </>
        )}
        {formType === 'prelim' && (
          <>
            <p className={formStyles.note}>
              ※こちらは現役予選のエントリーフォームです。 当日予選のエントリーは
              <Link className={formStyles.link} href="/entry">
                こちら
              </Link>
              。
            </p>
            <p className={formStyles.note}>
              ※4月24日24:00以降のキャンセルは100%のキャンセル料が発生します。キャンセルの連絡は
              <Link className={formStyles.link} href="https://www.instagram.com/neo_wish">
                公式Instagram
              </Link>
              のDMにてお願いします。
            </p>
          </>
        )}
      </div>
    </form>
  );
}
